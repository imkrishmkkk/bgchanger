import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState("white");
  const [resetButtonColor, setResetButtonColor] = useState("red");
  const handleButtonClick = (newColor) => {
    setcolor(newColor);
    if (newColor === "red") {
      setResetButtonColor("white");
    } else {
      setResetButtonColor("red");
    }
  };
  return (
    <div className="w-full h-screen  flex flex-col justify-center items-center" style={{ backgroundColor: color }}>
      <div className="button-container">
        <button
          onClick={() => handleButtonClick("white")}
          className="outline-none px-4 py-2 rounded-full text-black shadow-lg"
          style={{ backgroundColor: resetButtonColor }}
        >
          Reset
        </button>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
      rounded-3xl"
        >
          <button
            onClick={() => handleButtonClick("red")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => handleButtonClick("green")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => handleButtonClick("yellow")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => handleButtonClick("black")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => handleButtonClick("olive")}
            className="outline-none px-4 py-2 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
          <button
            onClick={() => handleButtonClick("pink")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
