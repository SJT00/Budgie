import React from "react";
import Chart from "../chart/chart";
import "./dashboard.scss";

import { getMockHistory } from "./mockData";
import { smallestDateInterval, formatDateForAxis } from "./helper";

const mockData = getMockHistory();
const interval = smallestDateInterval(mockData);

const createData = (historyData: any) => {
  const data = new Array();

  for (let i = 0; i < historyData.length; i++) {
    const dataPoint = {
      date: historyData[i].date,
      Balance: historyData[i].amount,
    };
    data.push(dataPoint);
  }
  console.log(data);
  return data;
};

// const getDomain = (historyData: any) => {
//   const firstDay = new Date(historyData[0].date);
//   const lastDay = new Date(historyData[historyData.length - 1].date);
// }

const data = createData(mockData);
const domain = [0, "auto"];
console.log(data);

const Dashboard = () => {
  return (
    <div id="dashboard">
      <div id="myChart">
        <Chart data={data} domain={domain} />
        <h1>{interval}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
