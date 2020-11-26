import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label"></div>
            <ul className="nav-links">
              <li>
                <NavLink to="/services" exact>
                  <span>Services</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/our-story" exact>
                  <span>Our Story</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Yoga" exact>
                  <span>Yoga</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" exact>
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
            <div className="social">
              Social
              <ul>
                <li>Intstagram</li>
                <li>Facebook</li>
                <li>TripAdvisor</li>
              </ul>
            </div>
          </div>
          {/* <div className="nav-column"> */}
          {/* <div className="nav-label">Contact</div> */}
          {/* <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/contact" exact>
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/audit" exact>
                    Get a free audit
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarters</li>
                <li>Route du Jura 49</li>
                <li>1700 Fribourg</li>
                <li>New Zealand</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+64 21 169 8848</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy policy</li>
              </ul>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
