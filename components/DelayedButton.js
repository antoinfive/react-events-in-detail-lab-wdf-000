import React, { Component } from 'react';

class DelayedButton extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e) {
    var event = e.persist();
    setTimeout(() => {this.props.onDelayedClick(e);}, this.props.delay);
  }
  render() {
    return <button onClick={this.clickHandler} />
  }
}

module.exports = DelayedButton;
