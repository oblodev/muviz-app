import "./discover.css";
import {
  Favorite,
  VerticalAlignTop,
  NextWeek,
  AttachMoney,
  Pages,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import Genres from "./Genres/Genres";
import MuvizGrid from "../MuvizGrid/MuvizGrid";
import axios from "axios";

function Discover() {
  const [sort, setSort] = useState("popularity.desc");
  const [selectedPop, setSelectedPop] = useState(true);
  const [selectedTop, setSelectedTop] = useState(false);
  const [selectedRev, setSelectedRev] = useState(false);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  function SearchMovie() {
    const fetchItems = async () => {
      const result = await axios(
        `
        https://api.themoviedb.org/3/search/movie?api_key=52291c7d63b8c123354a244384d96744&language=en-US&query=${text}&page=1&include_adult=false`
      );

      //console.log(result.data.results);
      setItems(result.data.results);
    };

    fetchItems();
  }

  /*
  function GetPopularData(sort, page) {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=52291c7d63b8c123354a244384d96744&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&vote_count.gte=1000&with_watch_monetization_types=flatrate`
      );

      //console.log(result.data.results);
      setItems(result.data.results);
    };

    fetchItems();
  }

  function GetTopRatedData(sort, page) {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=52291c7d63b8c123354a244384d96744&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&vote_count.gte=1000&with_watch_monetization_types=flatrate`
      );

      console.log(result.data.results);
      setItems(result.data.results);
    };

    fetchItems();
  }

  function GetTopRevenueData(sort, page) {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=52291c7d63b8c123354a244384d96744&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&vote_count.gte=1000&with_watch_monetization_types=flatrate`
      );

      console.log(result.data.results);
      setItems(result.data.results);
    };

    fetchItems();
  }
  */
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=52291c7d63b8c123354a244384d96744&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&vote_count.gte=1000&with_watch_monetization_types=flatrate`
      );
      //console.log(result.data);
      //console.log(result.data.results);

      setItems(result.data.results);
    };

    fetchItems();
  }, [sort, page]);

  return (
    <div className="discover">
      <section className="search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search Movies"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              SearchMovie(text);
            }}
            autoFocus
          />
        </form>
      </section>
      <div className="discover-muvi">
        <h2>DISCOVER MOVIES</h2>
        <div className="muvi-list">
          <ul>
            <li>
              <button
                className={selectedPop ? "active" : ""}
                onClick={() => {
                  //GetPopularData("popularity.desc", page);
                  setSort("popularity.desc");
                  setSelectedRev(false);
                  setSelectedTop(false);
                  setSelectedPop(true);
                  setPage(1);
                }}
              >
                <Favorite className="d-icon" /> <span>Popular</span>
              </button>
            </li>
            <li>
              <button
                className={selectedTop ? "active" : ""}
                onClick={() => {
                  //GetTopRatedData("vote_average.desc", page);
                  setSort("vote_average.desc");
                  setSelectedRev(false);
                  setSelectedTop(true);
                  setSelectedPop(false);
                  setPage(1);
                }}
              >
                <VerticalAlignTop className="d-icon" />
                Top Rated
              </button>
            </li>
            <li>
              <button
                className={selectedRev ? "active" : ""}
                onClick={() => {
                  //GetTopRevenueData("revenue.desc", page);
                  setSort("revenue.desc");
                  setSelectedRev(true);
                  setSelectedTop(false);
                  setSelectedPop(false);
                  setPage(1);
                }}
              >
                <AttachMoney className="d-icon" />
                Revenue
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/*}
      <div className="discover-genres">
        <h2>GENRES</h2>
        <section className="genre-cards">
          {genres.map((genre) => (
            <Genres key={genre.id} genre={genre}></Genres>
          ))}
        </section>
      </div>
          */}
      <MuvizGrid items={items} />
      <div className="button-wrapper">
        <button
          className={page > 1 ? "btn-left" : "hidden"}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Page {page - 1}
        </button>

        <button className="btn-right" onClick={() => setPage(page + 1)}>
          Page {page + 1}
        </button>
      </div>
    </div>
  );
}

export default Discover;
