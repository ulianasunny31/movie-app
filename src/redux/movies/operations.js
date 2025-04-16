import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_MOVIE_API_KEY,
  },
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_ACCESS_TOKEN}`,
  },
});

export const getTrendingMovies = createAsyncThunk(
  'movies/getTrendingMovies',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await request.get('/trending/movie/week');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await request.get('/discover/movie', {
        params: {
          include_adult: false,
          include_video: false,
          language: 'en-US',
          page: 1,
          sort_by: 'vote_average.desc',
          without_genres: '99,10755',
          'vote_count.gte': 200,
        },
      });
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getMovieById = createAsyncThunk(
  'movies/getById',
  async (movieId, { rejectWithValue }) => {
    try {
      const { data } = await request.get(`/movie/${movieId}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getGenres = createAsyncThunk(
  'movies/getGenres',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await request.get(`/genre/movie/list?language=en-US`);
      return data.genres;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
