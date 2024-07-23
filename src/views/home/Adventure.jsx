import React, { useEffect, useState } from "react";

import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import arrow from "../../assets/images/arrow.png";
import videoSrc from "../../assets/videos/video.mp4";

export default function Adventure({ nextScreen, onVideoLoaded }) {
  const [isAdventure, setIsAdventure] = useState(true);
  const [displayedText, setDisplayedText] = useState("");

  const handleVideoError = () => {};

  const handleVideoLoaded = () => {
    console.log("Video is successfully loaded and ready to play");
    onVideoLoaded();
  };

  useEffect(() => {
    let index = 0;
    const fullText = "A" + (isAdventure ? "ADVENTURE" : "RULES");
    const typingDuration = 1000; // 1 second
    const typingInterval = typingDuration / fullText.length; // Calculate interval based on text length

    setDisplayedText("");

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, typingInterval);

    return () => clearInterval(intervalId);
  }, [isAdventure]);

  useEffect(() => {
    const toggleText = () => {
      setIsAdventure((prev) => !prev);
    };

    const intervalId = setInterval(toggleText, 3500); // 1 second typing + 2.5 seconds pause

    return () => clearInterval(intervalId);
  }, []);

  const handleVideoClick = () => {
    // nextScreen();
    const element = document.getElementById("section4");

    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <SectionBox className="section2">
        <StyledContainer>
          <AdventureTitle
            variant="h3"
            className="adventure_title"
            sx={{
              marginBottom: "96px",
            }}
          >
            YOUR
            <Box
              component="span"
              height={48}
              marginBottom={6}
              sx={{ display: "block" }}
            >
              {displayedText}
            </Box>
          </AdventureTitle>

          <ArrowIcon
            src={arrow}
            alt="arrow"
            width={32}
            height={32}
            className="arrow_icon"
            onClick={handleVideoClick}
          />
        </StyledContainer>
      </SectionBox>

      <BackgroundVideo
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={handleVideoLoaded}
        onError={handleVideoError}
      />
    </>
  );
}

const SectionBox = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: "100vh",
  minWidth: "100vw",
  textAlign: "center",
  display: "flex",
  alignItems: "end",
  background: "transparent",
  zIndex: 1,
}));

const StyledContainer = styled(Container)(({ videoClicked }) => ({
  position: "relative",
  zIndex: 2,
  ...(videoClicked && {
    position: "relative",
    right: "-11%",
  }),
}));

const AdventureTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontFamily: "Orbitron",
  whiteSpace: "pre-line",
  fontWeight: "800",
  transition: "opacity 0.5s ease",
  opacity: 1,
}));

const ArrowIcon = styled("img")({
  color: "#fff",
  position: "relative",
  zIndex: 3,
  cursor: "pointer",
});

const BackgroundVideo = styled("video")({
  width: "100vw",
  height: "100vh",
  objectFit: "cover",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  opacity: 1,
});
