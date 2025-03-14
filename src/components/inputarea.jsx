import React from "react";
const sampleText =
  "Video killed the radio star. In my mind and in my car, we can't rewind, we've gone too far. Pictures came and broke your heart.";

const Inputarea = () => {
  return (
    <div className="rounded-2xl bg-stone-950 px-6 text-justify py-8 flex justify-center items-center">
      <p className="mb-4 font-mono text-gray-200">
        {/* {sampleText.split("").map((char, index) => {
          let color = "text-white"; // Default color
          if (index < keys.length) {
            color = keys[index] === char ? "text-green-400" : "text-red-400"; // Green for correct, Red for incorrect
          }
          return (
            <span key={index} className={color}>
              {char}
            </span>
          );
        })} */}
        {sampleText}
      </p>
    </div>
  );
};

export default Inputarea;
