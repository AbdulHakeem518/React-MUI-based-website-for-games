import React from "react";

import { Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ceo from "../../assets/images/ceo.png";
import ux from "../../assets/images/ux.png";

const TeamSectionContainer = styled(Box)(({ theme }) => ({
  marginTop: "50px",
  marginBottom: "25%",
  textAlign: "center",
}));

const TeamTitle = styled(Typography)(({ theme }) => ({
  color: "#ffffff",
  fontFamily: "Orbitron",
  fontWeight: "800",
  fontSize: "48px",
  marginBottom: "64px",
  lineHeight: "1.25",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px !important",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "32px !important",
  },
}));

const MemberBox = styled(Box)(({ theme }) => ({
  width: "370px",
  textAlign: "center",
  padding: "20px",
  borderRadius: "10px",
  gap: "24px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    display: "flex",
    padding: "0px",
    marginBottom: "24px",
    textAlign: "left",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    padding: "0px",
    marginBottom: "24px",
    textAlign: "left",
  },
}));

const MemberImage = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  width: "196px",
  [theme.breakpoints.down("md")]: {
    width: "103px",
    height: "120px",
    marginRight: "15px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "30%",
    height: "30%",
    marginRight: "5px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "30%",
    height: "30%",
    marginRight: "5px",
  },
}));

const MemberDetails = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

const MemberName = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "24px",
  marginBottom: "10px",
  [theme.breakpoints.down("md")]: {
    lineHeight: "1.5",
    fontSize: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    lineHeight: "1.5",
    fontSize: "24px",
  },
  [theme.breakpoints.down("xl")]: {
    fontSize: "20px",
  },
}));

const MemberRole = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  marginBottom: "16px",
}));

const MemberDescription = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
  fontWeight: "400",
  color: "rgba(255,255,255, 0.9)",
  lineHeight: "1.5",
}));

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Deepak Chandrasekaran",
      role: "CEO & Founder",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique leo et nibh egestas porttitor.",
      image: ceo,
    },
    {
      name: "Viktor Zheng",
      role: "UX architect",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique leo et nibh egestas porttitor.",
      image: ux,
    },
    // {
    //   name: "Deepak Chandrasekaran",
    //   role: "CEO & Founder",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique leo et nibh egestas porttitor.",
    //   image: ceo,
    // },
  ];

  return (
    <TeamSectionContainer className="team_section">
      <TeamTitle variant="h3">Our Team</TeamTitle>

      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <MemberBox>
              <MemberImage
                component="img"
                src={member.image}
                alt={member.name}
              />

              <MemberDetails
                sx={{
                  width: { xl: "100%", sm: "60%", xs: "63%" },
                }}
              >
                <MemberName variant="h3">{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
                {/* <MemberDescription>{member.description}</MemberDescription> */}
              </MemberDetails>
            </MemberBox>
          </Grid>
        ))}
      </Grid>
    </TeamSectionContainer>
  );
}
