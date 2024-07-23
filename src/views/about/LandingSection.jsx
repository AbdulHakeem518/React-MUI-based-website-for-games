import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

export default function AboutLandingSection() {
  return (
    <Container>
      <ContentBox>
        <Title variant="h3" className="text-center">
          About Us
        </Title>
        <Content>
          Neureal is an indie world creation studio on a quest to craft MMOs
          with pure simulation, delivering fully immersive digital universes
          like never before
        </Content>
      </ContentBox>
    </Container>
  );
}

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
}));

const ContentBox = styled(Box)(({ theme }) => ({
  width: "564px",
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#ffffff",
  fontSize: "48px",
  fontFamily: "Orbitron",
  lineHeight: "1.25",
  fontWeight: "800",
  textAlign: "center",
  marginBottom: "64px",
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
    lineHeight: "135%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    lineHeight: "1.25",
  },
}));

const Content = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.9)",
  fontFamily: "Poppins",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "1.5",
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("sm")]: {
    fontFamily: "Poppins",
    fontSize: "16px",
  },
}));
