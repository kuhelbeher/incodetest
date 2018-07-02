import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Input, Grid, Container, Loader } from 'semantic-ui-react';

import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    const { onFetchClients } = this.props;
    onFetchClients();
  }

  render() {
    const { clientsLoading, clients } = this.props;

    let clientsList = (
      <Menu.Item style={{ height: '150px' }}>
        <Loader active>Loading</Loader>
      </Menu.Item>
    );

    if (!clientsLoading) {
      clientsList = clients.map(client => (
        <Menu.Item>{client.general.firstName}</Menu.Item>
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
});

const mapDispatchToProps = dispatch => ({
  onFetchClients: () => dispatch(actions.fetchClients()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
