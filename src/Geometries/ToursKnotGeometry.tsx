import React from "react";

interface ToursKnotGeometryProps {}
const ToursKnotGeometry: React.FC<ToursKnotGeometryProps> = () => {
  return (
    <mesh>
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};
export default ToursKnotGeometry;
