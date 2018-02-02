
import React, { Component } from 'react';

import './hall.scss';

class Hall extends Component {
    render() {
        const num = [];
        for (let i = 0; i < 20; i += 1) {
            const numi = (
                <div className="num" key={i + 1}>
                    <span className="gold">{i + 1}</span>
                </div>
            );
            num.push(numi);
        }

        const first = [];
        for (let i = 0; i < 9; i += 1) {
            for (let j = 0; j < 10; j += 1) {
                const fir = (
                    <div className="b-place" id={`${i + 1}_${j + 1}`} key={`${i + 1}_${j + 1}`}>
                        <div className="b-place__seat" />
                    </div>
                );
                first.push(fir);
            }
        }
        const second = [];
        for (let i = 0; i < 10; i += 1) {
            for (let j = 0; j < 15; j += 1) {
                const sec = (
                    <div className="b-place--sec" id={`${i + 10}_${j + 1}`} key={`${i + 10}_${j + 1}`}>
                        <div className="b-place__seat" />
                    </div>
                );
                second.push(sec);
            }
        }
        const vip = [];
        for (let i = 0; i < 1; i += 1) {
            for (let j = 0; j < 4; j += 1) {
                const vvv = (
                    <div className="b-place--vip" id={`${i + 20}_${j + 1}`} key={`${i + 20}_${j + 1}`}>
                        <div className="b-place__vipSeat" />
                    </div>
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
