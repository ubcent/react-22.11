import './HeaderOverlay.css';

import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

export default class HeaderOverlay extends Component {
  render() {
    return (
      <Card className="img-overlay-container" inverse >
        <div className="overlay-cover" />
        <div className="overlay-text-container">
          <CardTitle className="overlap-title">Clean Blog</CardTitle>
          <CardText className="overlap-text">A Blog Theme by Start
           Bootstrap</CardText>
        </div>
      </Card>
    );
  }
};
