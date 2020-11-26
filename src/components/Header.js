import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../imgs/upArrow.svg";
import gsap from "gsap";

let tl = gsap.timeline();
const Header = ({ history }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setMenuOpen(false);
    });
    if (menuOpen) {
      //Run open menu animation
      tl.to("body", { duration: 0.01, css: { overflowX: "hidden" } })
        .to(".app", {
          duration: 0.7,
          x: window.innerWidth <= 654 ? "70vw" : "40vw",
          ease: "expo.inOut",
        })
        .from(".nav-links a span", {
          duration: 0.3,
          skewY: 30,
          opacity: 0,
          delay: -0.5,
          y: 100,
          stagger: 0.2,
        })
        .from(".social", {
          duration: 0.3,

          opacity: 0,
          y: 50,
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to(".hamburger-menu-close", {
          duration: 0.6,
          delay: -0.8,
          css: {
            display: "block",
          },
        });
    } else {
      //run Close menu animation
      tl.to(".app", {
        duration: 0.7,
        x: 0,
        ease: "expo.inOut",
      })

        .to("#circle", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -0.6,
          scaleX: 1,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", {
          css: { display: "none" },
        })
        .to("body", {
          css: {},
        });
    }
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/">
              <p>KOA</p>
              <p>SHALA</p>
              <p className="lower-logo">SPA &amp; WELLBEING</p>
            </NavLink>
          </div>
          <div className="nav-toggle">
            <button
              className="hamburger-menu"
              onClick={() => setMenuOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button
              className="hamburger-menu-close"
              onClick={() => setMenuOpen(false)}
            >
              <UpArrow />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
