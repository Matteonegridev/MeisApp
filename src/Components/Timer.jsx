import { useState } from "react";

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);

  return (
    <div className="flex justify-center items-center flex-col mt-2 font-sourceSans">
      <h2 className="text-white text-5xl font-bold p-1">Timer</h2>
      <div>
        <span className="text-white text-4xl">{minutes}:</span>
        <span className="text-white text-4xl">{seconds}</span>
      </div>
    </div>
  );
}
