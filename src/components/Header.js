import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">
              <p>KOA</p>
              <p>SHALA</p>
              <p className="lower-logo">SPA &amp; WELLBEING</p>
            </a>
          </div>
          <div className="nav-toggle">
            <button className="hamburger-menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button className="hamburger-menu-close">
              {/* <UpArrow /> */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
