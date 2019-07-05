import * as React from 'react';
import ColorizerSearchField from './search-field/ColorizerSearchField';
import './Colorizer.scss';
import { Row, Col, Button } from 'antd';
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
        <Row
          style={{ marginBottom: '24px' }}
          type={'flex'}
          align={'middle'}
          justify="center"
          gutter={16}
        >
          <Col>
            <ColorizerSearchField />
          </Col>
          <Col>
            <Button>Add</Button>
          </Col>
        </Row>
        <Row type={'flex'} align={'middle'} justify="center" gutter={16}>
          <Col xs={24} md={20} lg={16}>
            <ColorizerList />
          </Col>
        </Row>
      </section>
    );
  }
}
