import React from 'react';
import NavbarHeader from './navbar/NavbarHeader';
import { LogoHeader } from './logo/LogoHeader';

class AppHeader extends React.Component {
  render() {
    return (
      <div className="app-header">
        <LogoHeader />
        <NavbarHeader />
      </div>
    );
  }
}

export default AppHeader;
