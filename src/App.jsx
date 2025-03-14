import React, { createContext, useState } from "react";
import Inputarea from "./components/inputarea";
import TypingArea from "./components/TypingArea";
import Result from "./components/result";
import TimerCursor from "./components/TImerCursor";

export const ResultContext = createContext();

function App() {
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [keys, setKeys] = useState("");

  return (
    <ResultContext.Provider
      value={{
        wpm,
        setWpm,
        accuracy,
        setAccuracy,
        keys,
        setKeys,
      }}
    >
      {/* <div className="bg-[#A2A0B0] w-full min-h-screen flex flex-col items-center justify-center p-8">
       
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex gap-2 p-4">
            <button className="bg-black text-white p-4 rounded-lg">❤</button>
            <button className="bg-black text-white p-4 rounded-lg">☰</button>
            <button className="bg-black text-white p-4  rounded-lg">U</button>
            <button className="bg-black text-white p-4 rounded-lg">🌙</button>
          </div>
          
        </div> */}

      {/* Typing Box */}
      {/* <Inputarea /> */}

      {/* Typing Stats and Controls */}
      <div className="justify-center w-full min-h-screen flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg">
        <Result />
        {/* <Inputarea /> */}
        <TypingArea />
        {/* <TimerCursor /> */}
      </div>
    </ResultContext.Provider>
  );
}

export default App;
