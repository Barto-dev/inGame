import React, {useState, useMemo, useEffect} from 'react';
import {useActions} from "../../hooks/useActions";
import debounce from 'lodash.debounce';
import style from './Search.module.css';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const {searchRepositories} = useActions();
  const DEBOUNCE_TIME = 1000;

  useEffect(() => {
    if (query) {
      searchRepositories(query);
    }
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
        className={style.input}
        type="search"
        placeholder="Enter search terms..."
        onChange={debouncedChangeHandler}
        aria-label="Search project on Github" />
    </div>
  );
};

export default Search;
