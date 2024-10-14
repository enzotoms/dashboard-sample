import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Table } from 'antd';
import { Grid, Card, Typography } from '@mui/material';

// Sample crash trends data
const crashTrendsData = {
  labels: ['Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26'],
  datasets: [
    {
      label: 'Events',
      backgroundColor: 'green',
      borderWidth: 1,
      data: [120000, 150000, 135000, 130000, 115000, 60000, 5000],
    },
  ],
};


// Crash trends bar chart component
const CrashTrendsChart = () => (
  <Card style={{ padding: '20px', marginBottom: '20px' }}>
    <Typography variant="h6" gutterBottom>
      Crash Trends
    </Typography>
    <Bar data={crashTrendsData} />
    <div style={{ marginTop: '10px' }}>
      <Typography variant="body2">Events: 766,190</Typography>
      <Typography variant="body2">Users: 14,856</Typography>
    </div>
  </Card>
);

// Table component
const CrashesByTable = ({ title, columns, data }) => (
  <Card style={{ padding: '20px', marginBottom: '20px' }}>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Table columns={columns} dataSource={data} pagination={false} />
  </Card>
);

// Main dashboard component
const Authentication = () => (
  <div style={{ padding: '20px' }}>
    <CrashTrendsChart />
    <Grid container spacing={2}>
    </Grid>
  </div>
);

export default Authentication;
