import HeroList from "./heroList";

function Hero({ post }) {
  return (
    <>
      <h1 className="text-center text-3xl p-6 text-blue-800">
        My Simple Blog Project
      </h1>
      <div className="flex justify-center">
        <div className="w-10/12 flex flex-wrap justify-center gap-4  p-6">
          {post.length > 0 ? (
            post.map((item) => (
              <HeroList key={item.id} post={item} /> // Menampilkan hasil filter
            ))
          ) : (
            <p>No posts found</p> // Pesan ketika tidak ada hasil
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
