import Header from "./components/Header";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import "./styles/App.scss";
import gsap from "gsap";

function App() {
  useEffect(() => {
    gsap.to("body", { duration: 0.01, css: { visibility: "visible" } });
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
