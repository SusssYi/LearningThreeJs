import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import React from "react";
import SphereGeometry from "../Geometries/SphereGeometry";

interface indexProps {}
const Index: React.FC<indexProps> = () => {
  return (
    <div className="relative h-screen w-screen">
      <Canvas>
        <Perf position="top-left" />
        <SphereGeometry />
      </Canvas>
    </div>
  );
};
export default Index;
