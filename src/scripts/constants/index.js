import moment from 'moment';

const showDays = [
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

export default showDays;
