import React, { useState } from "react";

// import ProgressBar from "./ProgressBar";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import InputField from "../../components/create-patient/InputField";
import GenderSelection from "../../components/create-patient/GenderSelection";
import ActionButtons from "../../components/create-patient/ActionButtons";
import moment from "moment";

const TODAYS_DATE = new Date()
  .toLocaleDateString("en-US")
  .split("/")
  .reverse()
  .join("-");

function AddPatient() {
  const [formData, setFormData] = useState({});
  const handleDatechange = (event) => {
    const { name, value } = event.target;
    console.log(`${name} recorded!`);
    const age = moment().diff(value, "years");
    // console.log("Age:", age);
    setFormData({
      ...formData,
      age,
    });
  };
  return (
    <div className="flex overflow-hidden flex-col bg-slate-50">
      <Header />
      <div className="w-full max-w-[1383px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <Sidebar />
          <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <h1 className="self-start text-5xl font-bold text-black max-md:text-4xl">
                Add Patient
              </h1>
              <div className="flex flex-col items-start pl-12 w-full max-md:pl-5 max-md:max-w-full">
                {/* <ProgressBar /> */}

                <InputField label="Patient Name" />
                <div className="mt-3.5 max-w-full w-[943px]">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="form-group w-full md:w-2/3 lg:w-40 md:mr-2">
                        <label htmlFor="date_of_birth">Date of Birth:</label>
                        <input
                          type="date"
                          id="date_of_birth"
                          placeholder="DOB"
                          name="date_of_birth"
                          onChange={handleDatechange}
                          max={TODAYS_DATE}
                          required
                        />
                      </div>
                      <InputField label="Height" unit="cm" />
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <InputField label="Age" unit="Yrs" />
                      <InputField label="Weight" unit="kg" />
                    </div>
                  </div>
                </div>
                <GenderSelection />
                <ActionButtons />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AddPatient;
