import React, { useState } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy😁");
  return (
    <div className="App">
      <h1>Current Emotion is {emotion}</h1>
      <button
        onClick={() =>
          setEmotion((prev) => (prev === "happy😁" ? "sad😢" : "happy😁"))
        }
      >
        Change Emotion
      </button>
      <button onClick={() => setEmotion("proud🤩")}>Proud</button>
      <button onClick={() => setEmotion("angry😡")}>Angry</button>
    </div>
  );
}

export default App;
