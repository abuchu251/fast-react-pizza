import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleClick}>
      <input
        className="focus:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:outline-none sm:w-64 sm:focus:w-72"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
