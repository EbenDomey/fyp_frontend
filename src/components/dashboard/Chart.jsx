import React from "react";
import { BarChart } from "../DiagnosticResultsPage/Charts";

function Chart() {
  return (
    <section className="flex flex-wrap ml-4 gap-4 pl-2 mt-14 max-w-full rounded-2xl border border-solid border-neutral-300 w-[978px] max-md:mt-10">
      <div className="flex flex-col grow shrink-0 pt-5 pr-5 pb-1.5 pl-20 basis-0 bg-zinc-300 bg-opacity-10 w-fit max-md:pl-5 max-md:max-w-full">
        <BarChart />
      </div>
    </section>
  );
}

export default Chart;
