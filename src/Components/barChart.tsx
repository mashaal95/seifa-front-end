import { useTheme } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';
import { colourTokens } from '../theme';
import { mockSeifa as data } from '../Data/mockData';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = colourTokens(theme.palette.mode);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/data').then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <ResponsiveBar
      data={data}
      keys={['value']}
      indexBy="name"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: 'nivo' }}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      animate={true}
    />
  );
};

export default BarChart;
