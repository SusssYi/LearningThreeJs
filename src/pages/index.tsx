import { Canvas } from "@react-three/fiber";
import React from "react";
import SphereGeometry from "../Geometries/SphereGeometry";

interface indexProps {}
const Index: React.FC<indexProps> = () => {
  return (
    <div className="relative h-screen w-screen">
      <Canvas>
        <SphereGeometry />
      </Canvas>
    </div>
  );
};
export default Index;
