"use client";
import React from "react";

import Section from "../../components/Section";
import AboutLandingSection from "../../views/about/LandingSection";
import RoadmapSection from "../../views/about/RoadmapSection";
import TeamSection from "../../views/about/TeamSection";
import JoinUs from "../../components/JoinUs";

import "../../styles/about.css";

export default function About() {
  return (
    <>
      <Section id="sectionAbout1" component={AboutLandingSection} />
      <Section id="sectionAbout2" className="h-auto" component={TeamSection} />
      <Section
        id="sectionAbout3"
        className="w-full h-auto"
        component={RoadmapSection}
      />
      <Section
        className="w-full h-auto"
        id="sectionAbout4"
        component={JoinUs}
      />
    </>
  );
}
