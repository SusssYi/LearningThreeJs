import React from "react";
import DrunkEffect from "../utils/DrunkEffect";

interface DrunkProps {}
const Drunk: React.FC<DrunkProps> = () => {
  const effect = new DrunkEffect();
  return <primitive object={effect} />;
};
export default Drunk;
