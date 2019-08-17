import React from 'react';
import './NavbarHeader.scss';
import { Link } from 'react-router-dom';
import { urls } from '../../../pages/PagesRouter';

export default class NavbarHeader extends React.Component {
  public render() {
    return (
      <nav style={{ display: 'inline' }} className={'nav-bar-header'}>
        <Link className="menu-item" to={urls.home}>
          home
        </Link>
        <Link className="menu-item" to={urls.colorizer}>
          colorizer
        </Link>
        <Link className="menu-item" to={urls.componentPreview}>
          component preview
        </Link>
      </nav>
    );
  }
}
