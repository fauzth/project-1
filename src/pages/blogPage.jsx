import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function BlogPage() {
  
  const post = useLoaderData();

  return (
    <>
      <h2 className="text-center p-2 font-bold text-2xl ">External Posts</h2>
      <div className="text-center">
        {post.map((item, index) => (
          <div key={index}> 
            <Link to={`/blog/${item.id}`}>- {item.title}  </Link>
          
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogPage;
