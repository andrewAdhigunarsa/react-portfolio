import React, { Component } from 'react';
import './Home.scss';
import { Row, Col } from 'antd';
import Title from './title/Title';

export default class Home extends Component {
  render() {
    return (
      <section className={'home'}>
        <Row>
          <Col>
            <Title />
          </Col>
        </Row>
      </section>
    );
  }
}
