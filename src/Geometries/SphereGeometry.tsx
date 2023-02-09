import {
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PivotControls,
  Text3D,
} from "@react-three/drei";
import React, { useRef } from "react";
import type { Mesh } from "three";

interface SphereGeometryProps {}

const SphereGeometry: React.FC<SphereGeometryProps> = () => {
  const cubeRef = useRef<Mesh>(null!);
  const sphereRef = useRef<Mesh>(null!);
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} />
      <ambientLight />
      <group>
        <PivotControls anchor={[0, 0, 0]} depthTest={false}>
          <mesh position-x={-2.0} rotation-y={1} ref={sphereRef}>
            <sphereGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </PivotControls>
        <mesh ref={cubeRef} rotation={[0, Math.PI * 0.28, 0]} position-x={2}>
          <boxGeometry />
          <meshStandardMaterial color="skyblue" />
          <Html
            // ADD class
            wrapperClass="label"
            // 总是围绕着object 中心点
            center
            distanceFactor={6}
            // 位置
            position={[1, 1, 0]}
            // 当在数组中的元素互相交叠的时候将html 元素隐藏
            occlude={[cubeRef, sphereRef]}
          >
            Text
          </Html>
        </mesh>
      </group>
      <mesh rotation-x={-Math.PI * 0.5} scale={10} position-y={-1}>
        <planeGeometry />
        <MeshReflectorMaterial
          mirror={0.5}
          resolution={1024}
          blur={[1000, 1000]}
          mixBlur={1}
        />
      </mesh>
      <Text3D
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={1.5}
        font={"/Inter_Bold.json"}
        position={[0, 2, 0]}
      >
        asjdoiajdsio
        <meshNormalMaterial />
      </Text3D>
    </>
  );
};
export default SphereGeometry;
