import React, { useState }from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import MovieState from "./context/movie/movieState";

//import { Route, Switch } from "react-router-dom";

function App() {

  return (
    <MovieState>
      <div className="App">
        <Header />
        <Movies />
      </div>
    </MovieState>
  );
}

export default App;
