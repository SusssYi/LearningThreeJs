import { useGLTF } from "@react-three/drei";
import type { MeshProps } from "@react-three/fiber";

const Fox = (props: MeshProps) => {
  const { scene } = useGLTF("/Fox/glTF/Fox.gltf");
  return (
    <>
      <primitive {...props} object={scene} />
    </>
  );
};
export default Fox;
useGLTF.preload("/Fox/glTF/Fox.gltf");
