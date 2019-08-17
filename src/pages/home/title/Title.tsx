import React, { Component, SyntheticEvent } from 'react';
import './Title.scss';

interface TitleState {
  x: number;
  y: number;
}

export default class Title extends Component<{}, TitleState> {
  constructor(props: any) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  _onMouseMove = (e: SyntheticEvent) => {
    //@ts-ignore
    const width = this.refs.titleContainer.clientWidth;
    //@ts-ignore
    const height = this.refs.titleContainer.clientHeight;
    //@ts-ignore
    const ox = (e.nativeEvent.offsetX / width) * 150;
    //@ts-ignore
    const oy = (e.nativeEvent.offsetY / width) * 150;

    console.log(width, height);
    console.log(e.nativeEvent);

    this.setState({
      x: ox,
      y: oy
    });
  };

  _onMouseOut = () => {
    this.setState({
      x: 0,
      y: 0
    });
  };
  render() {
    const mask: { '--maskX': number; '--maskY': number } = {
      '--maskX': this.state.x,
      '--maskY': this.state.y
    };

    return (
      <div
        className="title-container"
        onMouseMove={this._onMouseMove}
        onMouseOut={this._onMouseOut}
        ref="titleContainer"
        // @ts-ignore
        style={mask}
      >
        <div className="title-wrapper">
          <span className="the-N">N</span>
          <h1>DREW</h1>
        </div>
        <div className="title-wrapper">
          <span className="the-N">N</span>
          <h1>DREW</h1>
        </div>
      </div>
    );
  }
}
