import { useTheme } from "next-themes";
import React from "react";

interface indexProps {}
const Index: React.FC<indexProps> = (props) => {
  const { theme, setTheme } = useTheme();
  console.log(props);

  return (
    <div>
      <h1
        className="text-3xl text-pink-500"
        style={{ backgroundColor: "teal" }}
      >
        Welcome to Your App
      </h1>
      <button
        onClick={() => {
          setTheme(theme == "dark" ? "light" : "dark");
        }}
      >
        toggle
      </button>
    </div>
  );
};
export default Index;
