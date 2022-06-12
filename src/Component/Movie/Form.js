import React from "react";
import Select from "react-select";
import { Rating } from "react-simple-star-rating";

function Form({
  title,
  setTitle,
  poster,
  setPoster,
  genre,
  setGenre,
  ratingValue,
  setRatingValue,
  card,
  setCard,
}) {
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const posterHandler = (e) => {
    setPoster(e.target.value);
  };

  const genreHandler = (e) => {
    setGenre(e.value);
  };

  const rateHandler = (e) => {
    /*switch (e) {
      case 20:
        setRatingValue("Terrible");
        break;
      case 40:
        setRatingValue("Bad");
        break;
      case 60:
        setRatingValue("Average");
        break;
      case 80:
        setRatingValue("Great");
        break;
      case 100:
        setRatingValue("Perfect");
        break;

      default:
        setRatingValue("");
    }*/
    if ( e === 20){
      setRatingValue("Terrible");
    }else if (e === 40){
      setRatingValue("Bad");
    }else if (e === 60){
      setRatingValue("Average");
    }else if (e === 80){
      setRatingValue("Great");
    }else if (e === 100){
      setRatingValue("Perfect");
    }
  };

  const resetter = () => {
    setTitle("");
    setPoster("");
    setGenre("");
    setRatingValue(0);
  };

  const submitMovie = (e) => {
    e.preventDefault();
    setCard([
      ...card,
      {
        mTitle: title,
        mPoster: poster,
        mGenre: genre,
        mRate: ratingValue,
        id: Math.random() * 1000,
      },
    ]);
    resetter();
  };

  //Options for the movie Descriptions
  const genreOptions = [
    { value: "Action", label: "Action" },
    { value: "Comedy", label: "Comedy" },
    { value: "Drama", label: "Drama" },
    { value: "Fantasy", label: "Fantasy" },
    { value: "Horror", label: "Horror" },
    { value: "Mystery", label: "Mystery" },
    { value: "Romance", label: "Thriller" },
  ];

  return (
    <>
      <form>
        <label>Title :</label>
        <input
          value={title}
          onChange={titleHandler}
          type="text"
          className="title"
        />
        <br />

        <label>Poster URL :</label>
        <input
          value={poster}
          onChange={posterHandler}
          type="text"
          className="url"
        />
        <br />

        <label>Description :</label>
        <Select
          InputValue={genre}
          onChange={genreHandler}
          className="Description"
          options={genreOptions}
        />

        <br />

        <label>Rating :</label>

        <br />
        <Rating
          transition
          ratingValue={ratingValue}
          onClick={rateHandler}
          showTooltip
          tooltipArray={["Terrible", "Bad", "Average", "Great", "Prefect"]}
        />
        <br />

        <button onClick={submitMovie} type="submit">
          Add Movie
        </button>
      </form>
      
    </>
  );
}

export default Form;
