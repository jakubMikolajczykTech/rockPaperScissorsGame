import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Play from "./components/GameOptions";
import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(() => {
    const storedScore = localStorage.getItem("score");
    return storedScore ? parseInt(storedScore, 10) : 0;
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("score", score.toString());
  }, [score]);

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <>
      <div className="container">
        <Header score={score} />
        <Routes>
          <Route path="/" element={<Play setMyChoice={setMyChoice} />} />
          <Route
            path="/game"
            element={
              <Game myChoice={myChoice} score={score} setScore={setScore} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
