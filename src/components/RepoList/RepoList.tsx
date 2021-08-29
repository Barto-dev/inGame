import React, {useEffect} from 'react';
import Repo from "../Repo/Repo";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import SelectLanguage from "../SelectLanguage/SelectLanguage";

import style from './RepoList.module.css';

const RepoList = () => {
  const {data, loading, error, favorite} = useTypedSelector((state) => state.repositories);

  useEffect(() => {
    window.localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);


  return (
    <div className={style.list}>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {data.map((item) => item.show && <Repo key={item.id} {...item}/>)}
    </div>
  );
};

export default RepoList;
