export default (expenses = []) => {
    var expensesTotal = 0;
    expenses.forEach(({amount}) => {
        expensesTotal += amount; 
    })
    return expensesTotal;
}

