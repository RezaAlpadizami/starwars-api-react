import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

import "./header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>

      <nav>
        <Link to="/films">Films</Link>
        <Link to="/species">Species</Link>
        <Link to="/starships">Star Ships</Link>
        <Link to="/vehicles">Vehicles</Link>
      </nav>
    </header>
  );
};

export default Header;
