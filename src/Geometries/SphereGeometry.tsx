import { OrbitControls, softShadows, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import type { DirectionalLight, Mesh } from "three";
import * as THREE from "three";

softShadows({
  frustum: 3.75,
  size: 0.005,
  near: 9.5,
  samples: 17,
  rings: 11,
});

export default function Experience() {
  const cube = useRef<Mesh>(null!);
  const directionalLight = useRef<DirectionalLight>(null!);
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  useFrame((state, delta) => {
    // const time = state.clock.elapsedTime
    // cube.current.position.x = 2 + Math.sin(time)
    cube.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      <color args={["ivory"]} attach="background" />

      {/* <BakeShadows /> */}

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        ref={directionalLight}
        position={[1, 2, 3]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      <ambientLight intensity={0.5} />

      <mesh castShadow position-y={1} position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow ref={cube} position-y={1} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh receiveShadow position-y={0} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
