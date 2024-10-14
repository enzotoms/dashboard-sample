import React from 'react';
import { Grid, Paper, Typography, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);


const AllApps = () => {
  const lineData = {
    labels: ['Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Segment A',
        data: [1000, 1100, 1200],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
      {
        label: 'Segment B',
        data: [1050, 1150, 1250],
        fill: false,
        borderColor: 'rgba(255,205,86,1)',
        tension: 0.1,
      },
      {
        label: 'Segment C',
        data: [900, 950, 1000],
        fill: false,
        borderColor: 'rgba(153,102,255,1)',
        tension: 0.1,
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Rep A',
        data: [1500, 1700, 1900],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Rep B',
        data: [1300, 1600, 1800],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Rep C',
        data: [1200, 1400, 1600],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
      {
        label: 'Target',
        data: [1800, 1800, 1800],
        type: 'line',
        borderColor: 'rgba(255,99,132,1)',
        fill: false,
      },
    ],
  };

  return (
    <Box sx={{ p: 0 }}>
      <Typography variant="h4" gutterBottom>
        Sales Dashboard
      </Typography>

      {/* Filters Row */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Auto date range</InputLabel>
            <Select defaultValue="This Month" label="Auto date range">
              <MenuItem value="This Month">This Month</MenuItem>
              <MenuItem value="Last Month">Last Month</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Services</InputLabel>
            <Select defaultValue="All" label="Services">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Specific Service">Specific Service</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Posts</InputLabel>
            <Select defaultValue="All" label="Posts">
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Specific Post">Specific Post</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Data Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h5">Total Accounts</Typography>
            <Typography variant="h3">2,104</Typography>
            <Typography color="green">↑ 20%</Typography>
            <Typography>vs previous 30 days</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h5">Orders per Month</Typography>
            <Typography variant="h3">37</Typography>
            <Typography color="green">↑ 15</Typography>
            <Typography>vs previous 30 days</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h5">Average Contract</Typography>
            <Typography variant="h3">$1,553</Typography>
            <Typography color="green">↑ 7.3%</Typography>
            <Typography>vs previous 30 days</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h5">Growth Rate</Typography>
            <Typography variant="h3">8.29%</Typography>
            <Typography color="green">↑ 1.3%</Typography>
            <Typography>vs previous 30 days</Typography>
          </Paper>
        </Grid>
      </Grid>

        {/* Charts */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Sales Growth by Market Segment</Typography>
            <Line data={lineData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Sales per Rep</Typography>
            <Bar data={barData} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};    


export default AllApps;