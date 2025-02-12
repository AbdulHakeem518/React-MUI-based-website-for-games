import { Box, Typography, styled } from "@mui/material";
import React from "react";
import footerEye from "../assets/images/footerEye.png";
import footerX from "../assets/images/footerX.png";

const StyledBox = styled(Box)({
  "& img": {
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      filter: "brightness(0.6)",
    },
  },
});

export default function Footer() {
  return (
    <StyledBox
      color="#fff"
      position="relative"
      p="25px"
      bgcolor="#111111"
      width="100%"
      className="hide-blob"
    >
      <Box
        display="flex"
        gap="20px"
        alignItems="center"
        justifyContent="center"
        mt="20px"
      >
        <a href="https://x.com/NeurealDev">
          <img src={footerX} alt="footer" />
        </a>
        <a href="https://discord.gg/FYnhV9PH9S">
          <img src={footerEye} alt="footerEye" />
        </a>
      </Box>

      <Box textAlign="center">
        <Typography mt="20px">© Neureal 2024</Typography>
      </Box>
    </StyledBox>
  );
}
