"use client"; // if you're using app directory in Next.js 13+

import { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isOn}
          onChange={() => setIsOn(!isOn)}
        />
        <div
          className={`w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors duration-300`}
        ></div>
        <div
          className={`absolute left-1 top-1 bg-white w-3 h-3 rounded-full shadow-md transition-transform duration-300 transform
          ${isOn ? "translate-x-5" : "translate-x-0"}`}
        ></div>
      </label>
  );
}
