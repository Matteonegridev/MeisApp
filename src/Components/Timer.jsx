import { useState, useEffect } from "react";
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

function Timer({
  isPlaying,
  setIsPlaying,
  currentSound,
  setCurrentSound,
  selectedSound,
  isRunning,
  setIsRunning,
}) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(timers[0].time);
  const [toggleStart, setToggleStart] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning && selectedSound !== null) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            setIsPlaying(false);
            setIsRunning(false);
          } else {
            setMinutes((m) => m - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((s) => s - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds, selectedSound]);

  useEffect(() => {
    if (isRunning && selectedSound !== null) {
      setIsPlaying(true);
      setCurrentSound(soundsColor[selectedSound].sound);
    } else {
      setIsPlaying(false);
    }
  }, [selectedSound, isRunning]);

  function startTimer() {
    setIsRunning(!isRunning);
  }

  function handleTime(time) {
    setMinutes(time);
  }

  function stopTimer() {
    if (!isRunning) {
      setMinutes(timers[0].time);
      setSeconds(0);
    }
    return;
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
              disabled={isRunning}
              onClick={() => {
                handleTime(time);
              }}
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
        <span className="text-white text-5xl">
          {seconds < 10 ? "0" + seconds : seconds}
        </span>
      </div>
      <div className="relative flex justify-around p-4">
        <Button
          className="pause-start-button"
          text={
            toggleStart ? (
              <span className="material-symbols-outlined">play_circle</span>
            ) : (
              <span className="material-symbols-outlined">pause_circle</span>
            )
          }
          onClick={() => {
            setToggleStart(!toggleStart);
            startTimer();
          }}
        />
        <Button
          className="pause-start-button"
          text={<span className="material-symbols-outlined">stop_circle</span>}
          onClick={stopTimer}
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

export function Time({
  isPlaying,
  setIsPlaying,
  currentSound,
  setCurrentSound,
  selectedSound,
  setSelectedSound,
  isRunning,
  setIsRunning,
}) {
  return (
    <Timer
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSound={currentSound}
      setCurrentSound={setCurrentSound}
      selectedSound={selectedSound}
      setSelectedSound={setSelectedSound}
      isRunning={isRunning}
      setIsRunning={setIsRunning}
    />
  );
}
