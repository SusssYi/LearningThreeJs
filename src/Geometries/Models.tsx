import { Clone, useGLTF } from "@react-three/drei";
import React from "react";
import { Hamburger } from "./hamburget";

interface ModelsProps {}
const Models: React.FC<ModelsProps> = () => {
  const model = useGLTF("hamburger-draco.glb");

  return (
    <>
      <Hamburger
        object={model.scene}
        scale={0.05}
        position-y={-0.99}
        position-x={0.99}
      />
      <Clone
        object={model.scene}
        scale={0.05}
        position-y={-0.99}
        position-x={1.99}
      />
      <Clone
        object={model.scene}
        scale={0.05}
        position-y={-0.99}
        position-x={2.99}
      />
    </>
  );
};
export default Models;
useGLTF.preload("hamburger-draco.glb");
