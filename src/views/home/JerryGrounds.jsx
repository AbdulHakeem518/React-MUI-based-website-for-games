import React from "react";
import Box from "@mui/material/Box";

import InfiniteParticlesAnimation from "../../components/BackgroundParticles";

import hero from "../../assets/images/hero.png";

import useInViewPort from "../../hooks/useInViewPort";

import "../../styles/jerry.css";

export default function JerryGrounds({ fadeRightAnimation }) {
  const logoContainerRef = React.useRef(null);

  const onEnterViewPort = (dir) => {
    console.log("Jerry section is visible", dir);

    const logoContainer = logoContainerRef.current;

    logoContainer.style.opacity = 1;
    logoContainer.style.top = "50%";
  };

  const onLeaveViewPort = (dir) => {
    // const logoContainer = logoContainerRef.current;
    // if (dir === "bottom") {
    //   logoContainer.style.top = "130%";
    // } else {
    //   logoContainer.style.opacity = 0;
    // }
  };

  const sectionRef = useInViewPort(onEnterViewPort, onLeaveViewPort);

  return (
    <div ref={sectionRef}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        className={`jerry_main`}
      >
        <Box className="gamePreviewSection2VerticalLinesCont">
          <InfiniteParticlesAnimation />
        </Box>

        <Box
          ref={logoContainerRef}
          className="gamePreviewSectionLogoContainer"
          // sx={{ opacity: 0 }}
        >
          <img
            src={hero}
            alt="hero"
            className="gamePreviewSection1Logo box up-down transition3s "
          />
        </Box>
      </Box>
    </div>
  );
}
