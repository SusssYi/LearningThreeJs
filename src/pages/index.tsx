import { Canvas } from "@react-three/fiber";
import React from "react";
import Scene from "../Geometries/Scene";

interface indexProps {}
const Index: React.FC<indexProps> = () => {
  return (
    <div className="relative h-screen w-screen">
      <Canvas
        shadows={false}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
export default Index;
