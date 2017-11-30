import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactTestUtils from 'react-dom/test-utils';

import Controls from 'Controls';

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toBeTruthy();
    });

    describe('render', () => {
        it('should render pause button when started', () => {
            var controls = ReactTestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });

        it('should render start button when paused', () => {
            var controls = ReactTestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    });
});
