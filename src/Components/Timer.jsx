import { useState, useEffect, useRef } from "react";
import { soundsColor } from "./SoundButtons";
import ReactPlayer from "react-player";

const timers = [
  { time: 10, id: 1 },
  { time: 15, id: 2 },
  { time: 20, id: 3 },
];

function Button({ onClick, text, className }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

function Timer({ isPlaying, setIsPlaying, currentSound, setCurrentSound }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(10);
  const [isPaused, setIsPaused] = useState(false);
  const [start, setStart] = useState(true);

  // useEffect() {
  //   // timer function logic here
  // }

  function handleTime(time) {
    setMinutes(time);
  }

  function handleClickStart() {}

  function handleClickPause() {}

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
        <span className="text-white text-5xl">{minutes}:</span>
        <span className="text-white text-5xl">00</span>
      </div>
      <div className="relative flex justify-around p-4">
        <Button
          className="pause-start-button"
          text={
            start ? (
              <span className="material-symbols-outlined">play_circle</span>
            ) : (
              <span className="material-symbols-outlined">pause_circle</span>
            )
          }
          onClick={() => setStart(!start)}
        />

        {isPlaying && (
          <ReactPlayer
            className="absolute"
            url={currentSound}
            playing={isPlaying}
            volume={1}
            width={0}
            height={0}
          />
        )}
      </div>
    </div>
  );
}

export function Time() {
  return <Timer />;
}
