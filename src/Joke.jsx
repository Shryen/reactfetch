import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function Joke() {
  const {
    data: joke,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["joke"],
    queryFn: fetchJoke,
    refetchOnWindowFocus: false,
  });

  function fetchJoke() {
    return fetch("https://official-joke-api.appspot.com/random_joke").then(
      (response) => response.json()
    );
  }
  return (
    <div>
      <h2>Joke API</h2>
      {isLoading && <p className="loader"></p>}
      {isError && <p>{error.message}</p>}
      {isSuccess && (
        <div>
          <h2>{joke.setup}</h2>
          <p>{joke.punchline}</p>
        </div>
      )}
    </div>
  );
}
