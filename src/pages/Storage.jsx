import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Grid, Card, Typography } from '@mui/material';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';


// Data for the line chart (Sessions over time)
const sessionsData = {
  labels: ['Sept 20', 'Sept 22', 'Sept 24', 'Sept 26', 'Sept 28', 'Oct 1', 'Oct 3', 'Oct 5', 'Oct 7'],
  datasets: [
    {
      label: 'Sessions',
      data: [4000, 5000, 4500, 4800, 5200, 5800, 6200, 5900, 6100],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false,
    },
  ],
};

// Data for "Default Channel Grouping" vertical bar chart
const channelData = {
  labels: ['Direct', 'Paid Search', 'Affiliates', 'Display', '(Other)'],
  datasets: [
    {
      label: 'Sessions',
      backgroundColor: 'rgba(54, 162, 235, 1)',
      data: [74594, 8897, 147, 88, 17],
    },
  ],
};

// Data for "Page Title" and "Country" horizontal bar chart
const pageTitleData = {
  labels: ['Home', 'Google Online Store', 'Apparel', 'Log In', 'Shopping Cart'],
  datasets: [
    {
      label: 'Sessions',
      backgroundColor: 'rgba(153, 102, 255, 1)',
      data: [27351, 8611, 5054, 4240, 2821],
    },
  ],
};

const countryData = {
  labels: ['United States', 'India', 'United Kingdom', 'Canada', 'France'],
  datasets: [
    {
      label: 'Sessions',
      backgroundColor: 'rgba(255, 159, 64, 1)',
      data: [43732, 5734, 4319, 2754, 1658],
    },
  ],
};


// Dashboard layout
const Storage = () => (
  <div style={{ padding: '20px' }}>
    <Grid container spacing={2}>
      {/* Sessions Line Chart */}
      <Grid item xs={12} md={6}>
        <Card style={{ padding: '20px', marginBottom: '0px' }}>
          <Typography variant="h6">Sessions</Typography>
          <Line data={sessionsData} />
          <Typography variant="body2">Total Sessions: 83,740</Typography>
        </Card>
      </Grid>

      {/* Default Channel Grouping Vertical Bar Chart */}
      <Grid item xs={12} md={6}>
        <Card style={{ padding: '20px', marginBottom: '0px' }}>
          <Typography variant="h6">Default Channel Grouping</Typography>
          <Bar data={channelData} />
        </Card>
      </Grid>

      {/* Page Title Horizontal Bar Chart */}
      <Grid item xs={12} md={6}>
        <Card style={{ padding: '20px', marginBottom: '0px' }}>
          <Typography variant="h6">Page Title</Typography>
          <Bar data={pageTitleData} options={{ indexAxis: 'y' }} />
        </Card>
      </Grid>

      {/* Country Horizontal Bar Chart */}
      <Grid item xs={12} md={6}>
        <Card style={{ padding: '20px', marginBottom: '0px' }}>
          <Typography variant="h6">Country</Typography>
          <Bar data={countryData} options={{ indexAxis: 'y' }} />
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default Storage;
