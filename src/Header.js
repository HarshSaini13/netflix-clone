export default function Header() {
  return (
    <div className="flex justify-between">
      <div>
        <div className="mr-10 inline-block">
          <span className="text-rose-600 text-2xl font-bold">NETFLIX</span>
        </div>
        <div className="inline-block">
          <ul className="flex space-x-5 font-semibold">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
          </ul>
        </div>
      </div>
      <div className="ml-4 font-semibold">
        <span>Login</span>
      </div>
    </div>
  );
}
