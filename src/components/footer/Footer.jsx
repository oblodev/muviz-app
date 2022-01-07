import "./footer.css";
import tmdb from "../../img/tmdb.svg";

function Footer() {
  return (
    <div className="footer">
      <h5>Copypright &copy; dkostka.dev</h5>
      <img src={tmdb} alt="the movie db logo" className="tmdb" />
    </div>
  );
}

export default Footer;
