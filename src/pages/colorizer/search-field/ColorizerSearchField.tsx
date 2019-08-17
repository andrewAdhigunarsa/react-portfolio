import * as React from 'react';
import { connect } from 'react-redux';

interface ColorizerSearchFieldProps {}

interface ColorizerSearchFieldState {}

class ColorizerSearchField extends React.Component<
  ColorizerSearchFieldProps,
  ColorizerSearchFieldState
> {
  public render(): JSX.Element {
    return <span />;
  }
}

export default connect()(ColorizerSearchField);
