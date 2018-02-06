/* eslint-disable no-param-reassign */

import React, { Component } from 'react';
// import moment from 'moment';
import { connect } from 'react-redux';

import loadTakenSeats from '../../actions/hall';
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
    componentDidMount() {
        this.props.loadTakenSeats();
    }
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

        const takenSeats = this.props.hall.taken_seats;
        let id;
        let thisClass = 'b-place__seat';
        let fir;
        const first = [];
        for (let i = 0; i < FIRST_ROW_NUM; i += 1) {
            for (let j = 0; j < FIRST_SEAT_NUM; j += 1) {
                id = `${i + 1}_${j + 1}`;
                console.log();
                for (let g = 0; g < takenSeats.length; g += 1) {
                    if (takenSeats[g].seat === id) {
                        thisClass = 'b-place__seat b-place__seat--taken';
                    }
                    fir = (<Place
                        placeClassName="b-place"
                        seatClassName={thisClass}
                        id={id}
                        row={i + 1}
                        col={j + 1}
                        key={id}
                    />);
                }
                first.push(fir);
            }
        }


        const second = [];
        for (let i = 0; i < SECOND_ROW_NUM; i += 1) {
            for (let j = 0; j < SECOND_SEAT_NUM; j += 1) {
                const sec = (
                    <Place
                        placeClassName="b-place b-place--sec"
                        seatClassName="b-place__seat"
                        id={`${i + FIRST_ROW_NUM + 1}_${j + 1}`}
                        row={i + FIRST_ROW_NUM + 1}
                        col={j + 1}
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
                        placeClassName="b-place b-place--vip"
                        seatClassName="b-place__vipSeat"
                        id={`${i + FIRST_ROW_NUM + SECOND_ROW_NUM + 1}_${j + 1}`}
                        row={i + FIRST_ROW_NUM + SECOND_ROW_NUM + 1}
                        col={j + 1}
                        key={`${i + FIRST_ROW_NUM + SECOND_ROW_NUM + 1}_${j + 1}`}
                    />
                );
                vip.push(vvv);
            }
        }
        console.log(vip);
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

export default connect(
    state => ({ hall: state.hall }),
    { loadTakenSeats },
)(Hall);
