import {
  Environment,
  Float,
  Html,
  PresentationControls,
  Stage,
  Text,
  useGLTF,
} from "@react-three/drei";
export default function Experience() {
  const computer = useGLTF("/model/model.gltf");
  return (
    <Stage>
      <Environment preset="city" />
      <color args={["#695b5b"]} attach={"background"} />

      {/* Making laptop float on the screen */}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              distanceFactor={1.17}
              wrapperClass="htmlScreen"
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://bruno-simon.com/html/" />
            </Html>
          </primitive>
          <Text position-x={3} position-z={-1} children={"SOME\rTImes"}></Text>
        </Float>
      </PresentationControls>
    </Stage>
  );
}
