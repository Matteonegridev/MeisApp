import PropTypes from "prop-types";
import { useState, useRef } from "react";
import ReactPlayer from "react-player";

function Buttons({ soundsColor }) {
  return (
    <>
      {soundsColor.map(({ id, name, color, description, sound }, index) => {
        <button
          id={`btn-${index}`}
          className="p-20 relative rounded-[10px] active:scale-[0.98] transition-all 150ms ease-in "
          key={id}
          name={name}
          color={{ backgroundColor: color }}
        >
          {description}
        </button>;
      })}
    </>
  );
}

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

  return <Buttons soundsColor={soundsColor} />;
}
