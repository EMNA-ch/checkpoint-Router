import React, { useState } from "react";
import { movieData } from "../data";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import Search from "./Search";

const Home = () => {
  const [movies, setMovies] = useState(movieData);
  const [textSearch, setTextSearch] = useState("");
  const [rating, setRating] = useState(1);
  const handleRating = (x) => setRating(x);
  const handleChange = (e) => setTextSearch(e.target.value);
  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);
  return (
    <div>
      <Search
        rating={rating}
        handleRating={handleRating}
        text={textSearch}
        handleChange={handleChange}
      />
      <MovieList
        movies={movies.filter(
          (el) =>
            el.title.toLowerCase().includes(textSearch.toLowerCase()) &&
            el.rating >= rating
        )}
      />
      <AddMovie add={handleAdd} />
    </div>
  );
};

export default Home;
