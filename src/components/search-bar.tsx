"use client";

import Search from "@material-design-icons/svg/filled/search.svg";

function SearchBar() {
  return (
    <div className="relative mt-2 rounded-md shadow-[0_2px_12px_2px_rgba(0,0,0,0.05)]">
      <Search className="absolute left-5 top-0 h-5 w-5 translate-y-4" />
      <input
        type="text"
        name="search"
        id="search"
        className="block h-full w-full rounded-xl border-0 bg-white pl-14 text-gray-900 placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary"
        placeholder="search item"
      />
    </div>
  );
}

export default SearchBar;
