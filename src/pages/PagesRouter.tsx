import * as React from 'react';
import { Route } from 'react-router';
import Home from './home/Home';
import Colorizer from './colorizer/Colorizer';
import ComponentPreview from './component-preview/ComponentPreview';
import { url } from 'inspector';
import './PagesRouter.scss';

export const urls = {
  home: '/home',
  colorizer: '/colorizer',
  componentPreview: '/componentPreview'
};

export const PagesRouter: React.SFC = () => {
  return (
    <div className={'page-wrapper'}>
      <Route exact={true} path={urls.home} component={Home} />
      <Route exact={true} path={urls.colorizer} component={Colorizer} />
      <Route
        exact={true}
        path={urls.componentPreview}
        component={ComponentPreview}
      />
    </div>
  );
};
