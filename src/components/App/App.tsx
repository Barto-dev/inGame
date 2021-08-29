import React from 'react'
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import RepoPage from "../../routes/RepoPage";
import FavoritePage from "../../routes/FavoriteTsx";
import Error404 from "../../routes/Error404";

import Header from "../Header/Header";

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <main>
          <Switch>
            <Route path="/" exact component={RepoPage} />
            <Route path="/favorite" exact component={FavoritePage} />
            <Route component={Error404} />
          </Switch>
        </main>

      </BrowserRouter>
    </Provider>
  )
}

export default App
