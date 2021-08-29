import React from 'react'
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import './App.css'
import Search from "../Search/Search";
import RepoList from "../RepoList/RepoList";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Search />
        <RepoList />
      </div>
    </Provider>
  )
}

export default App
