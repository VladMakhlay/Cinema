/* eslint-disable no-param-reassign,no-bitwise */

import React, { Component } from 'react';
// import moment from 'moment';
import { connect } from 'react-redux';

import loadTakenSeats from '../../actions/hall';
import './hall.scss';
import {
    FIRST_ZONE_PRICE,
    SECOND_ZONE_PRICE,
    VIP_ZONE_PRICE,
    FIRST_ROW_NUM,
    FIRST_SEAT_NUM,
    SECOND_ROW_NUM,
    SECOND_SEAT_NUM,
    VIP_SEAT_NUM,
    VIP_ROW_NUM,
    TOTAL_ROW_NUM } from '../../constants';
import Place from '../Place';

const myChoice = [];
class Hall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: null,
        };
        this.toggleSeatSelection = this.toggleSeatSelection.bind(this);
    }
    componentDidMount() {
        this.props.loadTakenSeats();
    }

    toggleSeatSelection(e) {
        const position = myChoice.indexOf(e.target);
        if (~position) {
            myChoice.splice(position, 1);
            if (e.target.title === 'first') {
                this.setState({
                    sum: this.state.sum - FIRST_ZONE_PRICE,
                });
            } else if (e.target.title === 'second') {
                this.setState({
                    sum: this.state.sum - SECOND_ZONE_PRICE,
                });
            } else {
                this.setState({
                    sum: this.state.sum - VIP_ZONE_PRICE,
                });
            }
        } else {
            myChoice.push(e.target);
            if (e.target.title === 'first') {
                this.setState({
                    sum: this.state.sum + FIRST_ZONE_PRICE,
                });
            } else if (e.target.title === 'second') {
                this.setState({
                    sum: this.state.sum + SECOND_ZONE_PRICE,
                });
            } else {
                this.setState({
                    sum: this.state.sum + VIP_ZONE_PRICE,
                });
            }
        }
        console.log(e.target.title);
    }
    render() {
        const timeUnit = this.props.location.state.unit;
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
        let fir;
        let id;
        const first = [];
        for (let i = 0; i < FIRST_ROW_NUM; i += 1) {
            for (let j = 0; j < FIRST_SEAT_NUM; j += 1) {
                id = `${i + 1}_${j + 1}`;
                let thisClass = 'b-place__seat';
                for (let g = 0; g < takenSeats.length; g += 1) {
                    if (takenSeats[g].row === (i + 1) && takenSeats[g].chair === (j + 1)) {
                        thisClass = 'b-place__seat b-place__seat--taken';
                    }
                }
                for (let c = 0; c < myChoice.length; c += 1) {
                    if (myChoice[c].id === id) {
                        thisClass = 'b-place__seat b-place__seat--yourChoice';
                    }
                }
                fir = (<Place
                    placeClassName="b-place"
                    seatClassName={thisClass}
                    id={id}
                    row={i + 1}
                    chair={j + 1}
                    key={id}
                    title="first"
                    onClick={this.toggleSeatSelection}
                />);

                first.push(fir);
            }
        }
        console.log(myChoice);

        const second = [];
        let sec;
        for (let i = 0; i < SECOND_ROW_NUM; i += 1) {
            for (let j = 0; j < SECOND_SEAT_NUM; j += 1) {
                id = `${i + FIRST_ROW_NUM + 1}_${j + 1}`;
                let thisClass = 'b-place__seat';
                for (let g = 0; g < takenSeats.length; g += 1) {
                    if (takenSeats[g].row === (i + FIRST_ROW_NUM + 1) &&
                        takenSeats[g].chair === (j + 1)) {
                        thisClass = 'b-place__seat b-place__seat--taken';
                    }
                }
                for (let c = 0; c < myChoice.length; c += 1) {
                    if (myChoice[c].id === id) {
                        thisClass = 'b-place__seat b-place__seat--yourChoice';
                    }
                }
                sec = (
                    <Place
                        placeClassName="b-place b-place--sec"
                        seatClassName={thisClass}
                        id={id}
                        row={i + FIRST_ROW_NUM + 1}
                        chair={j + 1}
                        key={id}
                        title="second"
                        onClick={this.toggleSeatSelection}
                    />
                );
                second.push(sec);
            }
        }
        const vip = [];
        let vvv;
        for (let i = 0; i < VIP_ROW_NUM; i += 1) {
            for (let j = 0; j < VIP_SEAT_NUM; j += 1) {
                id = `${i + FIRST_ROW_NUM + SECOND_ROW_NUM + 1}_${j + 1}`;
                let thisClass = 'b-place__vipSeat';
                for (let g = 0; g < takenSeats.length; g += 1) {
                    if (takenSeats[g].row === (i + FIRST_ROW_NUM + SECOND_ROW_NUM + 1) &&
                        takenSeats[g].chair === (j + 1)) {
                        thisClass = 'b-place__vipSeat b-place__vipSeat--taken';
                    }
                }
                for (let c = 0; c < myChoice.length; c += 1) {
                    if (myChoice[c].id === id) {
                        thisClass = 'b-place__vipSeat b-place__vipSeat--yourChoice';
                    }
                }

                vvv = (
                    <Place
                        placeClassName="b-place b-place--vip"
                        seatClassName={thisClass}
                        id={id}
                        row={i + FIRST_ROW_NUM + SECOND_ROW_NUM + 1}
                        chair={j + 1}
                        key={id}
                        title="vip"
                        onClick={this.toggleSeatSelection}
                    />
                );
                vip.push(vvv);
            }
        }
        return (
            <div className="b-hall">
                <div className="b-hall-header">
                    <div className="b-hall-header__price">price: {this.state.sum} grn</div>
                    <div className="b-hall-header__timeUnit">{timeUnit}</div>
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
