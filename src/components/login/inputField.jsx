import React from "react";

function InputField({ imgSrc, imgAlt, placeholder, type, className }) {
  return (
    <div
      className={`flex flex-wrap gap-1.5 items-start px-6 pt-12 pb-1 rounded-3xl border-b border-black text-stone-300 max-md:px-5 ${className}`}
    >
      <img
        loading="lazy"
        src={imgSrc}
        alt={imgAlt}
        className="object-contain shrink-0 rounded-3xl aspect-[1.38] w-[55px]"
      />
      <input
        type={type}
        placeholder={placeholder}
        className="flex-auto w-[555px] max-md:max-w-full bg-transparent border-none outline-none"
        aria-label={placeholder}
      />
    </div>
  );
}

export default InputField;
