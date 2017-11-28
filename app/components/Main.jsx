import React from 'react';
import {Route} from 'react-router-dom';

import Navigation from 'Navigation';

var Main = (props) => {
    return (
        <div>
            <div>
                <div>
                    <Navigation/>
                    <p>Main.jsx Rendered</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;
