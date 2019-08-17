import React, { Component } from 'react';
import './Home.scss';
import Title from './title/Title';

export default class Home extends Component {
  render() {
    return (
      <section className={'home'}>
        <Title />
      </section>
    );
  }
}
