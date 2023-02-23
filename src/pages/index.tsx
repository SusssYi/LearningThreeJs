import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Portal from "../Geometries/Portal";
const Index = () => {
  return (
    <div className="relative h-screen w-screen">
      <Canvas
        flat
        shadows={false}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Center>
          <Portal />
        </Center>
      </Canvas>
    </div>
  );
};
export default Index;
