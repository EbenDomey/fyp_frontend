import React from "react";
import OverviewCard from "./OverviewCard";

function PatientOverview() {
  const overviewData = [
    {
      title: "Total Patients",
      count: 12,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/336170447e480edc2a1a8df4cb6ed75c8375f3b938efda5abeee225c2ebd241d?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637",
    },
    {
      title: "Patients Diagnosed",
      count: 12,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f2c9bc08223a295288a2b0fcda37967537c455c9f12b86c68630422bb9c1d0ab?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637",
    },
    {
      title: "Diagnoses Pending",
      count: 0,
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4a229fc176c0ed11a4433f1ee3acc2ec79baae9067db888e51fa296608288c30?placeholderIfAbsent=true&apiKey=bb3c0e7e97bc4df1948f7a23f79a9637",
    },
  ];

  return (
    <section className="w-full max-md:max-w-full p-4">
      <h2 className="text-4xl font-bold text-black">Patient Overview</h2>
      <div className="flex gap-5 max-md:flex-col">
        {overviewData.map((data, index) => (
          <OverviewCard key={index} {...data} />
        ))}
      </div>
    </section>
  );
}

export default PatientOverview;
