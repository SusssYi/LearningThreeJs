import React from "react";

interface PlaceHolderProps {}
const PlaceHolder: React.FC<PlaceHolderProps> = () => {
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial wireframe />
    </mesh>
  );
};
export default PlaceHolder;
