import React, { useState } from "react";
import Fylo from "./Fylo";
import desktopBottomBg from "../images/bg-desktop.png";
import mobileBgImg from "../images/bg-mobile.png";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    return setWindowWidth(window.innerWidth);
  });
  return (
    <>
      <main>
        <Fylo />
        <img
          className="bg-pattern"
          src={windowWidth <= 425 ? mobileBgImg : desktopBottomBg}
          alt="Pattern in the background."
        />
      </main>
    </>
  );
};

export default App;
