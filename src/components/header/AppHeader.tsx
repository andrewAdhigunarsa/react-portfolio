import React from 'react';
import NavbarHeader from './navbar/NavbarHeader';
import { LogoHeader } from './logo/LogoHeader';
import { Layout } from 'antd';

const { Header } = Layout;

class AppHeader extends React.Component {
  render() {
    return (
      <Header>
        <LogoHeader />
        <NavbarHeader />
      </Header>
    );
  }
}

export default AppHeader;
