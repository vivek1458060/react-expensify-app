import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text', () => {
    const filters = {
        text: 're',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    expect(selectExpenses(expenses, filters)).toEqual([expenses[2], expenses[1]]);
})

test('should filter by start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    expect(selectExpenses(expenses, filters)).toEqual([expenses[2], expenses[0]]);
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(3, 'days')
    }
    expect(selectExpenses(expenses, filters)).toEqual([expenses[0], expenses[1]]);
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    expect(selectExpenses(expenses, filters)).toEqual([expenses[2], expenses[0], expenses[1]]);
})

test('should sort by amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    expect(selectExpenses(expenses, filters)).toEqual([expenses[2], expenses[0], expenses[1]]);
})
