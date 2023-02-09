import type { MeshProps } from "@react-three/fiber";
import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: any;
    }
  }
}

extend({ OrbitControls });
interface SphereGeometryProps {}

const SphereGeometry: React.FC<SphereGeometryProps> = () => {
  const cubeRef = useRef<MeshProps | any>();
  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    if (cubeRef.current?.rotation) {
      cubeRef.current.rotation.y += delta;
    }
  });
  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
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
      </group>
      <mesh rotation-x={-Math.PI * 0.5} scale={10} position-y={-1}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
};
export default SphereGeometry;
