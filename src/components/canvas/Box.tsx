import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

interface BoxProps {
  imgUrl: string;
}

const Box = ({ imgUrl }: BoxProps) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.9} color="#ff8159" />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={3}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={5}
          flatShading
        />
        <Decal
          position={[0, 0, 0.99]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};

const BoxCanvas = ({ imgUrl }: BoxProps) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Box imgUrl={imgUrl} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BoxCanvas;
