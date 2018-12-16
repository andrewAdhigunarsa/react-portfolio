import React from 'react';
import './NavbarHeader.scss';
import { Link } from 'react-router-dom';

export default class NavbarHeader extends React.Component {
  public render() {
    return (
      <nav style={{ display: 'inline' }} className={'nav-bar-header'}>
        <Link className="menu-item" to={'/home'}>
          home
        </Link>
        <Link className="menu-item" to={'/colorizer'}>
          colorizer
        </Link>
      </nav>
    );
  }
}
