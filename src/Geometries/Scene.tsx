import {
  ContactShadows,
  OrbitControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, Debug, Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useRef, useState } from "react";
import { Euler, Quaternion } from "three";
export default function Experience() {
  const [hitSound, setHitSound] = useState(() => new Audio("/hit.mp3"));
  const boxRef = useRef<any>(null!);
  const TwisterRef = useRef<any>(null!);
  const { scene } = useGLTF("/model/hamburger.glb");
  console.log(hitSound);

  const cubeJump = () => {
    boxRef.current.applyImpulse({ x: 0, y: 5, z: 0 });
    boxRef.current.applyTorqueImpulse({
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
      z: Math.random() - 0.5,
    });
  };
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const eulerRotation = new Euler(0, time * 3, 0);
    const quaternionRotation = new Quaternion();
    quaternionRotation.setFromEuler(eulerRotation);
    TwisterRef.current.setNextKinematicRotation(quaternionRotation);

    const angle = time * 0.5;
    const x = Math.cos(angle) * 2;
    const z = Math.sin(angle) * 2;
    TwisterRef.current.setNextKinematicTranslation({ x: x, y: -1, z: z });
  });
  const collisionEnter = () => {
    console.log("enter");
  };
  return (
    <Stage>
      <OrbitControls />
      <Perf position={"top-left"} />
      <ContactShadows />

      <Physics gravity={[0, -9.08, 0]}>
        <Debug />
        <RigidBody colliders="ball">
          <mesh position={[-2, 4, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color={"yellow"} />
          </mesh>
        </RigidBody>
        <RigidBody
          ref={boxRef}
          gravityScale={1}
          restitution={1}
          colliders={false}
          onCollisionEnter={collisionEnter}
          onCollisionExit={() => {
            console.log(1);
          }}
        >
          <mesh
            scale={1}
            position={[2, 1, 0]}
            rotation={[Math.PI * 0.1, 0, 0]}
            onClick={cubeJump}
          >
            <CuboidCollider mass={1.25} args={[0.5, 0.5, 0.5]} />
            <boxGeometry />
            <meshStandardMaterial color={"mediumpurple"} />
          </mesh>
        </RigidBody>
        <RigidBody type="fixed">
          <mesh position={[0, -0.5, 0]} scale={1.5}>
            <boxGeometry args={[10, 0.5, 10]} />
            <meshStandardMaterial color={"yellowgreen"} />
          </mesh>
        </RigidBody>
        <RigidBody colliders={"trimesh"}>
          <primitive object={scene} scale={0.25} />
        </RigidBody>

        <RigidBody
          ref={TwisterRef}
          position={[0, 0, 0]}
          friction={0}
          type="kinematicPosition"
        >
          <mesh scale={[0.4, 0.4, 3]}>
            <boxGeometry />
            <meshStandardMaterial color={"red"} />
          </mesh>
        </RigidBody>
      </Physics>
    </Stage>
  );
}
