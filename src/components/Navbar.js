import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const { watchlist } = useContext(GlobalContext);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i className="fab fa-monero" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/collection"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Collections
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/watchlist"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Watchlist <span className="count-nav">{watchlist.length}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movie" className="nav-links" onClick={closeMobileMenu}>
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tv" className="nav-links" onClick={closeMobileMenu}>
                TV Series
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
