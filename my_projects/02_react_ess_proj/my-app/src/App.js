import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy😁");
  const [secondary, setSecondary] = useState("tired🥱");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <div className="App">
      <h1>Current Emotion is {emotion}</h1>
      <h2>Current Secondary Emotion is {secondary}.</h2>
      <button
        onClick={() =>
          setEmotion((prev) => (prev === "happy😁" ? "sad😢" : "happy😁"))
        }
      >
        Change Emotion
      </button>
      <button onClick={() => setEmotion("proud🤩")}>Proud</button>
      <button onClick={() => setEmotion("angry😡")}>Angry</button>
      <button onClick={() => setSecondary("grateful🥹")}>Grateful</button>
    </div>
  );
}

export default App;
