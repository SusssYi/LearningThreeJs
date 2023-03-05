import { OrbitControls, Stage } from "@react-three/drei";
export default function Experience() {
  return (
    <Stage>
      <OrbitControls />
      <mesh scale={0.5} position={[-1, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color={"yellow"} />
      </mesh>
      <mesh scale={0.5} position={[1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh position={[0, -0.5, 0]} rotation={[-1.5, 0, 0]} scale={7}>
        <planeGeometry />
        <meshStandardMaterial color={"yellowgreen"} />
      </mesh>
    </Stage>
  );
}
