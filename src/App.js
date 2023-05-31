import "./App.css";

import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="text-4xl fontbold py-4 text-red-500">My Scoreboard</h1>
        <Scoreboard />
      </div>
    </div>
  );
}

export default App;
