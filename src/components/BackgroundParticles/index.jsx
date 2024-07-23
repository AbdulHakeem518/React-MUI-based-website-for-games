import React from "react";

import particles from "../../assets/svgs/particles.svg";

import "./style.css";

const InfiniteParticlesAnimation = () => {
  return (
    <div className="particlesContainer">
      <div className="particles">
        <img className="particlesImg" src={particles} alt="Particles" />
      </div>

      <div className="particles">
        <img className="particlesImg" src={particles} alt="Particles" />
      </div>
    </div>
  );
};

export default InfiniteParticlesAnimation;
