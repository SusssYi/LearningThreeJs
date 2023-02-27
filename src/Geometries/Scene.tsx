import { ContactShadows, OrbitControls, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, SSR } from "@react-three/postprocessing";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import type { DirectionalLight, Mesh } from "three";
import * as THREE from "three";
export default function Experience() {
  const directionalLight = useRef<DirectionalLight>(null!);
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);
  const boxRef = useRef<Mesh>(null!);
  const ssrProps = useControls({
    temporalResolve: true,
    STRETCH_MISSED_RAYS: true,
    USE_MRT: true,
    USE_NORMALMAP: true,
    USE_ROUGHNESSMAP: true,
    ENABLE_JITTERING: true,
    ENABLE_BLUR: true,
    temporalResolveMix: { value: 0.9, min: 0, max: 1 },
    temporalResolveCorrectionMix: { value: 0.25, min: 0, max: 1 },
    maxSamples: { value: 0, min: 0, max: 1 },
    resolutionScale: { value: 1, min: 0, max: 1 },
    blurMix: { value: 0.5, min: 0, max: 1 },
    blurKernelSize: { value: 8, min: 0, max: 8 },
    blurSharpness: { value: 0.5, min: 0, max: 1 },
    rayStep: { value: 0.3, min: 0, max: 1 },
    intensity: { value: 1, min: 0, max: 5 },
    maxRoughness: { value: 0.1, min: 0, max: 1 },
    jitter: { value: 0.7, min: 0, max: 5 },
    jitterSpread: { value: 0.45, min: 0, max: 1 },
    jitterRough: { value: 0.1, min: 0, max: 1 },
    roughnessFadeOut: { value: 1, min: 0, max: 1 },
    rayFadeOut: { value: 0, min: 0, max: 1 },
    MAX_STEPS: { value: 20, min: 0, max: 20 },
    NUM_BINARY_SEARCH_STEPS: { value: 5, min: 0, max: 10 },
    maxDepthDifference: { value: 3, min: 0, max: 10 },
    maxDepth: { value: 1, min: 0, max: 1 },
    thickness: { value: 10, min: 0, max: 10 },
    ior: { value: 1.45, min: 0, max: 2 },
  });

  useFrame((state, delta) => {
    if (boxRef.current.rotation) {
      boxRef.current.rotation.y += delta;
    }
  });

  return (
    <>
      <color args={["black"]} />
      <EffectComposer>
        {/* 1.昏影 */}
        {/* <Vignette
          darkness={0.9}
          offset={0.5}
          blendFunction={BlendFunction.COLOR_BURN}
        /> */}
        {/* 2.屏幕闪烁像是被黑客攻击 */}
        {/* <Glitch mode={GlitchMode.SPORADIC} /> */}
        {/* 3.杂色 */}
        {/* <Noise blendFunction={BlendFunction.SOFT_LIGHT} /> */}
        {/* 4.模糊效果 */}
        {/* <Bloom mipmapBlur />
         */}
        <SSR {...ssrProps} />
      </EffectComposer>
      <Perf position="top-left" />

      <ContactShadows />
      <OrbitControls makeDefault />
      <directionalLight
        ref={directionalLight}
        position={[1, 2, 3]}
        intensity={1.5}
      />

      <mesh ref={boxRef} position-x={1}>
        <boxGeometry />
        <meshStandardMaterial color={[5, 2, 1]} toneMapped={false} />
      </mesh>
      <mesh position-x={-1}>
        <sphereGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"yellowgreen"} />
      </mesh>
    </>
  );
}
