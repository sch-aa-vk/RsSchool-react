import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../../utils/requests';
import { ICard } from '../../utils/types';

export const fetchMoreDataFromApi = createAsyncThunk(
  'inputSearch/fetchMoreData',
  async (page: number) => {
    return await fetchData(`https://api.jikan.moe/v4/anime?sfw&page=${page}`);
  }
);

const inputSearchMore = createSlice({
  name: 'inputSearchMore',
  initialState: {
    data: [] as ICard[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoreDataFromApi.fulfilled, (state, action) => {
        state.data = action.payload.data;
      })
      .addCase(fetchMoreDataFromApi.rejected, (state) => {
        state.data = [];
      });
  },
});

const { reducer } = inputSearchMore;

export default reducer;
