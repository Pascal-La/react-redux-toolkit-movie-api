import React, { useState } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";

import {
  fetchAsyncMovies,
  fetchAsyncShows,
  setSearch,
} from "../../features/movies/movieSlice";

import "./Home.scss";

const Home = () => {
  const movies = useSelector(getAllMovies);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const addTitle = (evt) => {
    evt.preventDefault();
    dispatch(setSearch(title));
    dispatch(fetchAsyncMovies(title));
    dispatch(fetchAsyncShows(title));
    setTitle("");
  };

  return movies.Search ? (
    <div className="fetched-form">
      <form onSubmit={addTitle}>
        <input
          placeholder="Rechercher..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button onClick={addTitle}>Envoyer</button>
      </form>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  ) : (
    <div className="initial-form">
      <form onSubmit={addTitle}>
        <input
          placeholder="Rechercher..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button onClick={addTitle}>Envoyer</button>
      </form>
      <h2>Lancez une nouvelle recherche de films ou de séries !</h2>
    </div>
  );
};

export default Home;
