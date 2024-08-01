const soundsColor = [
  {
    name: "Suikinkutsu",
    color: "#daff6f",
    description: "Water Drip Resonance",
    sound: new Audio("assets/Suikinkutsu.mp3"),
  },
  {
    name: "Cicadas",
    color: "#A8AEEF",
    description: "Insect Chorus",
    sound: new Audio("./assets/Cicadas.mp3"),
  },
  {
    name: "Temple Bells",
    color: "#A8AEEF",
    description: "Waterfall Roar",
    sound: new Audio("./assets/TempleBellSound.mp3"),
  },
  {
    name: "Shomyo Falls",
    color: "#daff6f",
    description: "Bell Resonance",
    sound: new Audio("./assets/Waterfall.mp3"),
  },
];
function playSound(soundUrl) {
  soundUrl.play();
  console.log("Playing sound:", soundUrl);
}

function Buttons() {
  return (
    <>
      {/* Destructuring per rilevare le properties dall'oggetto */}
      {soundsColor.map(({ name, color, description, sound }, index) => (
        <button
          id={`btn-${index}`}
          className="p-20 relative rounded-[10px] active:scale-[0.98] transition-all 150ms ease-in "
          style={{ backgroundColor: color }}
          key={index}
          onClick={() => playSound(sound)}
        >
          <audio id={name} className="sound">
            <source src={sound} type="audio/mp3"></source>
          </audio>
          <div className="absolute top-20 w-3/4 left-3 text-left">
            <p className="text-[#000] font-bold font-sourceSans">{name}</p>
            <small className="font-sourceSans text-secondSubtext font-light ">
              {description}
            </small>
          </div>
        </button>
      ))}
    </>
  );
}

export function SoundScapes() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3 p-6 mt-8">
      <Buttons />
    </div>
  );
}
