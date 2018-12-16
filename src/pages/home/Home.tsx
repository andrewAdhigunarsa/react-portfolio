import React, { Component } from 'react';
import './Home.scss';
import { Row, Col } from 'antd';

export default class Home extends Component {
  render() {
    return (
      <section className={'home'}>
        <Row>
          <Col>
            <h3>Hello</h3>
          </Col>
        </Row>
      </section>
    );
  }
}
