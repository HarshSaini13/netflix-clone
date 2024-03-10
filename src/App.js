import { useState, useEffect } from "react";
import Header from "./Header";
import Rail from "./Rail";

function App() {
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=bbad4f6d&s=stranger"
      );
      const data = await response.json();
      return data.Search;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await fetchMovies();
      setMovies(fetchedMovies);
    };
    getMovies();
  }, []);

  return (
    <div className="App m-10">
      <Header />
      <Rail title="Trending Now" movieList={movies} />
      <Rail title="Watch It Again" movieList={movies} />
      <Rail title="Popular on Netflix" movieList={movies} />
      <Rail title="Continue Watching for Jamal" movieList={movies} />
    </div>
  );
}

export default App;
