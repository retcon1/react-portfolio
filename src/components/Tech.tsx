import React from "react";
import BoxCanvas from "./canvas/Box";
import { technologies } from "../assets/tech";
import { isMobile } from "react-device-detect";

function Tech() {
  if (isMobile)
    return (
      <ul className="tech-container">
        {technologies.map((tech) => (
          <li key={tech.name}>
            <div className="tech-card">
              <img src={tech.icon} alt={tech.name} loading="lazy" />
              <h5>{tech.name}</h5>
            </div>
          </li>
        ))}
      </ul>
    );

  return (
    <ul className="tech-container">
      {technologies.map((tech) => (
        <li key={tech.name} className="box-canvas">
          <BoxCanvas imgUrl={tech.icon} />
          <h5 style={{ textAlign: "center", fontSize: "1rem" }}>{tech.name}</h5>
        </li>
      ))}
    </ul>
  );
}

export default Tech;
