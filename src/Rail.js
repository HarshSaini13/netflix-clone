export default function Rail(props) {
  const { title, movieList } = props;

  const movieTiles = movieList.map((movie) => (
    <div key={movie.imdbID} className="p-2">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-40 h-auto max-w-none hover:scale-110 cursor-pointer transition duration-200 ease-in-out"
      />
    </div>
  ));

  return (
    <div className="mt-5">
      <span className="font-bold text-lg">{title}</span>
      <div className="flex flex-nowrap overflow-x-auto no-scrollbar">
        {movieTiles}
      </div>
    </div>
  );
}
