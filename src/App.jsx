import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { useState, useEffect } from "react";
import postData from "./posts.json"; // Import data post
import { GlobalContext } from "./context";

function App() {
  // Mengatur state dengan data post awal
  const [filteredPosts, setFilteredPosts] = useState(postData);
  const [searchLength, setSearchLength] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => setExternalPosts(json));
  }, []);
  return (
    <>
      <Navbar filter={handleSearch} onSearch={onSearch} />
      <GlobalContext.Provider value={user}>
        <Hero post={filteredPosts} onSearch={searchLength} />
      </GlobalContext.Provider>
      <hr />

      <h2 className="text-center p-2 font-bold text-2xl ">External Posts</h2>
      <div className="text-center">
        {externalPosts.map((item, index) => (
          <p key={index}> - {item.title}</p>
        ))}
      </div>
    </>
  );
}

export default App;
