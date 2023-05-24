import React from 'react';
import './movieCart.scss';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const MovieCart = ({ title, poster_path, release_date, vote_average }) => {
  return (
    <div className="movie-cart">
      <div className="wrapper" data-after-content={vote_average}>
        <img className="poster" src={IMG_URL + poster_path} alt={title} />
      </div>
      <div className="movie-info">
        <h2 className="movie-info__title">{title}</h2>
        <span className="movie-info__date">{release_date}</span>
      </div>
    </div>
  );
};

export default MovieCart;
