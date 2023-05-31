import React, { useState, useEffect } from "react";

const Scoreboard = () => {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const updateHomeScore = (points) => {
    setHomeScore(homeScore + points);
  };

  const updateAwayScore = (points) => {
    setAwayScore(awayScore + points);
  };

  const deductHomeScore = () => {
    if (homeScore > 0) {
      setHomeScore(homeScore - 1);
    }
  };

  const deductAwayScore = () => {
    if (awayScore > 0) {
      setAwayScore(awayScore - 1);
    }
  };
  const clearScores = () => {
    setHomeScore(0);
    setAwayScore(0);
    setTime(0);
    setIsRunning(false);
    setQuarter(1);
  };

  const [time, setTime] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (time > 0 && time % 720 === 0) {
      // 720 seconds = 12 minutes
      setQuarter((prevQuarter) => prevQuarter + 1);
      setTime(0);
    }
  }, [time]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <div className="flex flex-row justify-center border gap-12">
        <div className="text-4xl border flex flex-col">
          <div className="bg-blue-500 p-2">Team A</div>
          <div className=" border ">{homeScore}</div>
        </div>
        <div className="text-4xl border flex flex-col">
          <div className="bg-red-500 p-2">Team B</div>
          <div className=" border">{awayScore}</div>
        </div>
      </div>

      <div className="flex flex-row gap-20 justify-center">
        <div className="flex items-center flex-col space-x-4 my-4">
          <div> Team A Button</div>
          <div className="space-x-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded"
              onClick={() => updateHomeScore(1)}
            >
              1 Point
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded"
              onClick={() => updateHomeScore(2)}
            >
              2 Points
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded"
              onClick={() => updateHomeScore(3)}
            >
              3 Points
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white font-bold rounded"
              onClick={deductHomeScore}
            >
              -1 Point
            </button>
          </div>
        </div>

        <div className="flex items-center flex-col space-x-4 my-4">
          <div> Team B Button</div>
          <div className="space-x-4">
            <button
              className="px-4 py-2 bg-red-500 text-white font-bold rounded"
              onClick={() => updateAwayScore(1)}
            >
              1 Point
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white font-bold rounded"
              onClick={() => updateAwayScore(2)}
            >
              2 Points
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white font-bold rounded"
              onClick={() => updateAwayScore(3)}
            >
              3 Points
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white font-bold rounded"
              onClick={deductAwayScore}
            >
              -1 Point
            </button>
          </div>
        </div>
      </div>

      <button
        className="px-4 py-2 bg-green-500 text-white font-bold rounded"
        onClick={clearScores}
      >
        Clear Scores
      </button>

      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl mb-2">Quarter: {quarter}</h1>
        <h2 className="text-2xl mb-2">Time: {time} seconds</h2>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={startTimer}
          >
            Play
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={pauseTimer}
          >
            Pause
          </button>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
