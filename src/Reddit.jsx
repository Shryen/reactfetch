import React from "react";
import useFetch from "./useFetch";

export default function Reddit() {
  const {
    data: posts,
    isLoading,
    errorMessage,
  } = useFetch("https://www.reddit.com/r/wow.json");
  return (
    <div>
      <h2>Reddit API</h2>
      {isLoading && <p className="loader"></p>}
      {errorMessage && <p>{errorMessage}</p>}
      {posts && (
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
