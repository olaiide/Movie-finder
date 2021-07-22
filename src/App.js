import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import MovieState from "./context/movie/movieState";
import { Route, Switch } from "react-router-dom";
import MovieInfo from "./components/pages/movieInfo";

function App() {
  return (
    <MovieState>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/movie/:id">
            <MovieInfo />
          </Route>
        </Switch>
      </div>
    </MovieState>
  );
}

export default App;
