import React, {useEffect} from 'react';
import {useLocalStorageFav} from "../../hooks/useLocalStorageFav";
import {useTypedSelector} from "../../hooks/useTypedSelector";


import Repo from "../Repo/Repo";

const FavList = (): JSX.Element => {
  useLocalStorageFav();

  const {favorite} = useTypedSelector((state) => state.repositories);

  useEffect(() => {
    window.localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  return (
    <div>
      {!favorite.length && <h2>You favorite list is empty</h2>}
      <div className="repo-grid">
        {favorite.length && favorite.map((item) => item.show && <Repo key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default FavList;
