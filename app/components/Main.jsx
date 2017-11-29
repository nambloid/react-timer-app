import React from 'react';
import {Route} from 'react-router-dom';

import Navigation from 'Navigation';
import Timer from 'Timer';
import Countdown from 'Countdown';

var Main = (props) => {
    return (
        <div>
            <Navigation/>
            <div className="grid-x align-center">
                <div className="large-4 medium-6 small-2">
                    <Route exact path="/" component={Timer}/>
                    <Route path="/countdown" component={Countdown}/>
                </div>
            </div>
        </div>
    );
}

module.exports = Main;
