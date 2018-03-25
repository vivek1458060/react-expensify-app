const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [
                ...state,
                action.expense
            ]
        case 'EDIT_EXPENCE':
                return state.map((expense) => {
                    if(expense.id === action.id) {
                        return {
                            ...expense,
                            ...action.updates
                        }
                    } else {
                        return expense
                    }
                })
        case 'SET_EXPENSES': 
                return action.expenses
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id)
        default:
            return state;
    }
}

