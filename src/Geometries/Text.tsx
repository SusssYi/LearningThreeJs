import { Center, OrbitControls, Text3D } from "@react-three/drei";
import { Perf } from "r3f-perf";
import React from "react";

interface TextProps {}
const Text: React.FC<TextProps> = () => {
  return (
    <>
      <Perf />
      <OrbitControls makeDefault />
      {/* <mesh scale={1.5}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}

      <Center>
        <Text3D font={"/Inter_Bold.json"}>
          1231
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
};
export default Text;
