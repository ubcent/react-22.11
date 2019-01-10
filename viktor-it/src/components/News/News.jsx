import './News.css';
import React, {PureComponent} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

export default class News extends PureComponent {
  render(){
    return(
    <div className = "newsLine">
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="/src/components/img/szhech_kkal.jpg" alt="Как быстро сжечь каллории" />
        <CardBody>
          <CardTitle>Сжигание каллорий</CardTitle>
          <CardSubtitle className = "Subtitle">Как быстро сжечь каллории?</CardSubtitle><br></br>
          <CardText>В данной статье мы расскажем как можно быстро сжечь каллории в домашних условиях без тренажеров...</CardText>
          <Button>Читать</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/src/components/img//pitanie_kkal.jpg" alt="Каллорийные продукты" />
        <CardBody>
          <CardTitle>Каллорийные продукты</CardTitle>
          <CardSubtitle className = "Subtitle">Какие продукты самые каллорийные?</CardSubtitle><br></br>
          <CardText>В некоторых продуктах содержится очень много каллорий и мы расскажем вам о самых каллорийных...</CardText>
          <Button>Читать</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Упражнения для сжигания</CardTitle>
          <CardSubtitle className = "Subtitle">Какие упражнения сжигают каллории?</CardSubtitle><br></br>
          <CardText>Очень много упражнений по сжиганию каллорий, но мы покажем вам самые лучшие упражения...</CardText>
          <Button>Читать</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle className = "Subtitle">Card subtitle</CardSubtitle><br></br>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Читать</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle className = "Subtitle">Card subtitle</CardSubtitle><br></br>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Читать</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
    );
  };  
};


