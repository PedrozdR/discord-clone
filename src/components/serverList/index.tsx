import React from 'react';

import ServerButton from '../serverButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={2} />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={18} />
      <ServerButton />
      <ServerButton mentions={8} />

    </Container>
  );
}

export default ServerList;