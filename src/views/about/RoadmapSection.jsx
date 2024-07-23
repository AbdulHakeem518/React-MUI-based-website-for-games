import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import indicator from "../../assets/images/indicator.png";
import syndicator from "../../assets/images/syndicator.png";
import lightning from "../../assets/images/lightning.png";
import lastBorder from "../../assets/images/lastBorder.png";

export default function RoadmapSection() {
  const roadmapItems = [
    { date: "July, 2023", event: "Company founded" },
    { date: "Jan, 2024", event: "Explore UGC games on Fortnite & Roblox" },
    { date: "April, 2024", event: "Tower Defense Heroes" },
    { date: "July, 2024", event: "Mech Showdown enter Alpha" },
    { date: "December, 2024", event: "Mech Showdown Release" },
  ];

  return (
    <>
      <Box display={{ xs: "none", md: "block" }} justifyContent="center">
        <Box
          sx={{
            width: "100%",
            height: "auto",
            textAlign: "center",
            marginBottom: "30%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontFamily: "Orbitron",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Roadmap
          </Typography>

          {roadmapItems.map((item, index) => (
            <Box
              key={index}
              display="flex"
              sx={{
                gap: "40px",
                marginBottom: "20px",
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: { xs: "center", md: "flex" },
              }}
            >
              <Typography
                color={
                  item.event === "Mech Showdown enter Alpha"
                    ? "#FF4F17"
                    : "#fff"
                }
                fontFamily="Poppins"
                width="200px"
                position="relative"
                bottom="5px"
                sx={{
                  fontSize: {
                    xl: "16px",
                    sm: "15px",
                  },
                }}
                fontWeight="800"
                textAlign="end"
              >
                {item.date}
              </Typography>

              <Box position="relative">
                {index === roadmapItems.length - 1 ? (
                  <img
                    src={syndicator}
                    alt="syndicator"
                    className="syndicator"
                  />
                ) : (
                  <img
                    component="img"
                    src={
                      item.event === "Mech Showdown enter Alpha"
                        ? lightning
                        : indicator
                    }
                    alt="indicator"
                    width="48px"
                    sx={{ marginBottom: "20px" }}
                    className={
                      item.event === "Mech Showdown enter Alpha"
                        ? "lightningImg"
                        : ""
                    }
                  />
                )}

                {index === roadmapItems.length - 1 ? (
                  <img
                    src={lastBorder}
                    alt="lastBorder"
                    className="lastBorder"
                  />
                ) : (
                  <span className="indicator_border"></span>
                )}
              </Box>
              <Typography
                color={
                  item.event === "Mech Showdown enter Alpha"
                    ? "#FF4F17"
                    : "#fff"
                }
                fontFamily="Poppins"
                position="relative"
                bottom="5px"
                fontSize="24px"
                fontWeight="400"
                textAlign="start"
              >
                {item.event}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        display={{ xs: "block", md: "none" }}
        width={{ xs: "100%" }}
        marginTop={{ xs: "50%" }}
        p={{ xs: "0 25px 64px" }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: "32px",
              color: "#fff",
              fontFamily: "Orbitron",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Roadmap
          </Typography>

          {roadmapItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
              mb={{ xs: 2, md: "20px" }}
            >
              <Box position="relative">
                {index === roadmapItems.length - 1 ? (
                  <img
                    src={syndicator}
                    alt="syndicator"
                    className="syndicator"
                  />
                ) : (
                  <img
                    component="img"
                    src={
                      item.event === "Mech Showdown enter Alpha"
                        ? lightning
                        : indicator
                    }
                    alt="indicator"
                    width="48px"
                    sx={{ marginBottom: "20px" }}
                    className={
                      item.event === "Mech Showdown enter Alpha"
                        ? "lightningImg"
                        : ""
                    }
                  />
                )}

                {index === roadmapItems.length - 1 ? (
                  <img
                    src={lastBorder}
                    alt="lastBorder"
                    className="lastBorder"
                  />
                ) : (
                  <span className="indicator_border"></span>
                )}
              </Box>

              <Box>
                <Typography
                  color={
                    item.event === "Mech Showdown enter Alpha"
                      ? "#FF4F17"
                      : "#fff"
                  }
                  fontFamily="Poppins"
                  fontSize="16px"
                  fontWeight="800"
                  mb="8px"
                >
                  {item.date}
                </Typography>
                <Typography
                  color={
                    item.event === "Mech Showdown enter Alpha"
                      ? "#FF4F17"
                      : "#fff"
                  }
                  fontFamily="Poppins"
                  sx={{
                    fontSize: {
                      xl: "24px",
                      sm: "24px",
                      xs: "19px",
                    },
                  }}
                  fontWeight="400"
                >
                  {item.event}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
