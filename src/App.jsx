import { useState } from "react";
import { SoundScapes } from "./Components/SoundButtons";
import { Time } from "./Components/Timer";
import { Header } from "./Components/SoundHeader";

export default function App() {
  const [text, setText] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState(null);

  return (
    <>
      <Header />
      <SoundScapes text={text} setText={setText} />
      <Time
        isPlaying={isPlaying}
        currentSound={currentSound}
        setIsPlaying={setIsPlaying}
        setCurrentSound={setCurrentSound}
      />
    </>
  );
}
