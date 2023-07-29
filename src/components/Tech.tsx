import React from "react";

import BallCanvas from "./canvas/Ball";
import { technologies } from "../assets/tech";

function Tech() {
  return (
    <>
      {technologies.map((tech) => (
        <div key={tech.name} className="ball-canvas">
          <BallCanvas imgUrl={tech.icon} />
          <h5 style={{ textAlign: "center", fontSize: "1rem" }}>{tech.name}</h5>
        </div>
      ))}
    </>
  );
}

export default Tech;
