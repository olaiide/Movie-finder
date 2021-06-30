import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import TopratedMovies from './components/Movies/TopratedMovies';
import MovieState from './context/movie/MovieState';

function App() {
  return (
    <MovieState>
      <div className='App'>
        <Header />
        <Movies />
        <TopratedMovies />
      </div>
    </MovieState>
  );
}

export default App;
