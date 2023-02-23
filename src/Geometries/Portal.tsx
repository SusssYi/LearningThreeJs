import {
  OrbitControls,
  shaderMaterial,
  Sparkles,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import type { Mesh } from "three";
import { Color } from "three";
import portalFragmentShaders from "../shaders/portal/fragment";
import portalVertexShaders from "../shaders/portal/vertex";

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new Color("#ffffff"),
    uColorEnd: new Color("#000000"),
  },
  portalVertexShaders,
  portalFragmentShaders
);
extend({ PortalMaterial });

interface PortalProps {}
const Portal: React.FC<PortalProps> = () => {
  const model = useGLTF("/model/portal.glb");
  const bakeTexture = useTexture("/model/baked.jpg");
  const portalRef = useRef<Mesh>(null!);
  useFrame((_, delta) => {
    portalRef.current.uTime += delta;
  });

  return (
    <>
      <color args={["black"]} attach="background" />
      <Sparkles size={6} scale={[4, 2, 4]} speed={0.2} />
      <OrbitControls />
      <mesh geometry={model.nodes.baked.geometry}>
        <meshBasicMaterial map={bakeTexture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={model.nodes.poleLightA.geometry}
        position={model.nodes.poleLightA.position}
      >
        <meshBasicMaterial color={"#ffffe5"} />
      </mesh>
      <mesh
        geometry={model.nodes.poleLightB.geometry}
        position={model.nodes.poleLightB.position}
      >
        <meshBasicMaterial color={"#ffffe5"} />
      </mesh>
      <mesh
        geometry={model.nodes.portalLight.geometry}
        position={model.nodes.portalLight.position}
        rotation={model.nodes.portalLight.rotation}
      >
        <portalMaterial ref={portalRef} />
      </mesh>
    </>
  );
};
export default Portal;
