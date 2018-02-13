import moment from 'moment';

export const ShowDays = [
    {
        id: 1,
        day: moment(),
    },
    {
        id: 2,
        day: moment().add(1, 'd'),
    },
    {
        id: 3,
        day: moment().add(2, 'd'),
    },
    {
        id: 4,
        day: moment().add(3, 'd'),
    },
    {
        id: 5,
        day: moment().add(4, 'd'),
    },
    {
        id: 6,
        day: moment().add(5, 'd'),
    },
    {
        id: 7,
        day: moment().add(6, 'd'),
    },
];

// HALL CONSTANTS
export const FIRST_ROW_NUM = 9;
export const FIRST_SEAT_NUM = 10;
export const SECOND_ROW_NUM = 10;
export const SECOND_SEAT_NUM = 15;
export const VIP_ROW_NUM = 1;
export const VIP_SEAT_NUM = 4;
export const TOTAL_ROW_NUM = FIRST_ROW_NUM + SECOND_ROW_NUM + VIP_ROW_NUM;

