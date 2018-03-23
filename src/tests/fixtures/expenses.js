import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 1000,
    createdAt: 0
}, {
    id: '2',
    description: 'rent',
    note: '',
    amount: 500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit card',
    note: '',
    amount: 2000,
    createdAt: moment(0).add(4, 'days').valueOf()
}]