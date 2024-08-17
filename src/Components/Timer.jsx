import { useState, useEffect } from "react";
import { SoundScapes } from "./SoundButtons";
import ReactPlayer from "react-player";

const timers = [
  { time: 10, id: 1 },
  { time: 15, id: 2 },
  { time: 20, id: 3 },
];

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(10);

  function handleTime(time) {
    setMinutes(time);
  }

  return (
    <div className="mt-2 font-sourceSans">
      <h2 className="text-white text-2xl font-semibold p-1 text-center">
        How long you want to relax for?
      </h2>
      <div className="p-3 flex justify-around">
        {timers.map(({ time, id }) => {
          return (
            <button
              onClick={() => handleTime(time)}
              className="bg-primary text-black px-7 py-1 font-sourceSans font-bold rounded-md text-2xl"
              key={id}
            >
              {time}
            </button>
          );
        })}
      </div>
      <div className="mt-3 text-center font-semibold">
        <span className="text-white text-4xl">{minutes}:</span>
        <span className="text-white text-4xl">00</span>
      </div>
    </div>
  );
}

export function Time() {
  return <Timer />;
}
