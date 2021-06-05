import React, { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { Filter } from "../Filter";


const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=e140197f87c91e5e1952501c088ee92c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

export function MoviesList() {
  // The parent owns the state of filter, even though the functionality is located within
  //the Filter component. filter and setFilter as passed as props into Filter.js, then
  //Filter is imported within this file, and used as a component within the JSX
  const [filter, setFilter] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await fetch(API_URL)
      const movies = await res.json()
      setMovies(movies.results)
      // console.log('movies', movies);
    } catch (e) {
      console.error(e)
    }
  };

  // useEffect allows getMovies to only run when the state changes. If getMovies() were outside 
  //of useEffect, it would run to infinity becuase it would get caught in an endless re-rendering
  //loop
  useEffect(() => {
    getMovies()
  }, []);

  return (
    <div>
      {/* because the value being passed as a prop has the same name as filter, it needs to be passed
      in as filter={filter}, etc */}

      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        {movies
          .filter((movie) =>
            // will return true if the filter is found in the movie name
            movie.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
      </ul>
    </div>
  );
}
