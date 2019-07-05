import * as React from 'react';
import { Card } from 'antd';

interface ColorizerItemProps {}

export const ColorizerItem: React.SFC<ColorizerItemProps> = props => {
  return <Card title={'Colour'} />;
};
