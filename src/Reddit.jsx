import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function Reddit() {
  //   const {
  //     data: posts,
  //     isLoading,
  //     errorMessage,
  //   } = useFetch("https://www.reddit.com/r/wow.json");

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });

  function fetchPosts() {
    return fetch("https://www.reddit.com/r/wow.json").then((response) =>
      response.json()
    );
  }

  return (
    <div>
      <h2>Reddit API</h2>
      {isLoading && <p className="loader"></p>}
      {isError && <p>{error.message}</p>}
      {isSuccess && (
        <ul>
          {posts.data.children.map((post) => (
            <li key={post.data.id}>
              <a href={`https://reddit.com${post.data.permalink}`}>
                {post.data.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
