import { createSlice } from '@reduxjs/toolkit';

const inputValueSlice = createSlice({
  name: 'inputValue',
  initialState: '',
  reducers: {
    inputValueUpdate: (state, action) => (state = action.payload),
  },
});

const { actions, reducer } = inputValueSlice;

export default reducer;
export const { inputValueUpdate } = actions;
