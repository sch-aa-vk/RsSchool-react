import { createSlice } from '@reduxjs/toolkit';

const inputValueSlice = createSlice({
  name: 'inputValue',
  initialState: {
    input: '',
    isNew: true,
  },
  reducers: {
    inputValueUpdate: (state, action) => {
      state.input = action.payload;
    },
    inputValueSetNew: (state) => {
      state.isNew = true;
    },
    inputValueSetOld: (state) => {
      state.isNew = false;
    },
  },
});

const { actions, reducer } = inputValueSlice;

export default reducer;
export const { inputValueUpdate, inputValueSetOld, inputValueSetNew } = actions;
