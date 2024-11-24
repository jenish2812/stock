import { createSlice } from '@reduxjs/toolkit';

const stockSlice = createSlice({
  name: 'stock',
  initialState: { watchlist: [], portfolio: [] },
  reducers: {
    addToWatchlist: (state, action) => {
      if (!state.watchlist.some((stock) => stock.symbol === action.payload.symbol)) {
        state.watchlist.push(action.payload);
      }
    },
    removeFromWatchlist: (state, action) => {
      state.watchlist = state.watchlist.filter(
        (stock) => stock.symbol !== action.payload
      );
    },
    addToPortfolio: (state, action) => {
      state.portfolio.push(action.payload);
    },
    removeFromPortfolio: (state, action) => {
      state.portfolio = state.portfolio.filter(
        (stock) => stock.symbol !== action.payload
      );
    },
  },
});

export const {
  addToWatchlist,
  removeFromWatchlist,
  addToPortfolio,
  removeFromPortfolio,
} = stockSlice.actions;
export default stockSlice.reducer;
