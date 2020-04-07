import React, { Component } from 'react';
import '../App.css';

class Item extends Component {
  constructor() {
    super();
    this.state = {
      isdisplay: true,
    };
    this.btnClicked = this.btnClicked.bind(this);
  }
  btnClicked() {
    this.setState({ isdisplay: !this.state.isdisplay });
  }

  render() {
    let display = this.state.isdisplay ? 'none' : '';

    return (
      <div>
        <button onClick={this.btnClicked}>Click me</button>
        <div style={{ display: display }}>You are amazing :v</div>
      </div>
    );
  }
}

export default Item;
