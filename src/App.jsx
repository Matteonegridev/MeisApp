import { useState } from "react";
import { SoundScapes } from "./Components/SoundButtons";
import { Time } from "./Components/Timer";

export default function App() {
  const [text, setText] = useState("");
  const [playing, setPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState(null);

  return (
    <>
      <SoundScapes text={text} setText={setText} />
      <Time />
    </>
  );
}
