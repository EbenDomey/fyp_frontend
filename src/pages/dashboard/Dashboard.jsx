import React from "react";
// import Header from "../../components/Header";
// import Sidebar from "../../components/Sidebar";
import PatientOverview from "../../components/dashboard/PatientOverview";
import PatientRecords from "../../components/dashboard/PatientRecords";
import Chart from "../../components/dashboard/Chart";
import Layout from "../../Layout";

function Dashboard() {
  return (
    <Layout>
      {/* <div className="flex overflow-hidden flex-col bg-slate-50">
        {/* <Header /> */}
      {/* <div className="z-10 w-full max-w-[1379px] max-md:max-w-full"> */}
      {/* <div className="flex gap-5 max-md:flex-col"> */}
      {/* <Sidebar /> */}
      <main className="flex flex-col ml-24 w-[79%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
          <PatientOverview />
          <PatientRecords />
          <Chart />
        </div>
      </main>
      {/* </div>
        </div>
      </div> */}
    </Layout>
  );
}

export default Dashboard;
