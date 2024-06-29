import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
// import { IcdCodesTables } from "./components/DiagnosticResultsPage/IcdCodesTable";
import {
  HorizontalBarChart,
  PieChart,
} from "./components/DiagnosticResultsPage/Charts";
import { Recommendation } from "./components/DiagnosticResultsPage/Recommendation";

export default function DiagnosticResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  // const formData = location.state.formData || {};
  const [formData, setFormData] = useState({});
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const response = location.state.modelResults || {};

  const pieData = [
    response.probabilities.asthma,
    response.probabilities.no_asthma,
  ];
  const resp = {
    "J45.3": response.probabilities.mild_persistent,
    "J45.4": response.probabilities.moderate_persistent,
    "J45.5": response.probabilities.severe_persistent,
  };
  const respExp = {
    "J45.3": "Mild persistent asthma",
    "J45.4": "Moderate persistent asthma",
    "J45.5": "Severe persistent asthma",
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: !isNaN(parseFloat(value)) ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form data with predictions submitted:", formData);
    try {
      const newResponse = await axios.post(`/store/${response.id}`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      const modelResults = newResponse.data;
      modelResults ? setDisplaySuccess(true) : setDisplaySuccess(false);
      console.log("Response data:", newResponse.data);
      navigate("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="results-container">
        <h2 className="text-2xl p-4 border-2 border-white border-b-gray-500 rounded-md mb-4">
          Primary Diagnosis
        </h2>
        <div className="">
          {Object.keys(response).length > 0 && (
            <>
              <div className="text-[0.9rem] md:text-xl">
                <div className="inline-flex gap-2">
                  {response.result.includes("asthmatic") ? (
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      size="2x"
                      style={{
                        color: "red",
                        backgroundColor: "white",
                      }}
                      className="rounded-full aspect-square"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faMinusCircle}
                      size="3x"
                      style={{
                        color: "green",
                        backgroundColor: "white",
                      }}
                      className="rounded-full aspect-square"
                    />
                  )}

                  <p className="align-middle m-auto text-sm md:text-xl lg:text-2xl">
                    <p className="">Based on the provided information:</p>
                    Asthma condition{" "}
                    <strong>
                      has {response.result.includes("asthmatic") ? "" : "not"}{" "}
                      been
                    </strong>{" "}
                    detected <br />
                    The likelyhood of{" "}
                    <strong>
                      {response.result.includes("asthmatic") ? "" : "no"} asthma{" "}
                    </strong>
                    is suspected to be{" "}
                    <strong>
                      {response.result.includes("asthmatic")
                        ? response.probabilities.asthma
                        : response.probabilities.no_asthma}
                      {}%
                    </strong>
                  </p>
                </div>
                {response.result.includes("asthmatic") && (
                  <p className="text-sm md:text-xl p-4">
                    The Asthma condition is suspected to have a severity of{" "}
                    <strong>
                      {response.severity} ({respExp[response.severity]})
                    </strong>{" "}
                    with a percentage likelyhood of{" "}
                    <strong>{resp[response.severity]}%</strong>
                  </p>
                )}{" "}
              </div>
              <>
                <h2 className="text-2xl p-4 border-2 border-white border-b-gray-500 rounded-md mb-4">
                  Model Decision
                </h2>

                <div className="md:grid grid-cols-2 md:gap-96">
                  <div>
                    <div className="md:w-full">
                      <p className="text-sm font-bold text-center">
                        Severity Probability Distribution Graph
                      </p>
                      <HorizontalBarChart
                        data={[
                          response.probabilities.mild_persistent,
                          response.probabilities.moderate_persistent,
                          response.probabilities.severe_persistent,
                          response.probabilities.normal,
                        ]}
                      />
                    </div>
                  </div>
                  <div className="w-3/4 md:w-2/4 lg:w-200 mt-8">
                    <p className="text-sm font-bold text-center">
                      Probability Distribution Graph
                    </p>
                    <PieChart data={pieData} />
                  </div>
                </div>
                <div>
                  {response.result.includes("asthmatic") ? (
                    <Recommendation />
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <h2 className="text-2xl p-4 border-2 border-white border-b-gray-500 rounded-md mb-4">
                    Actual Values
                  </h2>
                  <p>{displaySuccess ? "Response Saved successsfully" : ""}</p>
                  <form
                    onSubmit={handleSubmit}
                    className="form-body md:flex justify-even"
                  >
                    <div className="form-group md:ml-20 md:w-48">
                      <label
                        htmlFor="actual_result"
                        className="text-sm md:text-xl"
                      >
                        Actual Result
                      </label>
                      <select
                        id="actual_value"
                        name="actual_value"
                        value={formData.actual_value}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="asthmatic">Asthma</option>
                        <option value="normal">No asthma</option>
                      </select>
                    </div>
                    <div className="form-group md:ml-20 md:w-48">
                      <label
                        htmlFor="actual_severity"
                        className="text-sm md:text-xl"
                      >
                        Actual severity
                      </label>
                      <select
                        id="actual_severity"
                        name="actual_severity"
                        value={formData.actual_severity}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option value="J45.3">J45.3</option>
                        <option value="J45.4">J45.4</option>
                        <option value="J45.5">J45.5</option>
                        <option value="normal">No asthma</option>
                      </select>
                    </div>
                    <button type="submit" className="results_submit">
                      Submit
                    </button>
                  </form>
                </div>
              </>
            </>
          )}
        </div>
      </div>
    </>
  );
}
