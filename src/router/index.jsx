import { createHashRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import MoviePage from "../pages/moviesPage/MoviePage";
import { store } from "../store";
import { detailsMovie, fetchMovies, movieActors, trailerMovie } from "../store/moviesSlice/moviesSlice";
import MovieDetails from "../pages/movieDetails/movieDetails";
import NotFound from "../pages/notFound/NotFound";
import MovieFavorites from "../pages/movieFavorites/MovieFavorites";

export const router = createHashRouter([
    {path: "/", element: <Layout />, children: [
        {index: true, element: <Home />, loader: async () => {
            store.dispatch(fetchMovies())
            return null
        }},
        {path: "movies", element: <MoviePage />, loader: async () => {
            store.dispatch(fetchMovies())
            return null
        }},
        {path: "movies/:movieId", element: <MovieDetails />, loader: async ({params}) => {
            await Promise.all([
                store.dispatch(detailsMovie(params.movieId)),
                store.dispatch(trailerMovie(params.movieId)),
                store.dispatch(movieActors(params.movieId))
            ])
            return null
        }},
        {path: "movies/favorites", element: <MovieFavorites />, loader: async () => {
            store.dispatch(fetchMovies())
            return null
        }},
        {path: "*", element: <NotFound />}
    ]}
])