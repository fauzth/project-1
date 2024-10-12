import { useState } from "react";
import postData from "../posts.json";

function Navbar({ filter, onSearch }) {
  const [posts] = useState(postData);
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm)
    
    // Filter posts based on matching tags
    const searchResults = posts.filter((item) =>
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );

    // Kirim hasil pencarian ke parent (App)
    filter(searchResults);
    onSearch(searchTerm);
    // console.log(searchTerm)
    // setTotalPost(filteredPosts.length)
  };

  return (
    <div className="navbar bg-blue-400 text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Blog Project</a>
      </div>
      <div className="flex justify-center w-full">
        <div className="form-control w-4/5 text-black">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={handleSearch} // Panggil handleSearch saat input berubah
          />
        </div>
      </div>
      <div className="flex-none border-4 rounded-full gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a className="justify-between">Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
