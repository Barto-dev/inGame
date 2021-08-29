import React from 'react'
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import './App.css'
import Search from "../Search/Search";
import RepoList from "../RepoList/RepoList";
import SelectLanguage from "../SelectLanguage/SelectLanguage";

function App() {

  return (
    <Provider store={store}>
      <div className="wrapper">
        <div className="row person-list">
          <div className="person-list__top">
            <Search />
            <SelectLanguage />
          </div>

          <RepoList />
        </div>
      </div>
    </Provider>
  )
}

export default App
