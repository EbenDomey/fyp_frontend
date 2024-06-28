import React from "react";

export const IcdCodesTables = () => {
  return (
    <div>
      <table className="w-full p-4 text-[0.5rem] md:text-xl">
        <tr className="text-center md:text-left ">
          <th>ICD-10 code </th>
          <th>ICD-10 description </th>
          <th>More Details</th>
        </tr>
        <tr>
          <td>J45.3</td>
          <td>Mild persistent asthma, uncomplicated</td>
          <td>
            <a
              href="https://www.icd10data.com/ICD10CM/Codes/J00-J99/J40-J4A/J45-/J45.30"
              className="hover:underline decoration-sky-500 underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </td>
        </tr>
        <tr>
          <td>J45.4</td>
          <td>Moderate persistent asthma, uncomplicated </td>
          <td>
            <a
              href="https://www.icd10data.com/ICD10CM/Codes/J00-J99/J40-J4A/J45-/J45.40"
              className="hover:underline decoration-sky-500 underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </td>
        </tr>
        <tr>
          <td>J45.5</td>
          <td>Severe persistent asthma, uncomplicated </td>
          <td>
            <a
              href="https://www.icd10data.com/ICD10CM/Codes/J00-J99/J40-J4A/J45-/J45.50"
              className="hover:underline decoration-sky-500 underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </td>
        </tr>
      </table>
    </div>
  );
};
