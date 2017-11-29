import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import ReactTestUtils from 'react-dom/test-utils';

import Countdown from 'Countdown';

describe('Countdown', ()=> {
    it('should exist', ()=> {
        expect(Countdown).toBeTruthy();
    });

    describe('handleSetCountdown', ()=> {
        it('should set state to started and count down', (done)=> {
            var countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);

            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('should set state to started and count down', (done)=> {
            var countdown = ReactTestUtils.renderIntoDocument(<Countdown/>);

            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });
    });
});
