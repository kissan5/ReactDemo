import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

function Button() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        //ternary operations in javascript:
        //think of it as a simple if conditional.
        backgroundColor: theme === "light" ? "white" : "black",
        color: "orange",
      }}
    >
      Click Here
    </div>
  );
}

export default Button;
