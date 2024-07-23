import React from "react";

function Section({ id, sectionClass = "", component: Component, ...rest }) {
  return (
    <div id={id} className={`${sectionClass} section`}>
      <Component {...rest} />
    </div>
  );
}

export default Section;
