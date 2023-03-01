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
      {/* create environment light  */}
      <Environment preset="city" />
      <color args={["#695b5b"]} attach={"background"} />

      {/* limiting user camera control */}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        {/* Making laptop float on the screen */}
        <Float rotationIntensity={0.4}>
          {/* imitate laptop screen light */}
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          {/* main object */}
          <primitive object={computer.scene} position-y={-1.2}>
            {/*  iframe embedded with position adjustment*/}
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
          {/* side text */}
          <Text position-x={3} position-z={-1} children={"SOME\rTImes"}></Text>
        </Float>
      </PresentationControls>
    </Stage>
  );
}
