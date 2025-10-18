import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-row w-full flex-auto justify-between py-3 pr-2.5 pl-8 rounded-2xl border border-solid bg-white bg-opacity-60 border-neutral-300">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search"
        className="my-auto bg-transparent border-none outline-none"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0edd55282845dfd026d50991e809d14e013bc227d7310942b28cbab61b5fba12?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637"
        alt="Search icon"
        className="object-contain shrink-0 aspect-square w-[30px]"
      />
    </div>
  );
}

export default SearchBar;
