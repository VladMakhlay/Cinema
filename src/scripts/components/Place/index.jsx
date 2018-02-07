/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './place.scss';

const Place = ({
    id, placeClassName, seatClassName, onClick,
}) => (
    <div className={placeClassName}>
        <div className={seatClassName} id={id} onClick={onClick} />
    </div>
);

export default Place;
