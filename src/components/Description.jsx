import React from "react";
import { useParams, Link } from "react-router-dom";
// import MovieCard from "./MovieCard";

const Description = ({ movies }) => {
  console.log(movies);
  const params = useParams();
  const findMovie = movies.find((movie) => movie.id === Number(params.id));
  console.log(findMovie);
  return (
    <div>
      <Link to="/">
        <h3 className="home">Home</h3>
      </Link>
      <div className="description">
        <h2>Desription:</h2>
        <h4>{findMovie?.title}</h4>
        <p>{findMovie?.description}</p>
        <iframe
          title="myFrame"
          src={findMovie?.trailer}
          style={{ width: "800px", height: "450px" }}
        ></iframe>
      </div>

      {/* <MovieCard movie={findMovie} /> */}
    </div>
  );
};

export default Description;
