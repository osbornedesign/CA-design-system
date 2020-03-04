import React, { Component } from 'react';
import '../fonts.css';
import '../Card/Card.css';

class Card extends Component {
  render () {
    return (
      <div className="card">
        {this.props.children}
      </div>
    )
  }
}

export {
  Card
}
