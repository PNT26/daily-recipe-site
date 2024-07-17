import React, { useState, useEffect } from "react";
import { StyledRecipes } from "./recipes.stye";
import useFetch from "hooks/fetch";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body?: string;
}

export default function Recipes() {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts: Post[] = data as unknown as Post[];

  return (
    <StyledRecipes>
      <h1>Recipes Page</h1>
      {isLoading && (
        <div className="fixed z-[999] inset-0 w-screen h-screen bg-white flex justify-center items-center">
          <span className="w-[40px] h-[40px] rounded-full animate-spin border-b-[4px] border-x-[4px] border-x-primary-500 border-b-primary-500 border-t-[4px] !border-t-black/[0.1]" />
        </div>
      )}
      {posts ? (
        <div className="flex flex-row flex-wrap gap-[20px] justify-start align-middle">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/recipe-details/${post.id}`}
              className="border border-primary-500 rounded-[8px] p-[24px] w-[30%]"
            >
              <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>Error loading data</p>
      )}
    </StyledRecipes>
  );
}
