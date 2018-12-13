import React from 'react';
import {
  Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';
import './ArticleCard.css';

export default class ArticleCard extends React.Component {

  render() {
    return (
      <div>
        <Card className="article-block__main-content">
          <a href="#"><img src="https://via.placeholder.com/600x300" alt="" /></a>

          <CardHeader>
            <h1><a href="#">Hader of Article</a></h1>
          </CardHeader>
          <CardBody>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>

        {/* <Card>
          <CardHeader tag="h3">Featured</CardHeader>
          <CardBody>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </CardBody>
          <CardFooter className="text-muted">Footer</CardFooter>
        </Card> */}
      </div>
    );
  }
};


