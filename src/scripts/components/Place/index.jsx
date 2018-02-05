import React from 'react';
import './place.scss';

const Place = ({ id, PlaceClassName, SeatClassName }) => (
    <div className={PlaceClassName}>
        <div className={SeatClassName} id={id} />
    </div>
);

export default Place;
