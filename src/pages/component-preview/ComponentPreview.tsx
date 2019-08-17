import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import './ComponentPreview.scss';
import AndrewButton from '../../components/button/AndrewButton/AndrewButton';
import CoolButton from '../../components/button/cool=button/CoolButton';
import DownloadButton from '../../components/button/download-button/DownloadButton';
import NextButton from '../../components/button/next-button/NextButton';
import Mail from '../../components/animated/mail/Mail';
import LiquidFillButton from '../../components/button/liquid-fill-button/LiquidFillButton';
import CoolSplitButton from '../../components/button/cool-split-button/CoolSplitButton';

class ComponentPreview extends Component {
  render() {
    return (
      <div className="component-preview">
        <Row>
          <Col xs={24} sm={12}>
            <AndrewButton marginBottom={true} animation="rocky">
              Button
            </AndrewButton>
          </Col>
          <Col xs={24} sm={12}>
            <AndrewButton animation="flame">Button</AndrewButton>
          </Col>
          <Col xs={24} sm={12}>
            <CoolButton />
          </Col>
          <Col xs={24} sm={12}>
            <DownloadButton />
          </Col>
          <Col xs={24} sm={12}>
            <NextButton />
          </Col>
          <Col xs={24} sm={12}>
            <Mail />
          </Col>
          <Col xs={24} sm={12}>
            <LiquidFillButton />
          </Col>
          <Col xs={24} sm={12}>
            <CoolSplitButton />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ComponentPreview;
