import React, {useEffect} from 'react';

import {useLocalStorageFav} from "../hooks/useLocalStorageFav";

import {useActions} from "../hooks/useActions";

import Search from "../components/Search/Search";
import SelectLanguage from "../components/SelectLanguage/SelectLanguage";
import RepoList from "../components/RepoList/RepoList";

const RepoPage = () => {

  return (

    <div className="wrapper">
      <div className="row person-list">
        <div className="person-list__top">
          <Search />
          <SelectLanguage />
        </div>
        <RepoList />
      </div>
    </div>

  );
};

export default RepoPage;
