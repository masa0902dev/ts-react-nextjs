import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}


function LikeButton() {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <button className="likeButton" onClick={handleClick}>
      ❤️ {count} ❤️
    </button>
  );
}

export default App;
