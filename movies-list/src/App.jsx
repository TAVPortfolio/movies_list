import React, { useEffect, useState } from 'react';
import './App.scss';
import MovieCart from './MovieCart';

const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=ded652c2b050da101407c54111ad4649';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="App">
      <div className="container">
        {movies.map((movieReq) => (
          <MovieCart key={movieReq.id} {...movieReq} />
        ))}
      </div>
    </div>
  );
}

export default App;
