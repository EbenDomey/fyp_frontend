import React from "react";

function FilterButton() {
  return (
    <button className="flex gap-10 px-5 py-4 bg-white rounded-2xl border border-solid border-neutral-300 w-64">
      <span>Filter by</span>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/efea9d4b0ec9d3be1871922c2a065622b9063665b5074e012f9e0981b8d8f9f0?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637"
        alt="Filter icon"
        className="object-contain shrink-0 self-start aspect-square w-[25px]"
      />
    </button>
  );
}

export default FilterButton;
