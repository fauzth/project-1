
import { useLoaderData } from "react-router-dom";

function SinglePost() {
  const post =useLoaderData();

  return (
    <>
      <div className="font-bold">{post?.title}</div>
      <div>{post?.body}</div>
    </>
  );
}

export default SinglePost;