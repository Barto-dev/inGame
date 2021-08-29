import React, {useState} from 'react';
import {FavoriteInterface} from "./Favorite.interface";
import {useActions} from "../../hooks/useActions";

import styles from './Favorite.module.css';

import heartIcon from './img/heart-icon.svg';
import fillHeartIcon from './img/independ-heart-icon.svg';

const Favorite = ({repoId}: FavoriteInterface): JSX.Element => {
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
