import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getGenres, getMovieById, getTrendingMovies } from './operations';

const initialState = {
  trendingMovies: [],
  genres: [],
  isToWatch: [],
  currentPage: 1,
  totalPages: 0,
  isLoading: false,
  error: null,
  searchQuery: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingMovies.fulfilled, (state, { payload }) => {
        state.trendingMovies = payload.results;
        state.isLoading = false;
        state.totalPages = payload.total_pages;
      })
      .addCase(getGenres.fulfilled, (state, { payload }) => {
        state.genres = payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(getTrendingMovies.pending, getMovieById.pending),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(getTrendingMovies.rejected, getMovieById.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const moviesReducer = moviesSlice.reducer;
