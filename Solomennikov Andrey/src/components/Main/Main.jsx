import './Main.css';
import React, { Component } from 'react';
export default class Main extends Component {
  static defaultProps = {}
  render() {
    return (
      <div className="Main">
        <h1>Welcome to the main Page!</h1>
        <h4>We choose to go to the moon. We choose to go to the moon in this decade and do the other things,
          not because they are easy, but because they are hard, because that goal will serve to organize and
          measure the best of our energies and skills, because that challenge is one that we are willing to accept,
          one we are unwilling to postpone, and one which we intend to win, and the others, too</h4>
      </div>
    )
  }
}
