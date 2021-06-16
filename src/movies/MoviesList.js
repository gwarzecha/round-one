import React, { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { Filter } from "../Filter";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&api_key=";
const CONFIG_URL = "https://api.themoviedb.org/3/configuration?api_key=";

export function MoviesList() {
  // The parent owns the state of filter, even though the functionality is located within
  //the Filter component. filter and setFilter as passed as props into Filter.js, then
  //Filter is imported within this file, and used as a component within the JSX
  const [filter, setFilter] = useState("");
  const [movies, setMovies] = useState([]);
  const [config, setConfig] = useState({});

  const getMovies = async () => {
    try {
      const res = await fetch(API_URL + process.env.REACT_APP_MOVIE_API);
      const movies = await res.json();
      setMovies(movies.results);
      // console.log('movies', movies);
    } catch (e) {
      console.error(e);
    }
  };

  const getConfig = async () => {
    try {
      const res = await fetch(CONFIG_URL + process.env.REACT_APP_MOVIE_API);
      const config = await res.json();
      setConfig(config);
      // console.log('movies', movies);
    } catch (e) {
      console.error(e);
    }
  };

  // useEffect allows getMovies to only run when the state changes. If getMovies() were outside
  //of useEffect, it would run to infinity becuase it would get caught in an endless re-rendering
  //loop
  useEffect(() => {
    getMovies();
    getConfig();
  }, []);

  return (
    <div>
      {/* because the value being passed as a prop has the same name as filter, it needs to be passed
      in as filter={filter}, etc */}

      <Filter filter={filter} setFilter={setFilter} />
      <ul className="movies-list">
        {movies
          .filter((movie) =>
            // will return true if the filter is found in the movie name
            movie.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <Movie key={movie.id} config={config} movie={movie} />
          ))}
      </ul>
    </div>
  );
}
