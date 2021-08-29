import React, {useState, useMemo, useEffect} from 'react';
import {useFetch} from "../../hooks/useFetch";
import {Repo} from "./Search.interface";
import debounce from 'lodash.debounce';

const Search = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const DEBOUNCE_TIME = 1000;

  useEffect(() => {
    console.log(query);
  }, [query]);


  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    }
  }, []);

  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, DEBOUNCE_TIME)
    , []);

  return (
    <div>
      <input
        type="search"
        onChange={debouncedChangeHandler}
        aria-label="Search project on Github" />
    </div>
  );
};

export default Search;
