import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "19rem" }} className="movie-card">
      <Card.Img
        variant="top"
        src={movie.posterURL}
        style={{ width: "19rem", height: "22rem" }}
      />
      <Card.Title className="title">{movie.title}</Card.Title>

      <StarRating rating={movie.rating} />
      <Link to={`/description/${movie.id}`}>
        <button
          style={{ borderRadius: "10px", width: "100px", color: "warming" }}
        >
          Description
        </button>
      </Link>
    </Card>
  );
};

export default MovieCard;
