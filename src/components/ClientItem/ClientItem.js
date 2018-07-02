import React from 'react';
import { Menu, Image } from 'semantic-ui-react';

const ClientItem = ({ client, activeClient, onClientClick }) => (
  <Menu.Item
    name={client.contact.email}
    active={
      activeClient ? activeClient.contact.email === client.contact.email : false
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
);

export default ClientItem;
