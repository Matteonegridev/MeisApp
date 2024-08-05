import PropTypes from "prop-types";
import { useState, useRef } from "react";
import ReactPlayer from "react-player";

function Buttons({ soundsColor }) {
  const [alternativeText, setAlternativeText] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState(null);
  const playerRef = useRef(null);

  function handleSound(soundUrl) {
    if (currentSound && currentSound !== soundUrl) {
      playerRef.current.seekTo(0);
      setPlaying(false);
    }
    setCurrentSound(soundUrl);
    setPlaying(true);
  }

  return (
    <>
      {/* Destructuring per rilevare le properties dall'oggetto */}
      {soundsColor.map(({ name, color, description, sound, id }, index) => (
        <button
          id={`btn-${index}`}
          className="p-20 relative rounded-[10px] active:scale-[0.98] transition-all 150ms ease-in "
          style={{ backgroundColor: color }}
          key={id}
          onClick={() => {
            handleSound(sound);
            setAlternativeText(id);
          }}
        >
          <ReactPlayer
            ref={playerRef}
            url={currentSound}
            playing={playing && currentSound === sound}
            width="100%"
            height="100%"
          />
          <div className="absolute top-20 w-3/4 left-3 text-left">
            <p className="text-[#000] font-bold font-sourceSans">{name}</p>
            <small className="font-sourceSans text-secondSubtext font-light ">
              {alternativeText === id ? "Playing..." : description}
            </small>
          </div>
        </button>
      ))}
    </>
  );
}

Buttons.propTypes = {
  soundsColor: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      color: PropTypes.string,
      sound: PropTypes.string,
    })
  ),
};

export function SoundScapes() {
  const soundsColor = [
    {
      id: 0,
      name: "Suikinkutsu",
      color: "#daff6f",
      description: "Water Drip Resonance",
      sound: "./assets/Suikinkutsu.mp3",
    },
    {
      id: 1,
      name: "Cicadas",
      color: "#A8AEEF",
      description: "Insect Chorus",
      sound: "./assets/Cicadas.mp3",
    },
    {
      id: 2,
      name: "Temple Bells",
      color: "#A8AEEF",
      description: "Waterfall Roar",
      sound: "./assets/TempleBellSound.mp3",
    },
    {
      id: 3,
      name: "Shomyo Falls",
      color: "#daff6f",
      description: "Bell Resonance",
      sound: "./assets/Waterfall.mp3",
    },
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 p-6 mt-8">
      <Buttons soundsColor={soundsColor} />
    </div>
  );
}
