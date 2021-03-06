import React from 'react';

import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

class Countdown extends React.Component {
    constructor (props) {
        super(props);
        this.handleSetCountdown = this.handleSetCountdown.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };
    }
    componentDidUpdate (prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.handleStart();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    this.handleStop();
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
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });

            if (newCount === 0) this.setState({countdownStatus: 'stopped'});

        }, 1000);
    }
    handleSetCountdown (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    }
    handleStatusChange (newStatus) {
        this.setState({countdownStatus: newStatus});
    }
    render () {
        var {count, countdownStatus} = this.state;

        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        }

        return (
            <div>
                <h1 className="page-title">Countdown</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
};

module.exports = Countdown;
