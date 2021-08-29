import React, {useState} from 'react';
import debounce from 'lodash.debounce';
import {FavoriteInterface} from "./Favorite.interface";
import {useActions} from "../../hooks/useActions";

import styles from './Favorite.module.css';

import heartIcon from './img/heart-icon.svg';
import fillHeartIcon from './img/independ-heart-icon.svg';

const Favorite = ({repoId}: FavoriteInterface): JSX.Element => {
  // You may be wondering why debounce when adding to favorites.
  // In the wild code, adding to favorites sends a request to the server,
  // so we need to be sure to take this into account, even if the user clicks very quickly.
  // This will not create any load on our server.
  const DEBOUNCE_TIME = 1000;

  const [checked, setChecked] = useState<boolean>(false);
  const {addToFavoriteRepositories, deleteFavoriteRepositories} = useActions();

  const onFavChangeHandler = () => {
    setChecked(!checked);
    if (!checked) {
      addToFavoriteRepositories(repoId)
    } else {
      deleteFavoriteRepositories(repoId)
    }
  }

  return (
    <label className={styles.favorite}>
      <img src={checked ? fillHeartIcon : heartIcon} alt="" aria-hidden="true"/>
      <input type="checkbox"
             checked={checked}
             aria-label="Add to favorite"
             onChange={onFavChangeHandler}
             className="visually-hidden"/>
    </label>
  );
};

export default Favorite;
