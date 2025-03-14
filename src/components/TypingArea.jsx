import { RotateCcwIcon } from "lucide-react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ResultContext } from "../App";

const sampleText = "The quick brown fox jumps over the lazy dog.";

const TypingArea = (props) => {
  const [timer, setTimer] = useState(null);

  const { setWpm, wpm, accuracy, setAccuracy, setKeys, keys } =
    useContext(ResultContext);

  useEffect(() => {
    if (keys.length === 1 && !timer) {
      setTimer(Date.now());
    }
    if (keys.length === 0) {
      setTimer(null);
      setWpm(0);
      setAccuracy(100);
    }
  }, [keys]);

  useEffect(() => {
    if (!timer || keys.length === 0) return;
    const interval = setInterval(() => {
      const timeElapsed = (Date.now() - timer) / 1000 / 60;
      const wordsTyped = keys.length / 5;
      if (timeElapsed > 0) {
        setWpm((wordsTyped / timeElapsed).toFixed(2));
      }
      if (keys.length === sampleText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [keys, timer]);

  useEffect(() => {
    calculateAccuracy();
  }, [keys]);

  const calculateAccuracy = () => {
    let correctCount = 0;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === sampleText[i]) {
        correctCount++;
      }
    }
    setAccuracy(
      keys.length > 0 ? ((correctCount / keys.length) * 100).toFixed(2) : 100
    );
  };

  return (
    <div className="bg-black text-white p-6 rounded-xl mt-6  max-w-md">
      {/* Typing Box */}
      <div className="relative border border-gray-600 p-4 rounded-lg">
        {/* Display Sample Text with Highlighting & Cursor */}
        <p className="text-lg font-mono w-full">
          {sampleText.split("").map((char, index) => {
            let color = "text-gray-400"; // Default color
            if (index < keys.length) {
              color = keys[index] === char ? "text-green-400" : "text-red-400";
            }

            return (
              <span
                key={index}
                className={`${color} transition-all duration-75`}
              >
                {char}
              </span>
            );
          })}
          {/* Dynamic Cursor at the Current Typing Position */}
          {/* {keys.length < sampleText.length && (
            <span className="animate-blink text-blue-400">|</span>
          )} */}
        </p>

        {/* Visible Input with Transparent Text but Active Caret */}
        <input
          autoFocus
          onChange={(e) => setKeys(e.target.value)}
          type="text"
          value={keys}
          className="absolute top-0 left-0 w-full h-full opacity-0"
        />
      </div>

      {/* WPM & Accuracy */}

      {/* Reset Button */}
    </div>
  );
};

export default TypingArea;
