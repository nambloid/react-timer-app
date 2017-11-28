import React from 'react';
import {Route} from 'react-router-dom';

import Navigation from 'Navigation';
import Timer from 'Timer';
import Countdown from 'Countdown';

var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Navigation/>
                    <p>Main.jsx Rendered</p>
                    <Route exact path="/" component={Timer}/>
                    <Route path="/countdown" component={Countdown}/>
                </div>
            </div>
        </div>
    );
}

module.exports = Main;
