import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { useState, useEffect } from "react";
import postData from "./posts.json"; // Import data post
import { GlobalContext } from "./context";

function App() {
  // Mengatur state dengan data post awal
  const [filteredPosts, setFilteredPosts] = useState(postData);
  const [searchLength, setSearchLength] = useState(0);

  const handleSearch = (searchResults) => {
    setFilteredPosts(searchResults); // Simpan hasil pencarian
    // setTotalPost(searchResults.length)
  };

  const onSearch = (search) => {
    setSearchLength(search);
  };

  const user = {
    username: "Fadli fauzi",
  };

  return (
    <>
      <Navbar filter={handleSearch} onSearch={onSearch} />
      <GlobalContext.Provider value={user}>
        <Hero post={filteredPosts} onSearch={searchLength} />
      </GlobalContext.Provider>
      <hr />

      <div className="text-center">
        <a href={"/externalpost"} className="p-2 font-bold text-2xl ">
          External Posts
        </a>
      </div>
    </>
  );
}

export default App;
