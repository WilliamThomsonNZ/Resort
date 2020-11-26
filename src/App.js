import Header from "./components/Header";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import "./styles/App.scss";
import gsap from "gsap";
import Navigation from "./components/Navigation";

function App() {
  window.scrollTo(0, 0);
  useEffect(() => {
    gsap.to("body", { duration: 0.01, css: { visibility: "visible" } });
  }, []);

  return (
    <>
      <Header />
      <div className="app">
        <Home />
      </div>
      <Navigation />
    </>
  );
}

export default App;
