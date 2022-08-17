import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context";

const Header = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
    if(theme.state.darkMode) {
      document.body.className = 'dark_theme';
      localStorage.setItem("theme", 'dark_theme');
    }else {
      document.body.className = 'light_theme';
      localStorage.setItem("theme", 'light_theme');
    }
  };

  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <h1 className="h1 logo">
            <a href="#">
              SS.<span>.</span>
            </a>
          </h1>

          <div className="navbar-actions">
            <button
              className="theme-btn active"
              aria-label="Change Theme"
              title="Change Theme"
              data-theme-btn
              onClick={handleClick}
            >
              <span className="icon"></span>
            </button>
          </div>

          <button
            className="nav-toggle-btn"
            aria-label="Toggle Menu"
            title="Toggle Menu"
            data-nav-toggle-btn
          >
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </button>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link">
                  Home.
                </a>
              </li>

              <li>
                <a href="#about" className="navbar-link">
                  About.
                </a>
              </li>

              <li>
                <a href="#skills" className="navbar-link">
                  Skills.
                </a>
              </li>

              <li>
                <a href="#portfolio" className="navbar-link">
                  Portfolio.
                </a>
              </li>

              <li>
                <a href="#contact" className="navbar-link">
                  Contact.
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
