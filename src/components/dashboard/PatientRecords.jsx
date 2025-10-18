import React from "react";
import { LineChart } from "../DiagnosticResultsPage/Charts";
import { useNavigate } from "react-router-dom";

function PatientRecords() {
  const navigate = useNavigate();
  const patients = [
    {
      id: "123ert",
      name: "John Doe",
      date: "03/04/2023",
      gender: "Male",
      status: "Completed",
    },
    {
      id: "467opy",
      name: "Jane Doe",
      date: "03/04/2023",
      gender: "Female",
      status: "Pending",
    },
    {
      id: "123ert",
      name: "Lorem Ipsum",
      date: "03/04/2023",
      gender: "Male",
      status: "Completed",
    },
  ];

  return (
    <section className="flex flex-col px-4 mt-14 w-full max-md:mt-10 max-md:max-w-full">
      <LineChart />
      <div className="flex flex-col py-6 mt-8 w-full rounded-2xl border border-solid border-neutral-300 max-w-[981px] max-md:max-w-full">
        <table className="flex flex-col pr-12 pl-5 w-full max-md:pr-5 max-md:max-w-full table-class">
          <div className="flex flex-wrap gap-5 justify-between max-md:mr-1 max-md:max-w-full">
            <h3 className="text-4xl">Patients Records</h3>
            <button
              className="my-auto text-xl text-blue-700"
              onClick={() => navigate("/patients")}
            >
              View All
            </button>
          </div>
          {patients.map((patient, index) => (
            <tr
              key={index}
              className={`flex justify-between mt-5 ml-5 max-md:max-w-full`}
            >
              <th>{patient.id}</th>
              <th>{patient.name}</th>
              <th>{patient.date}</th>
              <th>{patient.gender}</th>
              <th>{patient.status}</th>
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
}

export default PatientRecords;
