import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import './App.css'; // Import your CSS

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Settings = () => {
  // Chart data
  const availabilityData = {
    labels: ['Up', 'Warning', 'Down'],
    datasets: [
      {
        data: [3, 4, 1],
        backgroundColor: ['#00C851', '#FF8800', '#ff4444'],
        hoverBackgroundColor: ['#007E33', '#FF8800', '#CC0000'],
      },
    ],
  };

  const alarmData = {
    labels: ['Unacked', 'Acked'],
    datasets: [
      {
        data: [79.6, 14.2],
        backgroundColor: ['#00C851', '#FF8800'],
      },
    ],
  };

  const cpuData = {
    labels: ['OK', 'Overload'],
    datasets: [
      {
        data: [6, 1],
        backgroundColor: ['#00C851', '#ff4444'],
      },
    ],
  };

  const memoryData = {
    labels: ['OK', 'Overloaded'],
    datasets: [
      {
        data: [6, 0],
        backgroundColor: ['#00C851', '#ff4444'],
      },
    ],
  };

  const temperatureData = {
    labels: ['OK', 'Overloaded'],
    datasets: [
      {
        data: [6, 1],
        backgroundColor: ['#00C851', '#ff4444'],
      },
    ],
  };

  const inventoryData = {
    labels: ['Status 1', 'Status 2', 'Status 3'],
    datasets: [
      {
        data: [49.9, 27.7, 22.7],
        backgroundColor: ['#00C851', '#FF8800', '#ff4444'],
      },
    ],
  };

  // Widget component
  const Widget = ({ title, data }) => {
    return (
      <div className="widget">
        <h3>{title}</h3>
        <Doughnut data={data} />
      </div>
    );
  };

  // Dashboard component
  return (
    <div className="dashboard">
      <div className="widget-grid">
        <Widget title="Network Availability" data={availabilityData} />
        <Widget title="Alarms" data={alarmData} />
        <Widget title="Network Health - CPU" data={cpuData} />
        <Widget title="Network Health - Memory" data={memoryData} />
        <Widget title="Network Health - Temperature" data={temperatureData} />
        <Widget title="Inventory by Status" data={inventoryData} />
      </div>
    </div>
  );
};

// Add some basic styling here or link to an external CSS file
const styles = `
  .dashboard {
    padding: -0.1px;
  }

  .widget-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .widget {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
  }

  .widget h3 {
    margin-bottom: 0px;
    font-size: 18px;
  }
`;

export default Settings;

// Insert the styles into the page head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
