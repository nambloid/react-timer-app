import React from 'react';

import Clock from 'Clock';
import Controls from 'Controls';

class Timer extends React.Component {
    constructor (props) {
        super(props);
        this.handleStart = this.handleStart.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.state = {
            count: 0,
            timerStatus: 'stopped'
        };
    }
    componentDidUpdate (prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.handleStart();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    this.handleStop()
                    break;
            }
        }
    }
    componentWillUnmount () {
        this.handleStop();
    }
    handleStop () {
        clearInterval(this.timer);
        this.timer = undefined;
    }
    handleStart () {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });
        }, 1000);
    }
    handleStatusChange (newStatus) {
        this.setState({timerStatus: newStatus});
    }
    render () {
        var {count, timerStatus} = this.state;

        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
};

module.exports = Timer;
