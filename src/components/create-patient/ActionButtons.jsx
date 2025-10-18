import React from "react";

function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-5 justify-between self-stretch mt-20 text-center max-md:mt-10 max-md:max-w-full">
      <button className="self-start px-11 py-4 mt-1 text-2xl text-blue-700 border border-blue-700 border-solid rounded-[30px] max-md:px-5">
        Save & Exit
      </button>
      <button className="px-16 py-3.5 text-3xl text-white bg-blue-700 rounded-2xl max-md:px-5">
        Start Diagnosis
      </button>
    </div>
  );
}

export default ActionButtons;
