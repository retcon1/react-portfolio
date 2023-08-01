import React from "react";
import Wave from "react-wavify";

interface WaveProps {
  color: string;
}

function WaveTransition({ color }: WaveProps) {
  return (
    <div className="wave-transition">
      <Wave
        className="wave"
        style={{ zIndex: 1 }}
        fill="#ffffff"
        paused={false}
        options={{
          height: 40,
          amplitude: 20,
          speed: 0.25,
          points: 3,
        }}
      />
      <Wave
        className="wave"
        style={{ zIndex: 1 }}
        fill={color}
        paused={false}
        options={{
          height: 70,
          amplitude: 20,
          speed: 0.25,
          points: 3,
        }}
      />
    </div>
  );
}

export default WaveTransition;
