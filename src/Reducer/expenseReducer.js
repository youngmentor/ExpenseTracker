const initialState = [];

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    case 'DELETE_EXPENSE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

export default expenseReducer;
