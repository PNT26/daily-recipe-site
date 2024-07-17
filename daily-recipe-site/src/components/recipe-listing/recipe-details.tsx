import useFetch from "hooks/fetch";
import { useParams } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body?: string;
}

export default function RecipeDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const posts: Post = data as unknown as Post;
  return (
    <div>
      {isLoading && (
        <div className="fixed z-[999] inset-0 w-screen h-screen bg-white flex justify-center items-center">
          <span className="w-[40px] h-[40px] rounded-full animate-spin border-b-[4px] border-x-[4px] border-x-primary-500 border-b-primary-500 border-t-[4px] !border-t-black/[0.1]" />
        </div>
      )}
      {posts && (
        <div key={posts.id}>
          <h1>{posts.title}</h1>
          <p>{posts.body}</p>
        </div>
      )}
    </div>
  );
}
