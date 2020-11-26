import React from "react";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-overlay">
        <div className="container">
          <div className="banner-container">
            <div className="inner-img">
              <div className="inner-overlay">
                <h1 className="banner-title">
                  <p>
                    <span>Find </span>
                  </p>
                  <p>
                    <span>Yourself </span>
                  </p>
                  <p>
                    <span>Here</span>
                  </p>
                </h1>

                <button className="btn-banner btn ">
                  <span>OUR STORY</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
