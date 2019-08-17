import * as React from 'react';

/** Stylesheet Imports */
import './AndrewButton.scss';

type buttonAnimation = 'rocky' | 'flame';

export interface Props {
  children?: React.ReactNode;
  marginBottom?: boolean;
  animation?: buttonAnimation;
}

export interface State {}

export default class AndrewButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <button
        {...this.props}
        className={
          'andrew-button' +
          (this.props.marginBottom ? ' marginBottom ' : '') +
          (this.props.animation ? ' ' + this.props.animation : '')
        }
      >
        <span>{this.props.children}</span>
      </button>
    );
  }
}
