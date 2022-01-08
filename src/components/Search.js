import React, { useState } from 'react';
import RegionCard from './RegionCard';

const Search = (props) => {
  const { data } = props;
  let searchResult = '';
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (state) {
    const inputValue = state.search.toLowerCase();
    searchResult = data.filter((name) => name.id.includes(inputValue))
      .map((info) => (info));
  }

  return (
    <>
      <form>
        <input type="text" value={state.value} name="search" placeholder="Search by state name" onChange={handleChange} class="searchInput" />
      </form>
      <RegionCard data={searchResult} />
    </>
  );
};

export default Search;
