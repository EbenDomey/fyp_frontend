import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
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
        backgroundColor: "#1e3a8a",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ position: "relative", height: "400px", width: "100%" }}>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

HorizontalBarChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export const PieChart = (props) => {
  Chart.defaults.font.size = 16;
  const data = {
    labels: ["Asthma", "Not Asthma"],
    datasets: [
      {
        data: props.data,
        backgroundColor: ["#2962b6", "#1e3a8a"],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ position: "relative", height: "400px", width: "100%" }}>
      <Pie data={data} options={options}></Pie>
    </div>
  );
};

PieChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export const LineChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ];
  // const label = schema.map(() => )
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Males",
        data: [9, 7, 12, 10, 6, 5, 1],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Females",
        data: [7, 6, 10, 1, 7, 8, 1],
        fill: false,
        borderColor: "rgb(255, 205, 86)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

LineChart.propTypes = {
  data: PropTypes.array,
};

export const BarChart = () => {
  const labels = ["Total Patients", "Diagnosis Made", "Diagnosis Pending"];
  // const label = schema.map(() => )
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Males",
        data: [8, 8, 0],
        fill: false,
        backgroundColor: ["rgb(255, 99, 132)"],
        borderColor: ["rgb(75, 192, 192)"],
        borderRadius: 15,
        tension: 0.1,
      },
      {
        label: "Females",
        data: [4, 4, 0],
        fill: false,
        backgroundColor: ["rgb(75, 192, 192)"],
        borderColor: ["rgb(75, 192, 192)"],
        borderRadius: 15,
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

BarChart.propTypes = {
  data: PropTypes.array,
};
