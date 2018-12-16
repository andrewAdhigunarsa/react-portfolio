import * as React from 'react';

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
    return <section className={'Colorizer'} />;
  }
}
