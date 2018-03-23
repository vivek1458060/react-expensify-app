import filtersReducers from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducers(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
})

test('should set text filter', () => {
    const state = filtersReducers(undefined, {type: 'SET_TEXT_FILTER', text: 'rent'});
    expect(state.text).toBe('rent');
})

test('should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment()
    }
    const state = filtersReducers(undefined, action);
    expect(state.startDate).toEqual(moment());
})

test('should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment()
    }
    const state = filtersReducers(undefined, action);
    expect(state.endDate).toEqual(moment());
})