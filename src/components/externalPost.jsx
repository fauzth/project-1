import { useEffect } from "react";
import { useState } from "react";

function ExternalPosts() {
  const [externalPosts, setExternalPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setExternalPosts(json));
  }, []);

  return (
    <>
      <h2 className="text-center p-2 font-bold text-2xl ">External Posts</h2>
      <div className="text-center">
        {externalPosts.map((item, index) => (
          <p key={index}> - {item.title}</p>
        ))}
      </div>
    </>
  );
}

export default ExternalPosts;
