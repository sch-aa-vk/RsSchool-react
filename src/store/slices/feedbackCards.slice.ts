import { createSlice } from '@reduxjs/toolkit';
import { IFeedback } from '../../utils/types';

const feedbackCards = createSlice({
  name: 'feedbackCards',
  initialState: [] as IFeedback[],
  reducers: {
    addFeedback: (state, action) => {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = feedbackCards;

export default reducer;
export const { addFeedback } = actions;
