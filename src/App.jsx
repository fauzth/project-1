import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { useState } from "react";
import postData from "./posts.json"; // Import data post

function App() {
  // Mengatur state dengan data post awal
  const [filteredPosts, setFilteredPosts] = useState(postData);

  const handleSearch = (searchResults) => {
    setFilteredPosts(searchResults); // Simpan hasil pencarian
  };

  return (
    <>
      <Navbar filter={handleSearch} />
      <Hero post={filteredPosts} /> {/* Tampilkan filteredPosts */}
    </>
  );
}

export default App;
