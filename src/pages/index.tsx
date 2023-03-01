import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import SceneComponents from "../Geometries/Scene";

const Loader = () => {
  const { progress } = useProgress();
  console.log(progress);

  return <Html>curren Progress : {progress}%</Html>;
};
const Index = () => {
  return (
    <div className="relative h-screen w-screen">
      <Canvas
        shadows={false}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<Loader />}>
          <SceneComponents />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Index;
