import { useContext } from "react";
import { GlobalContext } from "../context";

function HeroList({ post }) {
  const user = useContext(GlobalContext);
  return (
    <>
      <div className="card w-72 h-auto shadow-lg rounded-none">
        <figure className="w-full h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={post.img}
            alt={post.alt}
          />
        </figure>
        <div className="card-body h-52">
          <h2 className="card-title">{post.title}</h2>
          <small className="italic">{post.tags.join(", ")}</small>
          <div className="card-actions justify-end">
            <a href="#" className="text-blue-800 underline hover:text-blue-400">
              Read More &raquo;
            </a>
          </div>
          <div className="text-center">
            <small>Ditulis oleh {user.username}</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroList;
