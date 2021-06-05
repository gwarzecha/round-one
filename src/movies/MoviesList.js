import React, { useState } from "react";
import { Movie } from "./Movie";
import { Filter } from '../Filter';

const movies = [
  {
    name: "Eraserhead",
  },
  {
    name: "Ghoulies",
  },
  {
    name: "Dracula",
  },
];

export function MoviesList() {
  // The parent owns the state of filter, even though the functionality is located within
  //the Filter component. filter and setFilter as passed as props into Filter.js, then 
  //Filter is imported within this file, and used as a component within the JSX
  const [filter, setFilter] = useState("");

  return (
    <div>
      {/* because the value being passed as a prop has the same name as filter, it needs to be passed
      in as filter={filter}, etc */}
      <Filter filter={filter} setFilter={setFilter} />
      <ul>
        {movies
          .filter((movie) =>
            // will return true if the filter is found in the movie name
            movie.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <Movie key={movie.name} movie={movie} />
          ))}
      </ul>
    </div>
  );
}
