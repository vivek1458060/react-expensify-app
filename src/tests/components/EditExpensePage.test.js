import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, startRemoveExpense, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    history = { push: jest.fn() };
    startRemoveExpense = jest.fn();
    wrapper = shallow(
        <EditExpensePage 
            expense={expenses[0]}
            editExpense={editExpense} 
            history={history}
            startRemoveExpense={startRemoveExpense}
        />
    );
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
})

test('should handle onClick', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenCalledWith(expenses[0].id);
})