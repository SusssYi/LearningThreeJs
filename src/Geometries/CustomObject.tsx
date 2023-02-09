import React, { useEffect, useMemo, useRef } from "react";
import { DoubleSide } from "three";

interface CustomObjectProps {}
const CustomObject: React.FC<CustomObjectProps> = () => {
  const geometryRef = useRef();
  console.log(geometryRef);

  const verticesCount = 10 * 3;

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);
    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, [verticesCount]);

  useEffect(() => {
    if (geometryRef.current) {
      geometryRef.current.computeVertexNormals();
    }
  }, []);

  return (
    <mesh position={[0, 2, 0]}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach={"attributes-position"}
          count={verticesCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshBasicMaterial color={"red"} side={DoubleSide} />
    </mesh>
  );
};
export default CustomObject;
