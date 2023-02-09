import { OrbitControls, TransformControls } from "@react-three/drei";
import React, { useRef } from "react";
import type { Mesh } from "three";

interface SphereGeometryProps {}

const SphereGeometry: React.FC<SphereGeometryProps> = () => {
  const cubeRef = useRef<Mesh>(null!);

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} />
      <ambientLight />
      <group>
        <mesh position-x={-2.0} rotation-y={1}>
          <sphereGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh ref={cubeRef} rotation={[0, Math.PI * 0.28, 0]} position-x={2}>
          <boxGeometry />
          <meshStandardMaterial color="skyblue" />
        </mesh>
        <TransformControls object={cubeRef} />
      </group>
      <mesh rotation-x={-Math.PI * 0.5} scale={10} position-y={-1}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default SphereGeometry;
