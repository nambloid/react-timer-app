import React from 'react';

class CountdownForm extends React.Component {
    constructor (props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit (event) {
        event.preventDefault();
        var strSeconds = this.refs.seconds.value;

        if (strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }
    render() {
        return (
            <div>
                <form ref="form" onSubmit={this.onFormSubmit} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
};

module.exports = CountdownForm;
