import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    expenses: {}
}

const Features = createSlice({
  name: 'myexpenses',
  initialState,
  reducers: {
    addExpense: (state, { payload }) => {
        state.expenses = payload;
      },
  }
})

export const { addExpense} = Features.actions
export default Features.reducer