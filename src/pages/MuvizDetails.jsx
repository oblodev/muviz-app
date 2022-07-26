import React, { useState, useEffect } from "react";

import "./MuvizDetails.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Star } from "@material-ui/icons";

import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { AiFillHome } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";

function MuvizDetails() {
  const [movieDetails, setMovieDetails] = useState("");
  const [isFetched, setIsFetched] = useState(false);
  const { movieId } = useParams();
  const poster = `https://image.tmdb.org/t/p/w342/`;

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=52291c7d63b8c123354a244384d96744&language=en-US`
      );

      setMovieDetails(result.data);
      console.log(result.data);
      setIsFetched(true);
    };

    fetchMovies();
  }, []);

  return (
    <div className="muviz-details">
      <motion.div
        animate={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className="muviz-details-poster"
      >
        <img src={poster + movieDetails.poster_path} alt="movie_poster" />
      </motion.div>
      <motion.div
        animate={{ x: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.65 }}
        className="muviz-details-info"
      >
        <h2>{movieDetails.original_title}</h2>
        <h4>{movieDetails.tagline}</h4>
        <div className="muviz-details-info-wrap">
          <div className="stars">
            <Star
              className="rating-icon"
              style={{ color: "rgb(245, 197, 24)" }}
            />
            <div className="rating-ratings">
              <p>
                <span className="bigger">
                  {isFetched && movieDetails.vote_average.toFixed(1)}
                </span>
                <span className="medium">/10</span>
              </p>
              <p>
                <span className="smaller">{movieDetails.vote_count}</span>
              </p>
            </div>
          </div>
          <div className="muviz-info"></div>
        </div>
        <div className="story-info">
          <h5>Storyline</h5>
          <p>
            {movieDetails.runtime} Min./{" "}
            {isFetched && movieDetails.release_date.slice(0, 4)}
          </p>
        </div>
        <p className="muviz-overview">{movieDetails.overview}</p>
        <h5>Genres</h5>
        <div className="genres-info">
          {isFetched &&
            movieDetails.genres.map((genre) => (
              <p className="genres-p">{genre.name}</p>
            ))}
        </div>
        <div>
          <a className="link-btn" href={movieDetails.homepage} target="_blank">
            <AiFillHome className="btn-icon" /> Homepage
          </a>
          <a
            className="link-btn"
            href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
            target="_blank"
          >
            <TbMovie className="btn-icon" /> imdb
          </a>
          <Link className="link-btn" to="/">
            <TiArrowBack className="btn-icon" /> Back
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default MuvizDetails;
