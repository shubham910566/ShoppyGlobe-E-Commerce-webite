// src/Components/Header.js
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

function Header({ toggleDarkMode, isDarkMode }) {
  return (
    <header className="header">
      <h1 className="header-title">
        <Link to="/" className="header-link">
          ShoppyGlobe
        </Link>
      </h1>
      <nav className="header-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
        <Link to="/checkout" className="nav-link">
          Checkout
        </Link>
        <button
          onClick={toggleDarkMode}
          className="dark-mode-toggle"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Header;