import "./muvizitem.css";
import { useEffect } from "react";
import { Star } from "@material-ui/icons";
import { Link } from "react-router-dom";

function MuviItem({ item }) {
  const poster = `https://image.tmdb.org/t/p/w342/`;

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={poster + item.poster_path} alt="Movie Poster" />
        </div>
        <div className="card-back">
          <h1>{item.title}</h1>
          <ul>
            <li>
              <strong>Release Date:</strong> {item.release_date}
            </li>
            <li>
              <div className="info-wrap">
                <strong>Average Rating:</strong>
              </div>
              <div className="rating-wrapper">
                <Star
                  className="rating-icon"
                  style={{ color: "rgb(245, 197, 24)" }}
                />
                <div className="rating-ratings">
                  <p>
                    <span className="bigger">{item.vote_average}</span>
                    <span className="medium">/10</span>
                  </p>
                  <p>
                    <span className="smaller">{item.vote_count}</span>
                  </p>
                </div>
              </div>
            </li>
            <li></li>
          </ul>
          <div className="wrap">
            <div className="btn-wrapper">
              <Link key={item.id} to={`/${item.id}`}>
                <button className="btn-more">See more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MuviItem;
