import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Menu,
  Input,
  Grid,
  Container,
  Loader,
  Image,
  List,
  Item,
  Segment,
} from 'semantic-ui-react';

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

    let activeItem = null;

    if (activeClient) {
      activeItem = (
        <Grid.Column mobile={16} computer={10}>
          <Segment
            size="big"
            style={{ marginTop: '30px' }}
            id={activeClient.contact.email}>
            <Item.Group>
              <Item>
                <Item.Image src={activeClient.general.avatar} />
                <Item.Content>
                  <Item.Header>{`${activeClient.general.firstName} ${
                    activeClient.general.lastName
                  }`}</Item.Header>
                  <Item.Description>
                    {`${activeClient.job.title} in ${activeClient.job.company}`}
                  </Item.Description>
                  <Item.Extra>
                    <List>
                      <List.Header>Contact Data:</List.Header>
                      <List.Item>
                        <List.Icon name="at" />
                        <List.Content>
                          <List.Description>
                            {activeClient.contact.email}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="phone" />
                        <List.Content>
                          <List.Description>
                            {activeClient.contact.phone}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                    <List>
                      <List.Header>Address:</List.Header>
                      <List.Item>
                        <List.Icon name="map marker alternate" />
                        <List.Content>
                          <List.Description>
                            {activeClient.address.street}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="building" />
                        <List.Content>
                          <List.Description>
                            {activeClient.address.city}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="envelope" />
                        <List.Content>
                          <List.Description>
                            {activeClient.address.zipCode}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Icon name="flag" />
                        <List.Content>
                          <List.Description>
                            {activeClient.address.country}
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    </List>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
        </Grid.Column>
      );
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
