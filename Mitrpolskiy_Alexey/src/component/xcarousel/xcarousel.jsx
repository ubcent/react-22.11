import React, { Component } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from 'reactstrap';

const items = [
	{
		src: 'http://placekitten.com/801/400',
		altText: 'Slide 1',
		caption: 'New Year Cat',
		description: 'It says "Meow" to you!'
	},
	{
		src: 'http://placekitten.com/800/400',
		altText: 'Slide 2',
		caption: 'Snowy Cat',
		description: 'Snow is something interesting and worth to explore!'
	},
	{
		src: 'http://placekitten.com/799/401',
		altText: 'Slide 3',
		caption: 'Tiny Kitten',
		description: 'Ultimate Cuteness you can\'t resist!'
	}
];

export default class XCarousel extends Component {
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
					key={item.src}>
					<img src={item.src} alt={item.altText} />
					<CarouselCaption captionText={item.description} captionHeader={item.caption} />
				</CarouselItem>
			);
		});

		return (
			<Carousel
				activeIndex={activeIndex}
				next={this.next}
				previous={this.previous}>
				<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
				{slides}
				<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
				<CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
			</Carousel>
		);
	}
}