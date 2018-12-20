import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from './component/header';
import XCarousel from './component/xcarousel';
import ContentLayout from './component/contentLayout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './LayoutStyles.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header size="small" color="red" />
				<div className="centered">
					<XCarousel/>
				</div>

				<ContentLayout/>
			</div>
		);
	}
}

ReactDom.render(
	<App />,
	document.getElementById('root')
);