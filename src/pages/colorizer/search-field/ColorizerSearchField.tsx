import * as React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';

interface ColorizerSearchFieldProps {}

interface ColorizerSearchFieldState {}

class ColorizerSearchField extends React.Component<
  ColorizerSearchFieldProps,
  ColorizerSearchFieldState
> {
  public render(): JSX.Element {
    return <Input />;
  }
}

export default connect()(ColorizerSearchField);
