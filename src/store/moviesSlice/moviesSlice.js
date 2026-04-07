import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = "478bc596d85373c1571f5120040af542";

const initialState = {
  movies: [],
  loading: false,
  currentMovie: null,
  currentActors: [],
  trailers: [],
  error: null,
  favorites: []
};

export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU`,
  );
  const data = await res.json();
  return data.results;
});

export const detailsMovie = createAsyncThunk("movies/details", async (movieId) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
  const data = await res.json()
  return data
})

export const trailerMovie = createAsyncThunk("movie/trailer", async (movieId) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`)
  const data = await res.json()
  return data
})

export const movieActors = createAsyncThunk("movie/actors", async (movieId) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
  const data = await res.json()
  return data
})

const moviesSlice = createSlice({
  name: "movieReducer",
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload)
    },
    delFavorite(state, action) {
      state.favorites = state.favorites.filter((mov) => mov.id !== action.payload.id)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(detailsMovie.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(detailsMovie.fulfilled, (state, action) => {
        state.loading = false
        state.currentMovie = action.payload
      })
      .addCase(detailsMovie.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(trailerMovie.fulfilled, (state, action) => {
        state.trailers = action.payload.results || []
      })
      .addCase(trailerMovie.rejected, (state, action) => {
        console.log(`ошибка загрузки ${action.error}`)
        state.trailers = []
      })
      .addCase(movieActors.fulfilled, (state, action) => {
        state.currentActors = action.payload
      })
      .addCase(movieActors.rejected, (state, action) => {
        console.log(`ошибки загрузки актеров ${action.error}`);
        state.currentActors = []
      })
  },
});
export const {addFavorite, delFavorite} = moviesSlice.actions

export default moviesSlice.reducer;
