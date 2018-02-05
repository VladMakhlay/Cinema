
import React, { Component } from 'react';

import './hall.scss';
import {
    FIRST_ROW_NUM,
    FIRST_SEAT_NUM,
    SECOND_ROW_NUM,
    SECOND_SEAT_NUM,
    VIP_SEAT_NUM,
    VIP_ROW_NUM,
    TOTAL_ROW_NUM } from '../../constants';
import Place from '../Place';

class Hall extends Component {
    render() {
        const num = [];
        for (let i = 0; i < TOTAL_ROW_NUM; i += 1) {
            const number = (
                <div className="num" key={i + 1}>
                    <span className="gold">{i + 1}</span>
                </div>
            );
            num.push(number);
        }

        const first = [];
        for (let i = 0; i < FIRST_ROW_NUM; i += 1) {
            for (let j = 0; j < FIRST_SEAT_NUM; j += 1) {
                const fir = (
                    <Place
                        PlaceClassName="b-place"
                        SeatClassName="b-place__seat"
                        id={`${i + 1}_${j + 1}`}
                        key={`${i + 1}_${j + 1}`}
                    />
                );
                first.push(fir);
            }
        }
        const second = [];
        for (let i = 0; i < SECOND_ROW_NUM; i += 1) {
            for (let j = 0; j < SECOND_SEAT_NUM; j += 1) {
                const sec = (
                    <Place
                        PlaceClassName="b-place b-place--sec"
                        SeatClassName="b-place__seat"
                        id={`${i + FIRST_ROW_NUM + 1}_${j + 1}`}
                        key={`${i + FIRST_ROW_NUM + 1}_${j + 1}`}
                    />
                );
                second.push(sec);
            }
        }
        const vip = [];
        for (let i = 0; i < VIP_ROW_NUM; i += 1) {
            for (let j = 0; j < VIP_SEAT_NUM; j += 1) {
                const vvv = (
                    <Place
                        PlaceClassName="b-place b-place--vip"
                        SeatClassName="b-place__vipSeat"
                        id={`${i + FIRST_ROW_NUM + SECOND_ROW_NUM + 1}_${j + 1}`}
                        key={`${i + FIRST_ROW_NUM + SECOND_ROW_NUM + 1}_${j + 1}`}
                    />
                );
                vip.push(vvv);
            }
        }
        return (
            <div className="b-hall">
                <div className="b-hall-header">
                   Here you will be able to choose a seat(s) soon.
                </div>
                <div className="b-hall__screen">Screen</div>
                <div className="b-seat-zone">
                    <div className="b-numeration">
                        {num}
                    </div>
                    <div className="b-main-zone">
                        <div className="b-first-zone">
                            {first}
                        </div>
                        <div className="b-second-zone">
                            {second}
                        </div>
                        <div className="b-vip-zone">
                            {vip}
                        </div>
                    </div>
                    <div className="b-numeration">
                        {num}
                    </div>
                </div>
            </div>
        );
    }
}

export default Hall;
