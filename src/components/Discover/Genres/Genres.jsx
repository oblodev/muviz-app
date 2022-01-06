import "../discover.css";
import { LocalMovies } from "@material-ui/icons";

function Genres({ genre }) {
  return (
    <div className="genres-list">
      <ul>
        <li>
          <a href="www.google.com">
            <LocalMovies className="d-icon" />
            {genre.name}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Genres;
