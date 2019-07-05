import * as React from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
// import { ColorizerItem } from './list-item/ColorizerListItem';

interface ColorizerListProps {}

interface ColorizerListState {}

class ColorizerList extends React.Component<
  ColorizerListProps,
  ColorizerListState
> {
  public render(): JSX.Element {
    return <div>hello</div>;
  }
}

export default connect()(ColorizerList);
