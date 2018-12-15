
import './Counter.css';

//React импортируем в каждом файле
import React, { Component } from 'react';

export default class Counter extends Component
    {
        static defaultProps = {}

        constructor(props) {
            //обязательно вызвать конструктор базового класса с передачей props
            super(props);

            //состояние
            this.state = {
                counter: 1,
            }
        }

        handleClick = (event) => {
            const addition = event.target.name === 'plus' ? 1 : -1;
            this.setState((prevState) => ({
                counter: prevState.counter + addition,
            }));
        };

        render() {
            const {counter} = this.state;
            return (
               <div className="Counter">
                   <button name="minus" onClick={this.handleClick}>-</button>
                   {counter}
                   <button name="plus" onClick={this.handleClick}>+</button>
               </div>
            );
        }
    };
    
