import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { useState } from "react";
import postData from "./posts.json"; // Import data post
import Pagination from "./components/pagintaion";

function App() {
  // Mengatur state dengan data post awal
  const [filteredPosts, setFilteredPosts] = useState(postData);
  const [searchLength, setSearchLength] = useState(0)


  const handleSearch = (searchResults) => {
    setFilteredPosts(searchResults); // Simpan hasil pencarian
    // setTotalPost(searchResults.length)
  };


  const onSearch = (search) =>{
    setSearchLength(search)
  }
  return (
    <>

      <Navbar filter={handleSearch} onSearch={onSearch} />
      <Hero post={filteredPosts} onSearch={searchLength} />

    </>
  );
}

export default App;
