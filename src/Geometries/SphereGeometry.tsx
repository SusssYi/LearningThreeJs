import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import type { Mesh } from "three";

interface SphereGeometryProps {}

const SphereGeometry: React.FC<SphereGeometryProps> = () => {
  const cubeRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (cubeRef.current.rotation.y) {
      cubeRef.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} />
      <ambientLight />
      <group>
        <mesh rotation-y={1} position-x={2}>
          <sphereGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh
          rotation={[0, Math.PI * 0.28, 0]}
          position={[-2, 0, 0]}
          ref={cubeRef}
        >
          <boxGeometry />
          <meshStandardMaterial color="skyblue" />
        </mesh>
      </group>
      <mesh rotation-x={-Math.PI * 0.5} scale={10} position-y={-1}>
        <planeGeometry />
        <meshBasicMaterial color={"yellowgreen"} />
      </mesh>
    </>
  );
};
export default SphereGeometry;
