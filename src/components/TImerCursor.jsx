import React, { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const TimerCursor = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div className="bg-[#121212] text-white font-mono px-6 py-3 rounded-xl flex justify-between items-center w-full max-w-md mx-auto shadow-lg">
      {/* Timer */}
      <div className="text-center">
        <p className="text-2xl font-bold">{time}s</p>
        <p className="text-sm text-gray-400">Time</p>
      </div>

      {/* Cursor Toggle Button */}
      <button
        onClick={() => setCursorVisible(!cursorVisible)}
        className="bg-blue-500 px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
      >
        {cursorVisible ? <EyeIcon size={18} /> : <EyeOffIcon size={18} />}
      </button>
    </div>
  );
};

export default TimerCursor;
