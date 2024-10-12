import HeroList from "./heroList";
import Pagination from "./pagintaion";

function Hero({ post, onSearch }) {
  return (
    <>
      <h1 className="text-center text-3xl p-6 text-blue-800">
        My Simple Blog Project
      </h1>
      {onSearch.length > 0 && (
        <p className="text-sm text-gray-500 text-center">
          Ditemukan {post.length} artikel dengan kata kunci <span className="font-bold">{onSearch}</span>  
        </p>
      )}

      <div className="flex justify-center items-center  flex-col p-2">
        <div className="w-10/12 flex flex-wrap justify-center gap-4  p-6">
          {post.length > 0 &&
            post.map((item) => (
              <HeroList key={item.id} post={item} /> // Menampilkan hasil filter
            ))}
        </div>
        <Pagination/>
      </div>
    </>
  );
}

export default Hero;
