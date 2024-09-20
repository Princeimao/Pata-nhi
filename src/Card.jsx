import React from "react";
import "./Card.css";

const Card = ({ movie }) => {
  console.log("card component", movie);
  return (
    <div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "http://via.placeholder.com/400"
              }
              //
              alt={movie.Title}
            />
          </div>
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
