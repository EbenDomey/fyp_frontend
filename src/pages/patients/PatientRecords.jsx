import React from "react";
import Layout from "../../Layout";
import SearchBar from "../../components/patients/SearchBar";
import FilterButton from "../../components/patients/FilterButton";
import PatientTable from "../../components/patients/PatientsTable";

function PatientRecords() {
  return (
    <Layout>
      <section className="w-[75vw]">
        <div className="">
          <h1 className="self-start text-4xl font-bold text-black">
            Patients Records
          </h1>
          <div className="flex flex-row gap-12 justify-center items-center text-xl text-neutral-400">
            <SearchBar />
            <FilterButton />
          </div>
        </div>
        <div className="w-full h-0.5 bg-slate-400 my-2"></div>
        <PatientTable />
      </section>
    </Layout>
  );
}

export default PatientRecords;
