import './Timer.css';
import React, {Component} from 'react';

export default class Timer extends Component {
  constructor(props){
    super(props);
  
    this.timeStart = Date.now();
    this.timerId = null;
  
    this.state = {
      currentTime: this.timeStart,
    };
  };

  componentDidMount(){
    this.timerId = setInterval(()=>{
      this.setState({currentTime: Date.now()});
    }, 1000);
  };

  componentWillUnmount(){
  	clearInterval(this.timerId);
  };

  render(){
  	const {currentTime} = this.state;
    return(
	  <div className="Timer">
	  <p>Время на сайте: {currentTime - this.timeStart}</p>
	  </div>
    );
  };
};