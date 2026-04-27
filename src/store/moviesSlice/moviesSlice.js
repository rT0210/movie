import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = "478bc596d85373c1571f5120040af542";

const PROXY_URL = "https://bold-hall-9b8a.r1plcops.workers.dev";

const fetchWithProxy = async (originalUrl) => {
  const res = await fetch(`${PROXY_URL}/?url=${encodeURIComponent(originalUrl)}`);
  if (!res.ok) throw new Error(`Ошибка ${res.status}`);
  return res.json();
};

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
  const res = await fetchWithProxy(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU`,
  );
  return res.results
});

export const detailsMovie = createAsyncThunk("movies/details", async (movieId) => {
  return await fetchWithProxy(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
})

export const trailerMovie = createAsyncThunk("movie/trailer", async (movieId) => {
  return await fetchWithProxy(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`)
})

export const movieActors = createAsyncThunk("movie/actors", async (movieId) => {
  return await fetchWithProxy(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
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
