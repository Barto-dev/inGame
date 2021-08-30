import React, {useState, useMemo, useEffect} from 'react';
import {useActions} from "../../hooks/useActions";
import debounce from 'lodash.debounce';

import style from './Search.module.css';

const Search = (): JSX.Element => {
  const DEBOUNCE_TIME = 1000;

  const [query, setQuery] = useState('formurai');
  const {searchRepositories} = useActions();

  useEffect(() => {
    if (query) {
      searchRepositories(query);
    }
  }, [query]);

  // clear debounce effect after component unmount
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
        className={style.input}
        type="search"
        placeholder="Enter search terms..."
        onChange={debouncedChangeHandler}
        aria-label="Search project on Github" />
    </div>
  );
};

export default Search;
