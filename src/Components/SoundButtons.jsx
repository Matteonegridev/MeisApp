import { useState, useRef } from "react";

export const soundsColor = [
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

function Buttons({ text, setText }) {
  const [isSelected, setIsSelected] = useState(null);

  let buttonClassName =
    "p-20 relative rounded-[10px] transition-all 150ms ease-in";

  function handleButtonId(id) {
    setIsSelected(id);
    setText(id);
  }

  return (
    <>
      {soundsColor.map(({ id, name, color, description }, index) => (
        <button
          id={`btn-${index}`}
          className={
            isSelected === id
              ? `${buttonClassName} +  scale-[0.95]`
              : buttonClassName
          }
          key={id}
          name={name}
          style={{ backgroundColor: color }}
          onClick={() => handleButtonId(id)}
        >
          {isSelected === id ? (
            <div className="box p-3">✔️</div>
          ) : (
            <div className="box p-6"></div>
          )}
          <div className="absolute top-20 w-3/4 left-3 text-left ">
            <p className="text-[#000] font-bold font-sourceSans">{name}</p>
            <small className="font-sourceSans text-secondSubtext font-light">
              {text === id ? "Selected Sound" : description}
            </small>
          </div>
        </button>
      ))}
    </>
  );
}

export function SoundScapes({ text, setText }) {
  return (
    <div className="grid grid-cols-2 gap-2 mt-[0.5rem] p-3">
      <Buttons text={text} setText={setText} />
    </div>
  );
}
