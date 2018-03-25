import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
})

test('should add new expense', () => {
    const expense = {
        id: '123abc',
        description: 'rent',
        amount: 2200,
        note: '',
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense for id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 5
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})


test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENCE',
        id: expenses[0].id,
        updates: {
            description: 'Udemy',
            amount: 800 
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({
        id: '1',
        description: 'Udemy',
        amount: 800,
        note: '',
        createdAt: 0
    }, expenses[1], expenses[2])
})

test('should not edit an expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENCE',
        id: '5',
        updates: {
            description: 'Udemy',
            amount: 800 
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
})