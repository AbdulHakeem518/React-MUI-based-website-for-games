/* eslint-disable no-useless-computed-key */
import { Fragment } from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";

import InfiniteParticlesAnimation from "../../components/BackgroundParticles";

import { copyToClipboard } from "../../utils";
import { MECH_SHOWDOWN_PLAY_LINK } from "../../constants";

import battle from "../../assets/images/battle.png";
import share from "../../assets/images/share.png";
import jerry from "../../assets/images/jerry.png";

import "../../styles/jerry.css";

const animationClass = {
  title: "fade-up",
  description: "fade-up",
  battle: "zoom-out",
  buttonsRow: "fade-up",
};

export default function Battlegrounds() {
  return (
    <>
      <Fragment>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Fragment>

      <Container
        maxWidth="lg"
        sx={{
          zIndex: 6,
          paddingTop: {
            xl: "auto",
            xs: "30%",
            sm: "30%",
          },
          paddingBottom: {
            xl: "auto",
            xs: "30%",
            sm: "30%",
          },
        }}
        className="gamePreviewSection2"
      >
        <Grid container spacing={{ xs: 2, sm: 6 }}>
          <ImageColumn item xs={12} sm={6}>
            <Thumbnail
              src={battle}
              alt="battle"
              className={`${animationClass.battle}`}
            />
          </ImageColumn>

          <ContentColumn item xs={12} sm={6}>
            <img
              src={jerry}
              alt="jerry"
              className="gamePreviewSection1Logo gamePreviewSection2LogoContainer"
            />
            <Title
              className={`${animationClass.title} transition3s`}
              variant="h3"
            >
              Mech <br />
              Showdown
            </Title>
            <Description
              className={`${animationClass.description} transition3s`}
            >
              Mech fighting multiplayer battle arena that's dynamic and
              destructive.
            </Description>

            <ButtonsRow className={`${animationClass.buttonsRow} transition3s`}>
              <PlayNowButton
                component="a"
                href={MECH_SHOWDOWN_PLAY_LINK}
                target="_blank"
                className={`play_now ${animationClass.button}`}
              >
                Play now
              </PlayNowButton>

              <IconButton
                variant="text"
                onClick={() => copyToClipboard(MECH_SHOWDOWN_PLAY_LINK)}
                sx={{
                  transition: "all 0.5s ease",
                  "&:hover": { opacity: 0.6 },
                  "&:active": { opacity: 0.6 },
                  "&:focus": { opacity: 0.6 },
                }}
              >
                <img src={share} alt="share" />
              </IconButton>
            </ButtonsRow>
          </ContentColumn>
        </Grid>

        <Box className="gamePreviewSection2VerticalLinesCont">
          <InfiniteParticlesAnimation />
        </Box>
      </Container>
    </>
  );
}

const ImageColumn = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 6,

  ["&>img"]: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      maxHeight: theme.spacing(40),
    },
  },
}));
const Thumbnail = styled("img")(({ theme }) => ({
  opacity: 0,
  width: "100%",
  height: "auto",
  objectFit: "contain",
  transform: "scale(2)",
  transition: "opacity 1s ease-in, transform 0.5s ease-in",
  marginBottom: theme.spacing(2),
}));

const ContentColumn = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "left",
  gap: theme.spacing(2),
  zIndex: 6,
  padding: theme.spacing(2, 0),
}));
const Title = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "800",
  fontFamily: "Orbitron",
  opacity: 0,
  transition: "opacity 1s ease-in",
  marginBottom: theme.spacing(2),

  [theme.breakpoints.down("md")]: {
    fontSize: theme.spacing(5),
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: theme.spacing(4),
  },
}));
const Description = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "400",
  opacity: 0,
  transition: "opacity 1s ease-in",
  maxWidth: 400,
  marginBottom: theme.spacing(3),
  fontFamily: "Poppins, sans-serif",

  [theme.breakpoints.down("md")]: {
    fontSize: theme.spacing(2),
  },
}));
const ButtonsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(3),
  marginTop: theme.spacing(3),
  opacity: 0,
  transition: "opacity 1s ease-in",
  zIndex: 6,

  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
}));
const PlayNowButton = styled(Button)(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 700,
  color: "#fff",
  textTransform: "unset",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));
