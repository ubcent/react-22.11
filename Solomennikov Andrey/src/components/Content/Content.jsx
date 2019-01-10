import './Content.css';

import React, { Component } from 'react';

export default class Content extends Component
{
    state ={
        newsOne: 'Gave an OFF THE RECORD luncheon, somewhat of a White House tradition or custom, to network anchors ' +
            'yesterday - and they quickly leaked the contents of the meeting. Who would believe how bad it has ' +
            'gotten with the mainstream media, which has gone totally bonkers!',
        newsTwo: 'The Mainstream Media has NEVER been more dishonest than it is now. NBC and MSNBC are going Crazy. ' +
            'They report stories, purposely, the exact opposite of the facts. They are truly the Opposition ' +
            'Party working with the Dems. May even be worse than Fake News CNN, if that is possible!'
    };

    changeNewsHandler = () => {

         let newNews = this.state.newsTwo;

         this.setState({
             newsOne: newNews
        })
    }

    render() {
        return (
                <div className="article">
                    <img id="logo" src="http://dummyimage.com/700x100/cdd61c" />
                    <p>{this.state.newsOne}</p>
                    <button onClick={this.changeNewsHandler} id="changeNews">Change News</button>
                </div>
        );
    }
};