import React from 'react';
import style from './Search.module.css';

interface ISearch {
  setSearchValue: any;
  searchValue: string;
}

const Search = ({ setSearchValue, searchValue }: ISearch) => {
  return (
    <>
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        className={style.input}
        type="text"
        placeholder="search..."
      />
    </>
  );
};

export default Search;
