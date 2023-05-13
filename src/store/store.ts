import { configureStore } from '@reduxjs/toolkit';
import inputValue from './slices/inputValue.slice';
import feedbackCards from './slices/feedbackCards.slice';
import inputSearch from './slices/inputSearch.slice';

const store = configureStore({
  reducer: { inputValue, feedbackCards, inputSearch },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
