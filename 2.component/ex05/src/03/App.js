import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            date: new Date()
        }
    }

    update = () => {
        this.setState({
          date: new Date()
        });
      };

    componentDidMount() {
        setInterval(this.update, 1000);
    }

    render() {
        const hours = this.state.date.getHours();
        const minutes = this.state.date.getMinutes();
        const seconds = this.state.date.getSeconds();

        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours={('0' + (hours >12 ? hours -12 : hours)).slice(-2)}
                        minutes={('0'+minutes).slice(-2)}
                        seconds={('0'+seconds).slice(-2)}
                        session={hours > 12 ? 'pm' : 'am'}/>
            </div>
        );
    }
}