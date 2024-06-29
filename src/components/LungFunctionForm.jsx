import { PropTypes } from "prop-types";
import React from "react";

export const LungFunctionForm = (props) => {
  return (
    <div className="form-group w-full md:w-3/4 lg:w-40">
      <label htmlFor={props.id}>{props.name}:</label>
      <div className="inline-flex w-full">
        <input
          type={props.type}
          id={props.id}
          name={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onHandleChange}
          required
        />
        <span className="bg-black text-white font-bold p-4 rounded-r-md -ml-4">
          {props.unit}
        </span>
      </div>
    </div>
  );
};

LungFunctionForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.any.isRequired,
  value: PropTypes.any,
  onHandleChange: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
};

export const DisabledLungFunctionForm = (props) => {
  return (
    <div className="md:pl-4 form-group w-full md:w-3/4 lg:w-40">
      <label htmlFor={props.id}>{props.name}:</label>
      <div className="inline-flex w-full">
        <input
          type={props.type}
          id={props.id}
          name={props.id}
          placeholder={props.placeholder}
          value={props.value}
          disabled
        />
        <span className="bg-black text-white font-bold p-4 rounded-r-md -ml-4">
          {props.unit}
        </span>
      </div>
    </div>
  );
};

DisabledLungFunctionForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.any.isRequired,
  value: PropTypes.any,
  unit: PropTypes.string.isRequired,
};
/* 
<div className="form-group">
      <label htmlFor="date_of_birth">Date of Birth:</label>
      <input
        type="date"
        id="date_of_birth"
        placeholder="DOB"
        name="date_of_birth"
        onChange={handleDatechange}
        required
      />
    </div>


    <div className="form-group">
      <label htmlFor={props.id}>{props.name}</label>
      <div className="inline-flex w-full">
            <input
              type={props.type}
              id={props.id}
              name={props.id}
              placeholder={props.placeholder}
              value={props.value}
              onChange={props.handleChange}
              required
            />
          <span className="bg-black text-white p-4 rounded-r-md -ml-4">props.unit</span>
          </div>
      </div>
*/
