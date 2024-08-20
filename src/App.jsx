import { useState } from "react";
import { SoundScapes } from "./Components/SoundButtons";

function App() {
  const [text, setText] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState(null);

  return (
    <>
      <SoundScapes text={text} />
    </>
  );
}

export default App;
