import { ContactShadows, OrbitControls, useHelper } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import type { DirectionalLight } from "three";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

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
  const model = useLoader(GLTFLoader, "/hamburger-draco.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("./draco/");
    loader.setDRACOLoader(dracoLoader);
  });
  console.log(model);

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
      />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"yellowgreen"} />
      </mesh>
      <primitive object={model.scene} scale={0.05} position-y={-0.99} />
    </>
  );
}
