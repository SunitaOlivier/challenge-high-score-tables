import React from "react";
import HighScoresTable from "./components/HighScoreTable";
import scoresData from "./components/scores";
import "./App.css";

function App() {
  return <HighScoresTable scores={scoresData} />;
}

export default App;
