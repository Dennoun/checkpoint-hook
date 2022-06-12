import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ card, filter }) {
  


  return (
    <div className="movie-list">
      {card.map((e) => (
        <MovieCard
          title={e.mTitle}
          poster={e.mPoster}
          genre={e.mGenre}
          rate={e.mRate}
          key={e.id}
        />
      ))}
    </div>
  );
}

export default MovieList;
