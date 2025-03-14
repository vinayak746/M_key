import React, { useContext } from "react";
import { ResultContext } from "../App";
import { RotateCcwIcon } from "lucide-react";

const Result = () => {
  const { wpm, setWpm, accuracy, setAccuracy, setKeys } =
    useContext(ResultContext);

  return (
    <div className="bg-[#121212] text-white font-mono px-8 py-2 rounded-xl flex justify-between items-center w-full max-w-md mx-auto shadow-lg">
      {/* WPM Section */}
      <div className="text-center">
        <p className="text-xl font-bold">{wpm}</p>
        <p className="text-sm text-gray-400">WPM</p>
      </div>

      {/* Accuracy Section */}
      <div className="text-center">
        <p className="text-xl font-bold">{accuracy}%</p>
        <p className="text-sm text-gray-400">Accuracy</p>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          setKeys("");
          setWpm(0);
          setAccuracy(100);
        }}
        className="bg-red-500 px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-all"
      >
        <RotateCcwIcon size={18} />
      </button>
    </div>
  );
};

export default Result;
