"use client";
import React, { useState, useEffect } from "react";

import Section from "../../components/Section";
import LogoSection from "../../views/home/LogoSection";
import Adventure from "../../views/home/Adventure";
import Jerry from "../../views/home/Jerry";
import Battlegrounds from "../../views/home/Battlegrounds";
import JerryGrounds from "../../views/home/JerryGrounds";
import Tower from "../../views/home/Tower";
import JoinUs from "../../components/JoinUs";

import useCustomCursor from "../../hooks/useCustomCursor";

import "../../styles/game.css";
import "../../styles/jerry.css";

export default function Home() {
  const elementRef = useCustomCursor();

  const [minDelayPassed, setMinDelayPassed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinDelayPassed(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const preventDefault = (e) => {
      e.preventDefault();
    };

    if (minDelayPassed && videoLoaded) {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("wheel", preventDefault);
      document.removeEventListener("touchmove", preventDefault);

     
      const loaderOverlay = document.querySelector(".loader-animation-overlay");
      if (loaderOverlay) {
        loaderOverlay.classList.add("fade-out");

        setTimeout(() => {
          loaderOverlay.style.display = "none";
        }, 1000);
      }
    } else {
      document.body.classList.add("no-scroll");

      document.addEventListener("wheel", preventDefault, { passive: false });
      document.addEventListener("touchmove", preventDefault, {
        passive: false,
      });
    }

    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("wheel", preventDefault);
      document.removeEventListener("touchmove", preventDefault);
    };
  }, [minDelayPassed, videoLoaded]);

  const handleOnVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div ref={elementRef}>
      <div
        className={`loader-animation-overlay ${
          minDelayPassed && videoLoaded ? "fade-out" : ""
        }`}
      >
        <Section
          id="section1"
          className="section1"
          sectionClass="hide-blob"
          component={LogoSection}
        />
      </div>

      <Section
        id="section2"
        sectionClass="hide-blob"
        component={Adventure}
        onVideoLoaded={handleOnVideoLoad}
      />
      <Section id="section4" component={Jerry} />
      <Section id="section5" component={Battlegrounds} />
      <Section id="section6" component={JerryGrounds} />
      <Section id="section7" component={Tower} />
      <Section id="section8" sectionClass="hide-blob" component={JoinUs} />
    </div>
  );
}
