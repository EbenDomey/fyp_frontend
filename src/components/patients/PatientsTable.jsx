import React from "react";
import PatientRow from "./PatientRow";

function PatientTable() {
  const patients = [
    {
      id: "123ert",
      name: "John Doe",
      dateCreated: "03/04/2023",
      sex: "Male",
      status: "Completed",
    },
    {
      id: "467opy",
      name: "Jane Doe",
      dateCreated: "03/04/2023",
      sex: "Female",
      status: "Completed",
    },
    {
      id: "976yrt",
      name: "Jack Lorem",
      dateCreated: "03/04/2023",
      sex: "Male",
      status: "Pending",
    },
    {
      id: "207frt",
      name: "Ipsum Dolor",
      dateCreated: "03/04/2023",
      sex: "Female",
      status: "Pending",
    },
    {
      id: "hyt_112",
      name: "Lenny Osmium",
      dateCreated: "03/04/2023",
      sex: "Male",
      status: "Completed",
    },
  ];
  console.log(patients);
  return (
    <table className="text-xl text-black border-collapse mt-5 w-full">
      {/* <thead> */}
      <tr className="text-left w-full border border-solid p-24 border-neutral-300">
        <th className="text-left">Patient Id</th>
        <th className="text-left">Name</th>
        <th className="text-left">Date Created</th>
        <th className="text-left">Sex</th>
        <th className="text-left">Status</th>
        <th className="text-left"></th>
      </tr>
      {/* </thead> */}
      {/* <tbody> */}
      {patients.map((patient) => (
        <PatientRow key={patient.id} {...patient} />
      ))}
      {/* </tbody> */}
    </table>
  );
}

export default PatientTable;
