import {
  ContactShadows,
  Environment,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import type { DirectionalLight, Mesh } from "three";
import * as THREE from "three";
import { Color } from "three";

// softShadows({
//   frustum: 3.75,
//   size: 0.005,
//   near: 9.5,
//   samples: 17,
//   rings: 11,
// });

export default function Experience() {
  const cube = useRef<Mesh>(null!);
  const directionalLight = useRef<DirectionalLight>(null!);
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);
  const { color, blur, opacity } = useControls("contact shadow", {
    color: "#000000",
    opacity: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.001,
    },
    blur: {
      value: 1,
      min: 0,
      max: 10,
      step: 0.01,
    },
  });
  const { sunPosition } = useControls("sky", {
    sunPosition: {
      value: [1, 2, 3],
    },
  });

  useFrame((state, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      <Environment
        files={[
          "/environmentMaps/2/px.jpg",
          "/environmentMaps/2/nx.jpg",
          "/environmentMaps/2/py.jpg",
          "/environmentMaps/2/ny.jpg",
          "/environmentMaps/2/pz.jpg",
          "/environmentMaps/2/nz.jpg",
        ]}
      />
      <color args={["ivory"]} attach="background" />
      {/* <Sky sunPosition={sunPosition} /> */}

      <Perf position="top-left" />
      {/* <BakeShadows /> */}

      <OrbitControls makeDefault />

      {/* AccumulativeShadows */}
      {/* <AccumulativeShadows
        position={[0, 0.01, 0]}
        scale={10}
        color="#31639"
        opacity={0.8}
        frames={Infinity}
        blend={1000}
      >
        <RandomizedLight
          position={[1, 2, 3]}
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={0.5}
          bias={0.001}
        />
      </AccumulativeShadows> */}
      <ContactShadows
        position={[0, 0, 0]}
        resolution={1024}
        far={5}
        color={new Color(color)}
        opacity={opacity}
        blur={blur}
      />
      {/* <directionalLight
        ref={directionalLight}
        position={[sunPosition[0], 2, sunPosition[2]]}
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
      <ambientLight intensity={0.5} /> */}

      <mesh castShadow position-y={1} position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow ref={cube} position-y={1} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-0.02} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
