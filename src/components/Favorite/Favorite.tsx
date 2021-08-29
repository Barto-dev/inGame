import React, {useState, useEffect} from 'react';
import cn from 'classnames';
import {FavoriteInterface} from "./Favorite.interface";
import {useActions} from "../../hooks/useActions";

import style from './Favorite.module.css';

import heartIcon from './img/heart-icon.svg';
import fillHeartIcon from './img/independ-heart-icon.svg';

const Favorite = ({repoId, isFavorite}: FavoriteInterface): JSX.Element => {
  // You may be wondering why debounce when adding to favorites.
  // In the wild code, adding to favorites sends a request to the server,
  // so we need to be sure to take this into account, even if the user clicks very quickly.
  // This will not create any load on our server.
  const DEBOUNCE_TIME = 500;

  const [checked, setChecked] = useState<boolean>(isFavorite);
  const [debounceCheck, setDebounceCheck] = useState<boolean>(checked);
  const {addToFavoriteRepositories, deleteFavoriteRepositories} = useActions();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceCheck(checked);
    }, DEBOUNCE_TIME);

    return () => {
      clearTimeout(timerId);
    }
  }, [checked]);

  useEffect(() => {
    if (debounceCheck) {
      addToFavoriteRepositories(repoId)
    } else {
      deleteFavoriteRepositories(repoId)
    }
  }, [debounceCheck]);


  return (
    <label className={cn(style.favorite, {
      [style.addFavorite]: isFavorite
    })}>
      <input type="checkbox"
             checked={checked}
             aria-label="Add to favorite"
             onChange={(e) => setChecked(e.target.checked)}
             className={cn('visually-hidden', style.input)} />
      <img src={heartIcon} aria-hidden="true" alt="icon" className={style.icon} />
      <img src={fillHeartIcon} aria-hidden="true" alt="icon" className={style.iconCheck} />
    </label>
  );
};

export default Favorite;
