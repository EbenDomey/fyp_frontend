import React from "react";

function GenderSelection() {
  return (
    <>
      <div className="mt-20 ml-24 text-base text-center text-[color(display-p3_0_0_0)] max-md:mt-10 max-md:ml-2.5">
        Gender
      </div>
      <div className="flex flex-wrap gap-10 self-center mt-7 max-w-full text-3xl text-center text-blue-700 whitespace-nowrap w-[605px]">
        <button className="flex flex-auto gap-6 px-14 py-3 rounded-2xl border border-blue-700 border-solid max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cb4b86336bc9d3c39b614d1a09f78f29deaffe49fa7a07117e068443f5906af?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637"
            alt=""
            className="object-contain shrink-0 self-start w-10 aspect-square"
          />
          <span>Male</span>
        </button>
        <button className="flex flex-auto gap-3 px-14 py-3 rounded-2xl border border-blue-700 border-solid max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2269976655ce3c1b411eddb4c63e2af0ae3f187bac6af26b5a0f6ce71bad898?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637"
            alt=""
            className="object-contain shrink-0 self-start w-10 aspect-square"
          />
          <span className="basis-auto">Female</span>
        </button>
      </div>
    </>
  );
}

export default GenderSelection;
