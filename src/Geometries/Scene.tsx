import {
  ContactShadows,
  OrbitControls,
  Stage,
  useHelper,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense, useRef } from "react";
import type { DirectionalLight } from "three";
import * as THREE from "three";
import Fox from "./Fox";
import PlaceHolder from "./PlaceHolder";

// softShadows({
//   frustum: 3.75,
//   size: 0.005,
//   near: 9.5,
//   samples: 17,
//   rings: 11,
// });

export default function Experience() {
  const directionalLight = useRef<DirectionalLight>(null!);
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  useFrame((state, delta) => {});

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <ContactShadows position-y={-0.99} />
      <directionalLight
        ref={directionalLight}
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"yellowgreen"} />
      </mesh>
      <Stage>
        <Suspense fallback={<PlaceHolder />}>
          <Fox scale={1} />
        </Suspense>
      </Stage>
    </>
  );
}
