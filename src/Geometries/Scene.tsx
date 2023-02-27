import {
  ContactShadows,
  OrbitControls,
  Stage,
  useHelper,
} from "@react-three/drei";
import type { ThreeEvent } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import type { DirectionalLight, Mesh } from "three";
import * as THREE from "three";

export default function Experience() {
  const directionalLight = useRef<DirectionalLight>(null!);
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);
  const boxRef = useRef<Mesh>(null!);

  const handleOnClick = (e: ThreeEvent<MouseEvent>) => {
    boxRef.current.material.color.set(`hsl(${Math.random() * 360},100%,75%)`);
  };
  useFrame((state, delta) => {
    if (boxRef.current.rotation) {
      boxRef.current.rotation.y += delta;
    }
  });

  return (
    <Stage shadows={false}>
      <Perf position="top-left" />
      <ContactShadows />
      <OrbitControls makeDefault />
      <directionalLight
        ref={directionalLight}
        position={[1, 2, 3]}
        intensity={1.5}
      />

      <mesh ref={boxRef} position-x={1} onClick={handleOnClick}>
        <boxGeometry />
        <meshStandardMaterial color={"green"} />
      </mesh>
      <mesh
        position-x={-1}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <sphereGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"yellowgreen"} />
      </mesh>
    </Stage>
  );
}
