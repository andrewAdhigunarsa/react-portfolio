import './CoolButton.scss';

import React, { Component } from 'react';

class CoolButton extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <button className="icon-btn add-btn">
            <div className="add-icon" />
            <div className="btn-txt">Add</div>
          </button>
        </div>
        <div className="">
          <button className="icon-btn add-btn">
            <div className="btn-txt">Remove</div>
          </button>
        </div>
        <div>
          <hr className="main-hr" />
          <button className="icon-btn add-btn">
            <div className="add-icon" />
            <div className="btn-txt">Add</div>
          </button>
          <button className="icon-btn add-btn">
            <div className="btn-txt">Remove</div>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default CoolButton;
