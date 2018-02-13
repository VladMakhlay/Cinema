import React from 'react';
import './place.scss';

const Place = ({
    id, placeClassName, seatClassName, onClick, title,
}) => (
    <div className={placeClassName}>
        <div className={seatClassName} id={id} title={title} onClick={onClick} />
    </div>
);

export default Place;
