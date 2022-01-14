import "./header.css";
import logo from "../../img/muviz-logo.png";

function Header() {
  return (
    <header className="center">
      <img src={logo} alt="" className="logo" />
    </header>
  );
}

export default Header;
