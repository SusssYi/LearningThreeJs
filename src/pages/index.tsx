import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import React from "react";
import SphereGeometry from "../Geometries/SphereGeometry";

interface indexProps {}
const Index: React.FC<indexProps> = () => {
  return (
    <div className="relative h-screen w-screen">
      <Canvas
        shadows={true}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Perf position="top-left" />
        <SphereGeometry />
      </Canvas>
    </div>
  );
};
export default Index;
