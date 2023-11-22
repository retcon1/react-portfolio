import React from "react";

import BoxCanvas from "./canvas/Box";
import { technologies } from "../assets/tech";

function Tech() {
  return (
    <ul>
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
