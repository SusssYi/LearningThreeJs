import { Center, Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Drunk from "../Geometries/Drunk";

const Loader = () => {
  const { progress } = useProgress();
  console.log(progress);

  return <Html>curren Progress : {progress}%</Html>;
};
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
          <Suspense fallback={<Loader />}>
            <Drunk />
          </Suspense>
        </Center>
      </Canvas>
    </div>
  );
};
export default Index;
