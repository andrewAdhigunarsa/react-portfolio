import * as React from 'react';
import { Route } from 'react-router';
import Home from './home/Home';
import Colorizer from './colorizer/Colorizer';

export const PagesRouter: React.SFC = () => {
  return (
    <React.Fragment>
      <Route exact={true} path="/home" component={Home} />
      <Route exact={true} path="/colorizer" component={Colorizer} />
    </React.Fragment>
  );
};
