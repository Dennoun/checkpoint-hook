import React, { useState, useEffect } from "react";
import Form from "./Component/Movie/Form";
import Filter from "./Component/Movie/Filter";
import MovieList from "./Component/Movie/MovieList";
import "./App.css";

function App() {
  //States
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [genre, setGenre] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const [card, setCard] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterMovie, setFilterMovie] = useState([]);

  useEffect(() => {
    const movieFiltering = () => {
      switch (filter) {
        case "All":
          setFilterMovie(card);
          break;
        case "Bad":
          setFilterMovie(card.filter((e) => e.mRate === "Bad"));
          break;
        case "Terrible":
          setFilterMovie(card.filter((e) => e.mRate === "Terrible"));
          break;
        case "Average":
          setFilterMovie(card.filter((e) => e.mRate === "Average"));
          break;
        case "Great":
          setFilterMovie(card.filter((e) => e.mRate === "Great"));
          break;
        case "Perfect":
          setFilterMovie(card.filter((e) => e.mRate === "Perfect"));
          break;
        default:
          setFilterMovie(card);
      }
    };
    movieFiltering();
  }, [card, filter]);

  return (
    <>
      <Form
        title={title}
        setTitle={setTitle}
        poster={poster}
        setPoster={setPoster}
        genre={genre}
        setGenre={setGenre}
        ratingValue={ratingValue}
        setRatingValue={setRatingValue}
        card={card}
        setCard={setCard}
      />
      <br />

      <Filter
        filter={filter}
        setFilter={setFilter}
        card={card}
        filterMovie={filterMovie}
        setFilterMovie={setFilterMovie}
      />

      <br />

      <MovieList card={filterMovie} filter={filter} />
    </>
  );
}

export default App;
