import { Box } from '@mui/material';
import { Header } from '../../Components/header';
import BarChart from '../../Components/barChart';

const Bar = () => {
  return (
    <Box m={'20px'}>
      <Header title="Seifa Bar Chart" subTitle="Seifa 2011 vs 2016" />
      <Box height={'75vh'} width={'100vh'}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
