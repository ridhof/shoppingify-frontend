"use client";

import Search from "@material-design-icons/svg/filled/search.svg";

function SearchBar() {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <Search className="absolute left-3 top-0.5 h-5 w-5 translate-y-1/2" />
      <input
        type="text"
        name="search"
        id="search"
        className="block h-12 w-full rounded-xl border-0 bg-white pl-14 text-gray-900 placeholder:text-sm placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary"
        placeholder="search item"
      />
    </div>
  );
}

export default SearchBar;
