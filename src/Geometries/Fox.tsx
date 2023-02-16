import { useAnimations, useGLTF } from "@react-three/drei";
import type { MeshProps } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect } from "react";
const Fox = (props: MeshProps) => {
  const fox = useGLTF("/Fox/glTF/Fox.gltf");
  const animations = useAnimations(fox.animations, fox.scene);
  const { animationName } = useControls("animations", {
    animationName: { options: ["Run", "Walk", "Survey"] },
  });

  useEffect(() => {
    const action = animations.actions[animationName];
    if (action) {
      //  add new animations fadeIn
      action.fadeIn(0.5).play();
    }

    return () => {
      // let old animations fadeOut
      action?.fadeOut(0.5);
    };
  }, [animationName]);

  return (
    <>
      <primitive {...props} object={fox.scene} />
    </>
  );
};
export default Fox;
useGLTF.preload("/Fox/glTF/Fox.gltf");
