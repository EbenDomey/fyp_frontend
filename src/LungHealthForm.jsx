import React, { useState } from "react";
import axios from "axios";
import "./LungHealthForm.css";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
  DisabledLungFunctionForm,
  LungFunctionForm,
} from "./components/LungFunctionForm";
import { defineFvcFev1 } from "./formulas";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const TODAYS_DATE = new Date()
  .toLocaleDateString("en-US")
  .split("/")
  .reverse()
  .join("-");

export default function LungHealthForm() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

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
  const handleChange = (event) => {
    const { name, value } = event.target;
    const [fvc_pred, fev1_pred] = defineFvcFev1(formData);
    const fev1Fvc = formData.fev1 / formData.fvc;
    const fev1FvcPerc = fev1Fvc * 100;
    const fev1FvcPred = fev1_pred / fvc_pred;
    const fev1PercPred = (formData.fev1 / fev1_pred) * 100;
    setFormData({
      ...formData,
      [name]: !isNaN(parseFloat(value)) ? parseFloat(value) : value,
      fev1_pred,
      fvc_pred,
      fev1_fvc: fev1Fvc,
      fev1_fvc_perc: fev1FvcPerc,
      fev1_fvc_pred: fev1FvcPred,
      fev1_perc_pred: fev1PercPred,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
    try {
      const response = await axios.post("/diagnose", formData, {
        headers: { "Content-Type": "application/json" },
      });
      const modelResults = response.data;

      console.log("Response data:", response.data);
      navigate("/results", { state: { formData, modelResults } });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="m-auto w-9/10">
      <h2 className="text-2xl md:text-3xl bg-black text-white p-4 w-full">
        Lung Health Assessment
      </h2>
      <form onSubmit={handleSubmit} className="form-body">
        <h2 className="text-3xl p-4 border-2 border-white border-b-gray-500 rounded-md mb-4">
          Demographic Data
        </h2>
        <div className="form-fields p-4">
          <div className="md:inline-flex">
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
            <div className="form-group w-full md:w-1/3 lg:w-16">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder={0}
                value={formData.age}
                min="0"
                onChange={handleChange}
                disabled
                required
              />
            </div>
          </div>
          <div className="form-group md:ml-10 md:w-2/4 lg:w-40">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value={1}>Male</option>
              <option value={0}>Female</option>
            </select>
          </div>

          {/* <div className="md:inline-flex w-full"> */}
          <LungFunctionForm
            id="height"
            name="Height"
            type="number"
            placeholder={0}
            value={formData.height}
            unit="cm"
            onHandleChange={handleChange}
          />
          <LungFunctionForm
            id="weight"
            name="Weight"
            type="number"
            placeholder={0}
            value={formData.weight}
            unit="kg"
            onHandleChange={handleChange}
          />
          {/* </div> */}
        </div>
        <div className="p-4 ">
          <h2 className="text-2xl md:text-3xl p-4 border-2 border-white border-b-gray-500 rounded-md mb-4">
            Spirometry Measurements
          </h2>
          <div className="md:grid grid-cols-4">
            <LungFunctionForm
              id="fvc"
              name="FVC"
              type="number"
              placeholder={0}
              value={formData.fvc}
              unit="L/s"
              onHandleChange={handleChange}
            />
            <DisabledLungFunctionForm
              id="fvc_pred"
              name="FVC Predicted"
              type="number"
              placeholder={0}
              value={formData.fvc_pred}
              unit="L/s"
            />

            <LungFunctionForm
              id="fev1"
              name="FEV1"
              type="number"
              placeholder={0}
              value={formData.fev1}
              unit="L/s"
              onHandleChange={handleChange}
            />
            <DisabledLungFunctionForm
              id="fev1_pred"
              name="FEV1 Predicted"
              type="number"
              placeholder={0}
              value={formData.fev1_pred}
              unit="L/s"
            />
          </div>
        </div>
        <div className="m-4 text-xl">
          <h2 className="text-3xl p-4 border-2 border-white border-b-gray-500 rounded-md mb-4">
            Patient History
          </h2>
          <div className="form-group p-4">
            <label htmlFor="shortness_of_breath">
              Is the patient experiencing shortness of breath?
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  id="shortness_of_breath_yes"
                  name="shortness_of_breath"
                  value={1}
                  checked={formData.shortness_of_breath === 1}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="shortness_of_breath_no"
                  name="shortness_of_breath"
                  value={0}
                  checked={formData.shortness_of_breath === 0}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group p-4">
            <label htmlFor="wheezing">
              Is the patient experiencing wheezing?
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  id="wheezing_yes"
                  name="wheezing"
                  value={1}
                  checked={formData.wheezing === 1}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="wheezing_no"
                  name="wheezing"
                  value={0}
                  checked={formData.wheezing === 0}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group p-4">
            <label htmlFor="dry_cough">
              Is the patient experiencing a dry cough?
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  id="dry_cough_yes"
                  name="dry_cough"
                  value={1}
                  checked={formData.dry_cough === 1}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="dry_cough_no"
                  name="dry_cough"
                  value={0}
                  checked={formData.dry_cough === 0}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group p-4">
            <label htmlFor="been_nebulized">
              Has the patient been nebulized?
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  id="been_nebulized_yes"
                  name="been_nebulized"
                  value={1}
                  checked={formData.been_nebulized === 1}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="been_nebulized_no"
                  name="been_nebulized"
                  value={0}
                  checked={formData.been_nebulized === 0}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group p-4">
            <label htmlFor="sneezing">Is the patient sneezing?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  id="sneezing_yes"
                  name="sneezing"
                  value={1}
                  checked={formData.sneezing === 1}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="sneezing_no"
                  name="sneezing"
                  value={0}
                  checked={formData.sneezing === 0}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group p-4">
            <label htmlFor="itchy_watery_eyes">
              Is the patient experiencing itchy, watery eyes?
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  id="itchy_watery_eyes_yes"
                  name="itchy_watery_eyes"
                  value={1}
                  checked={formData.itchy_watery_eyes === 1}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="itchy_watery_eyes_no"
                  name="itchy_watery_eyes"
                  value={0}
                  checked={formData.itchy_watery_eyes === 0}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group p-4">
            <label htmlFor="facial_swelling">
              Is the patient experiencing facial swelling?
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  id="facial_swelling_yes"
                  name="facial_swelling"
                  value={1}
                  checked={formData.facial_swelling === 1}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="facial_swelling_no"
                  name="facial_swelling"
                  value={0}
                  checked={formData.facial_swelling === 0}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group p-4">
            <label htmlFor="has_rashes">
              Is the patient showing signs of rashes?
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  id="has_rashes_yes"
                  name="has_rashes"
                  value={1}
                  checked={formData.has_rashes === 1}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="has_rashes_no"
                  name="has_rashes"
                  value={0}
                  checked={formData.has_rashes === 0}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group p-4">
            <label htmlFor="pigmentation">
              Is the patient experiencing pigmentation changes?
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  id="pigmentation_yes"
                  name="pigmentation"
                  value={1}
                  checked={formData.pigmentation === 1}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="pigmentation_no"
                  name="pigmentation"
                  value={0}
                  checked={formData.pigmentation === 0}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group p-4">
            <label htmlFor="itchy">
              Is the patient experiencing itchiness?
            </label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  id="itchy_yes"
                  name="itchy"
                  value={1}
                  checked={formData.itchy === 1}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="itchy_no"
                  name="itchy"
                  value={0}
                  checked={formData.itchy === 0}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>

          <div className="form-group p-4">
            <label htmlFor="stigmata">Is the patient showing stigmata?</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  id="stigmata_yes"
                  name="stigmata"
                  value={1}
                  checked={formData.stigmata === 1}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  id="stigmata_no"
                  name="stigmata"
                  value={0}
                  checked={formData.stigmata === 0}
                  onChange={handleChange}
                  required
                />
                No
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="form_submit">
          Submit Form
        </button>
      </form>
    </div>
  );
}
