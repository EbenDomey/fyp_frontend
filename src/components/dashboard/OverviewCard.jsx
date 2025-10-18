import React from "react";
import { PropTypes } from "prop-types";

function OverviewCard({ title, count, imageSrc }) {
  return (
    <div className="flex flex-col w-full max-md:mt-3.5">
      <div className="flex gap-5 items-start self-end px-11 py-7 mt-8 bg-white rounded-3xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mr-2.5">
        <img
          loading="lazy"
          src={imageSrc}
          alt=""
          className="object-contain shrink-0 mt-1 w-20 aspect-[0.89]"
        />
        <div className="flex flex-col">
          <div className="self-start text-5xl font-bold text-black max-md:text-2xl">
            {count}
          </div>
          <div className="mt-7 text-xl text-zinc-600 w-[200px] ">{title}</div>
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;

OverviewCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  imageSrc: PropTypes.string,
};
