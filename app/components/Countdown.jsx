import React from 'react';

import Clock from 'Clock';
import CountdownForm from 'CountdownForm';

class Countdown extends React.Component {
    constructor (props) {
        super(props);
        this.handleSetCountdown = this.handleSetCountdown.bind(this);
        this.state = {
            count: 0
        };
    }
    handleSetCountdown (seconds) {
        this.setState({
            count: seconds
        });
    }
    render () {
        var {count} = this.state;
        
        return (
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            </div>
        );
    }
};

module.exports = Countdown;
