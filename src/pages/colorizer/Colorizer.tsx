import * as React from 'react';
import ColorizerSearchField from './search-field/ColorizerSearchField';
import './Colorizer.scss';
import ColorizerList from './list/ColorizerList';

export interface ColorizerProps {}

export interface ColorizerState {}

export default class Colorizer extends React.Component<
  ColorizerProps,
  ColorizerState
> {
  constructor(props: ColorizerProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <section className={'colorizer'}>
        <ColorizerSearchField />
      </section>
    );
  }
}
