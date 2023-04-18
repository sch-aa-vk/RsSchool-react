import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/requests';
import { ICard } from '../../utils/types';

export const fetchDataFromApi = createAsyncThunk('inputSearch/fetchData', async (value: string) => {
  return await fetchData(`https://api.jikan.moe/v4/anime?q=${value}&sfw`);
});

const inputSearch = createSlice({
  name: 'inputSearch',
  initialState: {
    data: [] as ICard[],
    pending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataFromApi.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchDataFromApi.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.pending = false;
      })
      .addCase(fetchDataFromApi.rejected, (state) => {
        state.data = [];
        state.pending = false;
      });
  },
});

const { reducer } = inputSearch;

export default reducer;
