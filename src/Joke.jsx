import React from "react";
import useFetch from "./useFetch";

export default function Joke() {
  const {
    data: joke,
    errorMessage,
    isLoading,
  } = useFetch("https://official-joke-api.appspot.com/random_joke");
  return (
    <div>
      <h2>Joke API</h2>
      {isLoading && <p className="loader"></p>}
      {errorMessage && <p>{errorMessage}</p>}
      {joke && (
        <div>
          <h2>{joke.setup}</h2>
          <p>{joke.punchline}</p>
        </div>
      )}
    </div>
  );
}
