import { Canvas } from "@react-three/fiber";
import React from "react";
import { ACESFilmicToneMapping, sRGBEncoding } from "three";
import SphereGeometry from "../Geometries/SphereGeometry";

interface indexProps {}
const Index: React.FC<indexProps> = () => {
  return (
    <div className="relative h-screen w-screen">
      <Canvas
        // setting pixel ratio by forcedly
        dpr={1}
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          outputEncoding: sRGBEncoding,
        }}
        camera={{ position: [3, 2, 6], near: 0.1, far: 200, fov: 45 }}
      >
        <SphereGeometry />
      </Canvas>
    </div>
  );
};
export default Index;
