import React from 'react';
import PropTypes from 'prop-types';

class Controls extends React.Component {
    constructor (props) {
        super(props);
    }
    onStatusChange (newStatus) {
        this.props.onStatusChange(newStatus);
    }
    render () {
        var {countdownStatus} = this.props;

        var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={() => this.onStatusChange('paused')}>Pause</button>;
            } else {
                return <button className="button primary" onClick={() => this.onStatusChange('started')}>Start</button>;
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={() => this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
}

Controls.propTypes = {
    countdownStatus: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired
};

module.exports = Controls;
