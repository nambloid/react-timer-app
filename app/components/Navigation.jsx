import React from 'react';
import {NavLink} from 'react-router-dom';

var Navigation = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React Timer App
                    </li>
                    <li>
                        <NavLink exact to="/" activeClassName="active">Timer</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/countdown" activeClassName="active">Countdown</NavLink>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        By <a href="" target="blank">Diego</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Navigation;
