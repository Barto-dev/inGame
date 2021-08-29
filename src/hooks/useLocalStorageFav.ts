import {useActions} from "./useActions";
import {useEffect} from "react";

export const useLocalStorageFav = () => {
  const {setFavoriteRepositories} = useActions();

  const favoriteListFromLS = window.localStorage.getItem('favorite');
  useEffect(() => {
    if (favoriteListFromLS) {
      setFavoriteRepositories(JSON.parse(favoriteListFromLS));
    }
  }, []);
}
