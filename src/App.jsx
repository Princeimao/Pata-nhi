import { useEffect, useState } from "react";
import "./App.css";
import icon from "./assets/icon.svg";
import Card from "./Card";

function App() {
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);

  console.log(movie);

  const searchBtn = () => {
    setSearch(title);
  };

  const API = "http://www.omdbapi.com/?i=tt3896198&apikey=cc088aaf";
  const fetchData = async (title) => {
    const response = await fetch(`${API}&s=${title}`);
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    fetchData(search);
  }, [search]);

  return (
    <div className="bg-[#212426] font-bold text-white items-center flex flex-col w-full min-h-screen px-[10vh] py-10">
      <h1 className="text-4xl">Movie land</h1>

      <div className="input-box bg-[#1f2123] w-[90vh] h-[10vh] mt-4 rounded-full flex items-center font-normal text-xl text">
        <input
          className="bg-[#1f2123] w-full h-[80%] rounded-full px-8 outline-none "
          type="text"
          placeholder="Search"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <img
          src={icon}
          alt="search"
          className="px-6 cursor-pointer"
          onClick={searchBtn}
        />
      </div>

      <div className="flex flex-wrap gap-10 overflow-hidden w-full">
        {movie.length > 0 ? (
          movie.map((items) => {
            <Card movie={items} />;
          })
        ) : (
          <div className="">no movies found</div>
        )}
      </div>
    </div>
  );
}

export default App;
