import React from "react";
import { PropTypes } from "prop-types";
function InputField({ label, placeholder, unit }) {
  return (
    <div className="flex flex-col mt-2.5 w-full text-base text-center text-[color(display-p3_0_0_0)] max-md:mt-10">
      <label
        htmlFor={label.toLowerCase().replace(" ", "-")}
        className="self-start ml-3 max-md:ml-2.5"
      >
        {label}
      </label>
      <div className="flex mt-6 text-2xl text-white whitespace-nowrap max-md:mr-2">
        <input
          type="text"
          id={label.toLowerCase().replace(" ", "-")}
          placeholder={placeholder}
          className="flex shrink-0 gap-2.5 max-w-full bg-white rounded-2xl border border-solid border-neutral-300 h-[63px] w-[322px] max-md:mr-0"
        />
        {unit && (
          <div className="px-8 py-6 bg-blue-700 rounded-none border-l border-white max-md:px-5">
            {unit}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputField;

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  unit: PropTypes.string,
};
