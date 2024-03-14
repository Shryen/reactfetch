import { useState } from "react";
import "./App.css";
import Reddit from "./Reddit";
import Joke from "./Joke";
function App() {
  const [reddit, setReddit] = useState(false);
  const [joke, setJoke] = useState(false);
  return (
    <div className="App">
      <div className="buttons">
        <button onClick={() => setReddit((prevReddit) => !prevReddit)}>
          Toggle Reddit
        </button>
        <button onClick={() => setJoke((prevJoke) => !prevJoke)}>
          Toggle Joke
        </button>
      </div>
      {reddit && <Reddit />}
      {joke && <Joke />}
    </div>
  );
}

export default App;
