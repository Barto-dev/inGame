import React, {useState} from 'react';
import {FavoriteInterface} from "./Favorite.interface";
import {useActions} from "../../hooks/useActions";

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
    <label>
      <input type="checkbox" checked={checked} onChange={onFavChangeHandler}/>
    </label>
  );
};

export default Favorite;
