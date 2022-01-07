import React, { useState } from 'react';
import DataCard from './AllRegionsCard';

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
        <input type="text" value={state.value} name="search" placeholder="Search by state name" onChange={handleChange} id="searchInput" />
      </form>
      <DataCard data={searchResult} />
    </>
  );
}

export default Search;
