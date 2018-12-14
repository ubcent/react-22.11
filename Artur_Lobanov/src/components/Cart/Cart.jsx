import './Cart.css';

import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card className="CartSize">
        <CardImg top width="100%" src="https://wallpapersfit.com/wp-content/uploads/data/2017/11/20/Polygon-Wallpaper-4K-Pack-wpc2009547.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Post</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Read more</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;