import React from "react";
import Wave from "react-wavify";

function WaveTransition() {
  return (
    <div className="wave-transition">
        <Wave
          className="wave"
          style={{ zIndex: 1 }}
          fill="#ffffff"
          paused={false}
          options={{
            height: 10,
            amplitude: 20,
            speed: 0.25,
            points: 3,
          }}
        />
      <Wave
        className="wave"
        style={{ zIndex: 1 }}
        fill="#3f9dd0"
        paused={false}
        options={{
          height: 50,
          amplitude: 20,
          speed: 0.25,
          points: 3,
        }}
      />
    </div>
  );
}

export default WaveTransition;
