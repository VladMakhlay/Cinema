/* eslint-disable no-bitwise */


import React, { Component } from 'react';
import moment from 'moment';
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
import { takenSeatsRef } from '../../../../config/firebase/index';

let myChoice = [];
class Hall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: null,
            seatsNum: null,
        };
        this.occupied = [];
        this.weBuy = this.weBuy.bind(this);
    }
    componentWillMount() {

    }
    componentDidMount() {
        this.props.loadTakenSeats();
    }


    toggleSeatSelection(e, i, j) {
        let forRow;
        switch (e) {
        case 'first':
            forRow = 0;
            break;
        case 'second':
            forRow = FIRST_ROW_NUM;
            break;
        case 'vip':
            forRow = FIRST_ROW_NUM + SECOND_ROW_NUM;
            break;
        default:
            forRow = 0;
            break;
        }
        const choice = {
            row: i + forRow + 1,
            chair: j + 1,
            id: `${i + forRow + 1}_${j + 1}`,
            zone: e,
        };
        const position = myChoice.indexOf(choice.id);
        if (~position) {
            myChoice.splice(position, 1);
            this.occupied.splice(position, 1);
            this.setState({
                seatsNum: this.state.seatsNum - 1,
            });
            if (choice.zone === 'first') {
                this.setState({
                    sum: this.state.sum - FIRST_ZONE_PRICE,
                });
            } else if (choice.zone === 'second') {
                this.setState({
                    sum: this.state.sum - SECOND_ZONE_PRICE,
                });
            } else {
                this.setState({
                    sum: this.state.sum - VIP_ZONE_PRICE,
                });
            }
        } else {
            myChoice.push(choice.id);
            this.occupied.push(choice);
            this.setState({
                seatsNum: this.state.seatsNum + 1,
            });
            if (choice.zone === 'first') {
                this.setState({
                    sum: this.state.sum + FIRST_ZONE_PRICE,
                });
            } else if (choice.zone === 'second') {
                this.setState({
                    sum: this.state.sum + SECOND_ZONE_PRICE,
                });
            } else {
                this.setState({
                    sum: this.state.sum + VIP_ZONE_PRICE,
                });
            }
        }
    }

    weBuy() {
        for (let i = 0; i < this.occupied.length; i += 1) {
            takenSeatsRef.push(this.occupied[i]);
        }
        this.occupied = [];
        myChoice = [];
        this.setState({
            sum: null,
            seatsNum: null,
        });
    }
    render() {
        // const email = 'vladm369@g.mail.com';
        // const pass = 'aaaaaaa';
        // auth.signInWithEmailAndPassword(email, pass).catch((error) => {
        //     console.log(error.code);
        //     console.log(error.message);
        // });

        const today = moment();
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
        // console.log(this.occupied);
        const taken = [];
        Object.keys(takenSeats).map(key => taken.push(takenSeats[key]));
        let id;
        const first = [];

        for (let i = 0; i < FIRST_ROW_NUM; i += 1) {
            for (let j = 0; j < FIRST_SEAT_NUM; j += 1) {
                id = `${i + 1}_${j + 1}`;
                let thisClass = 'b-place__seat';
                let onClick = this.toggleSeatSelection.bind(this, 'first', i, j);

                for (let g = 0; g < taken.length; g += 1) {
                    if (taken[g].row === (i + 1) &&
                        taken[g].chair === (j + 1)) {
                        thisClass = 'b-place__seat b-place__seat--taken';
                        onClick = null;
                    }
                }

                for (let c = 0; c < myChoice.length; c += 1) {
                    if (myChoice[c] === id) {
                        thisClass = 'b-place__seat b-place__seat--yourChoice';
                    }
                }
                const fir = (
                    <Place
                        placeClassName="b-place"
                        seatClassName={thisClass}
                        id={id}
                        row={i + 1}
                        chair={j + 1}
                        key={id}
                        title="first"
                        onClick={onClick}
                    />
                );
                first.push(fir);
            }
        }

        const second = [];
        for (let i = 0; i < SECOND_ROW_NUM; i += 1) {
            for (let j = 0; j < SECOND_SEAT_NUM; j += 1) {
                id = `${i + FIRST_ROW_NUM + 1}_${j + 1}`;
                let thisClass = 'b-place__seat';
                let onClick = this.toggleSeatSelection.bind(this, 'second', i, j);

                for (let g = 0; g < taken.length; g += 1) {
                    if (taken[g].row === (i + FIRST_ROW_NUM + 1) &&
                        taken[g].chair === (j + 1)) {
                        thisClass = 'b-place__seat b-place__seat--taken';
                        onClick = null;
                    }
                }
                for (let c = 0; c < myChoice.length; c += 1) {
                    if (myChoice[c] === id) {
                        thisClass = 'b-place__seat b-place__seat--yourChoice';
                    }
                }
                const sec = (
                    <Place
                        placeClassName="b-place b-place--sec"
                        seatClassName={thisClass}
                        id={id}
                        row={i + FIRST_ROW_NUM + 1}
                        chair={j + 1}
                        key={id}
                        title="second"
                        onClick={onClick}
                    />
                );
                second.push(sec);
            }
        }

        const vip = [];
        for (let i = 0; i < VIP_ROW_NUM; i += 1) {
            for (let j = 0; j < VIP_SEAT_NUM; j += 1) {
                id = `${i + FIRST_ROW_NUM + SECOND_ROW_NUM + 1}_${j + 1}`;
                let thisClass = 'b-place__vipSeat';
                let onClick = this.toggleSeatSelection.bind(this, 'vip', i, j);

                for (let g = 0; g < taken.length; g += 1) {
                    if (taken[g].row === (i + FIRST_ROW_NUM + SECOND_ROW_NUM + 1) &&
                        taken[g].chair === (j + 1)) {
                        thisClass = 'b-place__vipSeat b-place__vipSeat--taken';
                        onClick = null;
                    }
                }
                for (let c = 0; c < myChoice.length; c += 1) {
                    if (myChoice[c] === id) {
                        thisClass = 'b-place__vipSeat b-place__vipSeat--yourChoice';
                    }
                }

                const vvv = (
                    <Place
                        placeClassName="b-place b-place--vip"
                        seatClassName={thisClass}
                        id={id}
                        row={i + FIRST_ROW_NUM + SECOND_ROW_NUM + 1}
                        chair={j + 1}
                        key={id}
                        title="vip"
                        onClick={onClick}
                    />
                );
                vip.push(vvv);
            }
        }
        const buttonClasses = `btn btn-block ${this.state.sum ? 'btn-success' : 'disabled couldBuy'}`;
        return (
            <div className="b-hall">
                <div className="b-hall-header">
                    <div className="b-hall-price">
                        <div className="b-hall-price__price">
                            price:<span className="b-hall-price__sum"> {this.state.sum}</span>g
                        </div>
                        <div className="b-hall-price__seats">
                            seats: <span className="b-hall-price__num"> {this.state.seatsNum}</span>
                        </div>
                    </div>
                    <div className="b-hall-header__timeUnit">
                        {timeUnit}
                        <time>{today.format('DD-MMM-YYYY')}</time>
                    </div>
                    <div className="b-hall-button">
                        <div className="b-hall-button__width80">
                            <button
                                className={buttonClasses}
                                onClick={this.weBuy}
                            >
                                Buy
                            </button>
                        </div>
                    </div>
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
                <div className="b-specification">
                    <div className="b-spec">
                        <Place seatClassName="b-place__seat" />
                        <span> -free </span>
                    </div>
                    <div className="b-spec">
                        <Place seatClassName="b-place__seat b-place__seat--taken" />
                        <span> -taken </span>
                    </div>
                    <div className="b-spec">
                        <Place seatClassName="b-place__seat b-place__seat--yourChoice" />
                        <span> -your choice </span>
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
