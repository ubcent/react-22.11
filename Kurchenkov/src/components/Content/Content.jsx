import './Content.css';
import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import CommentsList from 'components/CommentsList';

const items = [
    {
        src: 'https://benmessina.com/FB/PICS/LARGE/Lake_Matheson500.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'http://vizitastra.ru/wp-content/uploads/2017/01/plyazh-gorodskoj-ostrov-900x300.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'https://benmessina.com/FB/PICS/LARGE/Falls_2.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

export default class Content extends Component {
    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                </CarouselItem>
            );
        });

        return (
            <div className="content">
                <div className="container">
                    <h1>Nature</h1><hr />
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel><hr/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, non.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nostrum quod ipsam aliquid, corrupti, inventore tenetur atque doloremque, delectus expedita rerum ducimus animi aspernatur dolor.</p>
                    <h4>Something else</h4>
                    <p><span className="more"> - Someone famous in Source Title</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae architecto itaque aliquid ex quia numquam fugit, reiciendis unde! Veritatis, consequuntur corporis! Saepe totam excepturi nemo culpa, sed velit facilis?</p>
                    <hr/>
                    <CommentsList />
                </div>
            </div>
        );
    };
};
