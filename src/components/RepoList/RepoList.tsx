import React, {useEffect} from 'react';
import Repo from "../Repo/Repo";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const RepoList = () => {
  const {data, loading, error, favorite} = useTypedSelector((state) => state.repositories);

  useEffect(() => {
    window.localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);


  return (
    <div>
      {error && <h3>{error}</h3>}
      {loading && <h3>{loading}</h3>}
      {data.map((item) => <Repo key={item.id} {...item}/>)}
    </div>
  );
};

export default RepoList;
