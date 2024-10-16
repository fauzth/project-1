import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="p-5">
        <Link className="font-bold p-2 text-red-950" to="/">
          HOME
        </Link>
        |
        <Link className="font-bold p-2 text-red-950" to="/blog">
          BLOG
        </Link>
        |
        <Link className="font-bold p-2 text-red-950" to="/about">
          ABOUT
        </Link>
      </div>

      <Outlet />
    </>
  );
}

export default RootLayout;
