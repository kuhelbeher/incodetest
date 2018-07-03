// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Input, Grid, Container, Loader } from 'semantic-ui-react';

import ActiveClient from '../../components/ActiveClient/ActiveClient';
import ClientItem from '../../components/ClientItem/ClientItem';
import * as actions from '../../store/actions/index';
import type { Client } from '../../flowtypes/types';

type Props = {
  clientsLoading: boolean,
  clients: Array<Client>,
  onClientClick: Function,
  activeClient: Client,
  onSearchClients: Function,
  searchResults: Array<Client>,
  searchValue: string,
  onFetchClients: Function,
};

class Clients extends Component<Props> {
  // fetching clients
  componentDidMount() {
    const { onFetchClients } = this.props;
    onFetchClients();
  }

  render() {
    const {
      clientsLoading,
      clients,
      onClientClick,
      activeClient,
      onSearchClients,
      searchResults,
      searchValue,
    } = this.props;

    // creating loading component
    let clientsList = (
      <Menu.Item style={{ height: '150px' }}>
        <Loader active>Loading</Loader>
      </Menu.Item>
    );

    // when clients loaded render client list
    if (!clientsLoading) {
      const clientsMap = searchValue === '' ? clients : searchResults;
      if (clientsMap.length > 0) {
        clientsList = clientsMap.map(client => (
          <ClientItem
            key={client.contact.email}
            client={client}
            activeClient={activeClient}
            onClientClick={onClientClick}
          />
        ));
      } else {
        clientsList = (
          <Menu.Item>
            <p
              style={{
                textAlign: 'center',
                fontSize: '16px',
                verticalAlign: 'middle',
              }}>
              No Found Results
            </p>
          </Menu.Item>
        );
      }
    }

    let activeItem = null;

    if (activeClient) {
      activeItem = <ActiveClient activeClient={activeClient} />;
    }

    return (
      <Container>
        <Grid>
          <Grid.Column mobile={16} computer={6}>
            <Menu vertical fluid>
              <Menu.Item>
                <Input
                  onChange={event => onSearchClients(event, clients)}
                  icon="search"
                  placeholder="Search..."
                />
              </Menu.Item>
              {clientsList}
            </Menu>
          </Grid.Column>
          {activeItem}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.clients.clients,
  clientsLoading: state.clients.loading,
  activeClient: state.clients.activeClient,
  searchValue: state.search.searchValue,
  searchResults: state.search.searchResults,
});

const mapDispatchToProps = dispatch => ({
  onFetchClients: () => dispatch(actions.fetchClients()),
  onClientClick: activeClient => dispatch(actions.clientClick(activeClient)),
  onSearchClients: (event, clients) =>
    dispatch(actions.searchClients(event.target.value, clients)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clients);
