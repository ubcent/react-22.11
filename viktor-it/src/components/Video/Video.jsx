import './Video.css';
import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

export default class Video extends Component {
  render(){
    return(
      <div class="videoLine">
        <Card>
          <CardBody>
            <CardTitle>Video1</CardTitle>
            <CardSubtitle>Comments for Video1</CardSubtitle>
          </CardBody>
          <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardText>Some quick example text to build on the card for Video1 and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Watch</CardLink>
            <CardLink href="#">Share this video</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  };
};