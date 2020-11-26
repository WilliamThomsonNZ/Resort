import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import IntroAnimation from "../components/IntroAnimation";
import gsap from "gsap";
import Relax from "../components/Relax";
const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.to("html", {
    duration: 0,
    css: {
      overflow: "hidden",
    },
  })

    .from(".intro-overlay span", {
      duration: 1.6,
      opacity: 0,
      y: 100,
      ease: "power4.out",
      delay: 0.8,
      skewY: 7,
      stagger: {
        amount: 0.6,
      },
    })
    .to(".intro-overlay span", {
      duration: 1,
      opacity: 0,
    })
    .to(".intro-overlay", {
      duration: 1.4,
      height: 0,
      delay: -1,
      ease: "expo.inOut",
    })
    .from(".banner-title span", {
      duration: 1.2,
      opacity: 0,
      delay: 0,
      y: 50,
      ease: "power4.out",
    })
    .from(
      ".inner-img button",
      {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power4.out",
      },
      3.3
    )
    .to("html", {
      duration: 0,
      css: {
        overflow: "auto",
      },
      onComplete: completeAnimation,
    });
};

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
  };
  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      {!animationComplete && <IntroAnimation />}
      <Banner />
      <Relax />
    </>
  );
};

export default Home;
