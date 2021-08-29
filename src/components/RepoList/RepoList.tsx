import React, {useEffect} from 'react';
import Repo from "../Repo/Repo";

import {useLocalStorageFav} from "../../hooks/useLocalStorageFav";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {mergeFavAndRepoArrays} from "../../utils/mergeFavAndRepoArrays";

const RepoList = (): JSX.Element => {
  useLocalStorageFav();
  const {data, loading, error, favorite} = useTypedSelector((state) => state.repositories);
  // Since there is no backend,
  // I had to improvise in order to show which of the repositories
  // is already in the favorite with a new search
  const favMergedData = mergeFavAndRepoArrays(data, favorite);

  useEffect(() => {
    window.localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  return (
    <div className="repo-grid">
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {favMergedData.map((item) => item.show && <Repo key={item.id} {...item} />)}
    </div>
  );
};

export default RepoList;
