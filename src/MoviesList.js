import React, { useState } from "react";

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
  const [filter, setFilter] = useState("");

  return (
    <div>
      <label>
        FILTER: 
        <input onChange={(e) => setFilter(e.target.value)} value={filter} />
      </label>
      <ul>
        {movies
          .filter((movie) =>
            // will return true if the filter is found in the movie name
            movie.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((movie) => (
            <li key={movie.name}>{movie.name}</li>
          ))}
      </ul>
    </div>
  );
}
