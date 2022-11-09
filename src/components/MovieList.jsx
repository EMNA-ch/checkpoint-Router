import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div key={movies.id} className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} id={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
