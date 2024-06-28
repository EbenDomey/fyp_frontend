import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
import { PropTypes } from "prop-types";

// ChartJs.register(CategoryScale, LinearScale, Tooltip, Legend);

export const HorizontalBarChart = (props) => {
  Chart.defaults.font.size = 16;
  const data = {
    labels: ["J45.3", "J45.4", "J45.5", "Not Asthma"],
    datasets: [
      {
        label: "Severity",
        data: props.data,
        backgroundColor: "#686D76",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    indexAxis: "y",
  };

  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

HorizontalBarChart.propTypes = {
  data: PropTypes.array,
};

export const PieChart = (props) => {
  Chart.defaults.font.size = 16;
  const data = {
    labels: ["Asthma", "Not Asthma"],
    datasets: [
      {
        data: props.data,
        backgroundColor: ["#686D76", "#000000"],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    indexAxis: "y",
  };

  return (
    <div>
      <Pie data={data} options={options}></Pie>
    </div>
  );
};

PieChart.propTypes = {
  data: PropTypes.array,
};
