import React from "react";
import { PropTypes } from "prop-types";

function PatientRow({ id, name, dateCreated, sex, status }) {
  return (
    <tr className="text-left w-full bg-white">
      <td className="text-left">{id}</td>
      <td className="text-left">{name}</td>
      <td className="text-left">{dateCreated}</td>
      <td className="text-left">{sex}</td>
      <td className="text-left">{status}</td>
      <td className="text-left">
        <div className=" bg-[#2962b6] border border-black rounded-full"></div>
      </td>
    </tr>
  );
}

export default PatientRow;
PatientRow.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  dateCreated: PropTypes.string,
  sex: PropTypes.string,
  status: PropTypes.string,
};
