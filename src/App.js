import { useState, useEffect } from "react";
import Header from "./Header";
import Rail from "./Rail";

function App() {
  // const fetchMovies = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://www.omdbapi.com/?apikey=bbad4f6d&s=stranger"
  //     );
  //     const data = await response.json();
  //     return data.Search;
  //   } catch (error) {
  //     console.error("Error fetching movies:", error);
  //     return [];
  //   }
  // };

  const [movies, setMovies] = useState([
    {
      Title: "Stranger Things",
      Year: "2016–2025",
      imdbID: "tt4574334",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
      Title: "Pirates of the Caribbean: On Stranger Tides",
      Year: "2011",
      imdbID: "tt1298650",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg",
    },
    {
      Title: "Stranger Than Fiction",
      Year: "2006",
      imdbID: "tt0420223",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmE2ZjYwNGYtYWMyMS00M2I0LWI4NDEtMzc1MTllMjk0ZmFmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
    {
      Title: "The Stranger",
      Year: "2020",
      imdbID: "tt9698480",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWNlYzA2OWUtMWE1Mi00ZjMyLWExY2ItZDVlZmQ0YTMyZmEyXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_SX300.jpg",
    },
    {
      Title: "Perfect Stranger",
      Year: "2007",
      imdbID: "tt0457433",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTY4ODUwMTk3OV5BMl5BanBnXkFtZTcwNTI1MTEzMw@@._V1_SX300.jpg",
    },
    {
      Title: "When a Stranger Calls",
      Year: "2006",
      imdbID: "tt0455857",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTcyYjRhZTQtOTVlMy00MDU0LWFhNjktM2MyZDRmODgzMmNjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "You Will Meet a Tall Dark Stranger",
      Year: "2010",
      imdbID: "tt1182350",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTkzOTI3MTE0OF5BMl5BanBnXkFtZTcwOTg3NDI3Mw@@._V1_SX300.jpg",
    },
    {
      Title: "Stranger Than Paradise",
      Year: "1984",
      imdbID: "tt0088184",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDQ1ODM0NzctNDUwZS00NTI3LThjYWQtY2QyN2U5NDAyNDM3XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg",
    },
    {
      Title: "The Stranger",
      Year: "1946",
      imdbID: "tt0038991",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTExMDAzMDM0NzZeQTJeQWpwZ15BbWU3MDk3ODIzNzQ@._V1_SX300.jpg",
    },
    {
      Title: "The Stranger",
      Year: "2022",
      imdbID: "tt11897478",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmJkZDZkYTItOGZjNy00MTRmLTk4YWQtOWZmNTZkYThhZDAwXkEyXkFqcGdeQXVyOTc1NDIxNDA@._V1_SX300.jpg",
    },
  ]);

  // useEffect(() => {
  //   const getMovies = async () => {
  //     const fetchedMovies = await fetchMovies();
  //     setMovies(fetchedMovies);
  //   };
  //   getMovies();
  // }, []);

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
