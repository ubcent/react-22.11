import './Timer.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';

export default class Timer extends PureComponent
{
    constructor(props) {
        super(props);

        this.timeStart = Date.now();

        this.state = {
            curTime: this.timeStart,
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({ curTime: Date.now() });
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        const { curTime } = this.state;
        return (
            <div className="Timer">{
                curTime - this.timeStart
            }
            </div>
        );
    }
};
    
