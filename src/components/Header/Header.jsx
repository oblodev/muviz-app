import "./header.css";
import logo from "../../img/muviz-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="center">
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
    </header>
  );
}

export default Header;
