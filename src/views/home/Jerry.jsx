import React from "react";

import Box from "@mui/material/Box";

import InfiniteParticlesAnimation from "../../components/BackgroundParticles";

import useInViewPort from "../../hooks/useInViewPort";

import jerry from "../../assets/images/jerry.png";

import "../../styles/cursor.css";
import "../../styles/jerry.css";

export default function Jerry({ fadeRightAnimation }) {
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
    <Box
      ref={sectionRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        zIndex: 2,
      }}
      className={`jerry_main`}
    >
      <Box
        className="gamePreviewSection2VerticalLinesCont"
        style={{ overflow: "hidden" }}
      >
        <InfiniteParticlesAnimation />
      </Box>

      <Box
        ref={logoContainerRef}
        className="gamePreviewSectionLogoContainer"
        // sx={{ opacity: 0 }}
      >
        <img
          src={jerry}
          alt="jerry"
          className="gamePreviewSection1Logo box up-down transition3s "
        />
      </Box>
    </Box>
  );
}
