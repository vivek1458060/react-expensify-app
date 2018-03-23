import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal();
    expect(res).toBe(0)
})

test('should correctly adds up single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(1000);
})

test('should correctly adds up multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(3500)
})