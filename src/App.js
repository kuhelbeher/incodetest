import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Input, Grid, Container, Loader, Image } from 'semantic-ui-react';

import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    const { onFetchClients } = this.props;
    onFetchClients();
  }

  render() {
    const { clientsLoading, clients, onClientClick, activeClient } = this.props;

    let clientsList = (
      <Menu.Item style={{ height: '150px' }}>
        <Loader active>Loading</Loader>
      </Menu.Item>
    );

    if (!clientsLoading) {
      clientsList = clients.map(client => (
        <Menu.Item
          key={client.contact.email}
          name={client.contact.email}
          active={
            activeClient
              ? activeClient.contact.email === client.contact.email
              : false
          }
          onClick={() => onClientClick(client)}
          style={{ display: 'flex' }}>
          <Image
            style={{ alignSelf: 'center', marginRight: '20px' }}
            src={client.general.avatar}
            size="tiny"
            verticalAlign="middle"
          />
          <div>
            <p>{`${client.general.firstName} ${client.general.lastName}`}</p>
            <p>{client.job.title}</p>
          </div>
        </Menu.Item>
      ));
    }

    return (
      <Container>
        <Grid>
          <Grid.Column mobile={16} computer={6}>
            <Menu vertical fluid>
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              {clientsList}
            </Menu>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.clients.clients,
  clientsLoading: state.clients.loading,
  activeClient: state.clients.activeClient,
});

const mapDispatchToProps = dispatch => ({
  onFetchClients: () => dispatch(actions.fetchClients()),
  onClientClick: activeClient => dispatch(actions.clientClick(activeClient)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
