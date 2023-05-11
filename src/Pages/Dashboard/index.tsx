import { Box } from '@mui/material';
import { Header } from '../../Components/header';

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subTitle="Welcome"></Header>
      </Box>
    </Box>
  );
};

export default Dashboard;
