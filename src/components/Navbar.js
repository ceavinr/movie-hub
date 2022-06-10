import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const { watchlist } = useContext(GlobalContext);

  const handleClick = () => {
    setClick(!click);
    if (window.scrollY <= 80 && !click) {
      setNavbar(true);
    } else if (window.scrollY <= 80 && click) {
      setNavbar(false);
    }
  };
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else if (window.scrollY <= 80 && click) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {"\u00a0\u00a0"}
            <i className="fab fa-monero" />
          </Link>
          <h3 className="navbar-name">
            {"\u00a0\u00a0"}MovieHub{"\u00a0\u00a0"}
          </h3>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
            {"\u00a0\u00a0"}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/watchlist"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Watchlist{" "}
                <span className="count-nav">
                  {watchlist.length > 99 ? "99+" : watchlist.length}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movie" className="nav-links" onClick={closeMobileMenu}>
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tv" className="nav-links" onClick={closeMobileMenu}>
                TV Shows
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
