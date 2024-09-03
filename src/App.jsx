import { useState } from "react";
import { SoundScapes } from "./Components/SoundButtons";
import { Time } from "./Components/Timer";
import { Header } from "./Components/SoundHeader";

export default function App() {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState(null);
  const [selectedSound, setSelectedSound] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <>
      <Header />
      <SoundScapes
        text={text}
        setText={setText}
        setSelectedSound={setSelectedSound}
        isRunning={isRunning}
      />
      <Time
        isPlaying={isPlaying}
        currentSound={currentSound}
        setIsPlaying={setIsPlaying}
        setCurrentSound={setCurrentSound}
        selectedSound={selectedSound}
        setSelectedSound={setSelectedSound}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
    </>
  );
}
