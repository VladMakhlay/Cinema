import React from 'react';
import './place.scss';

const Place = ({
    id, placeClassName, seatClassName,
}) => (
    <div className={placeClassName}>
        <div className={seatClassName} id={id} />
    </div>
);

export default Place;
