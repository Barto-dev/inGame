import React from 'react';

import RepoList from "../components/RepoList/RepoList";
import FavList from "../components/FavList/FavList";

const FavoritePage = () => {
  return (
    <div className="wrapper">
      <div className="row person-list">
        <h1>Favorite</h1>
        <FavList />
      </div>
    </div>
  );
};

export default FavoritePage;
