import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Input, Grid, Container, Loader } from 'semantic-ui-react';

import ActiveClient from './components/ActiveClient/ActiveClient';
import ClientItem from './components/ClientItem/ClientItem';
import * as actions from './store/actions/index';

class App extends Component {
  // fetching clients
  componentDidMount() {
    const { onFetchClients } = this.props;
    onFetchClients();
  }

  render() {
    const { clientsLoading, clients, onClientClick, activeClient } = this.props;

    // creating loading component
    let clientsList = (
      <Menu.Item style={{ height: '150px' }}>
        <Loader active>Loading</Loader>
      </Menu.Item>
    );

    // when clients loaded render client list
    if (!clientsLoading) {
      clientsList = clients.map(client => (
        <ClientItem
          client={client}
          activeClient={activeClient}
          onClientClick={onClientClick}
        />
      ));
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
                <Input icon="search" placeholder="Search..." />
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
});

const mapDispatchToProps = dispatch => ({
  onFetchClients: () => dispatch(actions.fetchClients()),
  onClientClick: activeClient => dispatch(actions.clientClick(activeClient)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
