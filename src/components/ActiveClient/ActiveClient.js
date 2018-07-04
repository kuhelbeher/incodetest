// @flow

import React from 'react';
import { Grid, Segment, Item, List } from 'semantic-ui-react';

type Props = {
  activeClient: Client,
};

const ActiveClient = ({ activeClient }: Props) => (
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
              {`${activeClient.job.title} - ${activeClient.job.company}`}
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

export default ActiveClient;
