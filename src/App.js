import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import { MovieProvider } from "./MovieContext/movieContext";
import TopratedMovies from "./components/Movies/TopratedMovies";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Header />
        <Movies />
        <TopratedMovies />
      </div>
    </MovieProvider>
  );
}

export default App;
