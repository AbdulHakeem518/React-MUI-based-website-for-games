import React from "react";

import { Box, Grid, Typography, Container } from "@mui/material";

import styled from "@emotion/styled";

import girl from "../../assets/images/img-placeholder.png";
import backgroundImage from "../../assets/images/logobg.png";

const NewsPage = () => {
  return (
    <Box
      sx={{
        paddingTop: {
          xs: "80px",
          sm: "80px",
          md: "140px",
          lg: "110px",
          "@media (max-width: 992px)": {
            paddingTop: "110px",
          },
          "@media (max-width: 600px)": {
            paddingTop: "140px",
          },
        },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          paddingBottom: "5%",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            marginBottom: "48px",
          }}
        >
          {data2.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <a href="/" target="_blank" style={{ textDecoration: "none" }}>
                <StyledCard>
                  <ImageContainer className="imageContainer">
                    <StyledImages
                      component="img"
                      src={item.img}
                      alt="girl"
                      sx={{
                        width: { xl: "564px !important", sm: "100%" },
                        height: { xl: "317px", sm: "100%" },
                      }}
                    />
                  </ImageContainer>
                  <StyledTitleTop variant="h5" className="hoverText">
                    {item.title}
                  </StyledTitleTop>
                  <StyledDate>{item.date}</StyledDate>
                </StyledCard>
              </a>
            </Grid>
          ))}
        </Grid>

        <Grid
          container
          columnSpacing={2}
          sx={{
            marginBottom: "0",
          }}
        >
          {data.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                marginBottom: "48px",
                display: { xs: "block", sm: "block" },
                flexDirection: { xs: "row-reverse", sm: "row" },
                "@media (max-width: 600px)": {
                  marginBottom: "unset",
                },
              }}
            >
              <a href="/" target="_blank" style={{ textDecoration: "none" }}>
                <StyledCard
                  sx={{
                    display: { xs: "flex", sm: "block" },
                    flexDirection: { xs: "row-reverse", sm: "column" },
                    alignItems: { xs: "center", sm: "flex-start" },
                    "@media (max-width: 600px)": {
                      maxWidth: { xs: "100%" },
                    },
                  }}
                >
                  <ImageContainer className="imageContainer">
                    <StyledImage
                      component="img"
                      src={item.img}
                      alt="girl"
                      sx={{
                        width: { xs: "50%", sm: "100%", lg: "368px" },
                        height: "207px",
                      }}
                    />
                  </ImageContainer>
                  <Styledtext>
                    <Box>
                      <StyledTitle variant="h5" className="hoverText">
                        {item.title}
                      </StyledTitle>
                      <StyledDate>{item.date}</StyledDate>
                    </Box>
                  </Styledtext>
                </StyledCard>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsPage;

const ImageContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",
  border: "4px solid transparent",
  borderRadius: "16px",
  transition: "transform 0.3s ease 0s",
  marginBottom: "10px",
  "&:hover": {
    border: "4px solid #218AFF",
    "& img": {
      transform: "scale(1.06)",
      transition: "transform 0.3s ease",
    },
  },
});

const StyledCard = styled(Box)({
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    "& .hoverText": {
      color: "#218AFF",
    },
    "& .imageContainer": {
      border: "4px solid #218AFF",
      "& img": {
        transform: "scale(1.2)",
        transition: "transform 0.3s ease",
      },
    },
  },
  "@media (max-width: 600px)": {},
});

const Styledtext = styled(Box)({
  "@media (max-width: 600px)": {
    width: "70%",
  },
});

const StyledImage = styled(Box)({
  borderRadius: "16px",
  width: "100%",
  transition: "transform 0.3s ease 0s",
  "@media (max-width: 600px)": {
    width: "103px",
    height: "103px",
    objectFit: "cover",
    marginBottom: "0",
  },
});

const StyledImages = styled(Box)({
  transition: "transform 0.3s ease 0s",
  borderRadius: "16px",
  width: "100%",
});

const StyledTitleTop = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "32px",
  fontWeight: "800",
  lineHeight: "1.25",
  marginBottom: "15px",
  color: "#fff",
  "@media (max-width: 600px)": {
    fontSize: "24px",
  },
});

const StyledTitle = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.5",
  marginBottom: "8px",
  color: "#fff",
  "@media (max-width: 600px)": {
    fontFamily: "Poppins",
    fontSize: "16px",
  },
});

const StyledDate = styled(Typography)({
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "1.5",
  color: "rgba(255, 255, 255, 0.6)",
});

const data = [
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
];

const data2 = [
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    date: "06.04.2024",
  },
  {
    img: girl,
    title: "Lorem ipsum dolor sit amet, csonsectetur adipiscing elit",
    date: "06.04.2024",
  },
];
