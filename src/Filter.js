import React from "react";
import PropTypes from 'prop-types';

// setFilter and filter are passed in as props into the Filter component from the MoviesList component
export function Filter({ setFilter, filter }) {
  return (
    <label>
      FILTER:
      <input 
        onChange={(e) => setFilter(e.target.value)} 
        value={filter} />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}
