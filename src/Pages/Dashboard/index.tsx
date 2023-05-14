import { Box, Button, useTheme } from "@mui/material";
import { Header } from "../../Components/header";
import { colourTokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import DashboardBox from "../../Components/dashboardBox";
const Dashboard = () => {
  const theme = useTheme();
  const colours = colourTokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subTitle="Welcome"></Header>
        <Box>
          <Button
            sx={{
              backgroundColor: colours.blueAccent[700],
              color: colours.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px"
            }}
          >
            {/* <DownloadOutlinedIcon sx={{ mr: "10px" }} /> */}
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <DashboardBox
          icon={<EmailIcon />}
          infoBoxTitle={"12"}
          infoBoxSubTitle={"Emails Sent"}
        />
        <DashboardBox
          icon={<PointOfSaleIcon />}
          infoBoxTitle={"s"}
          infoBoxSubTitle={"s"}
        />
        <DashboardBox
          icon={<PersonAddIcon />}
          infoBoxTitle={"z"}
          infoBoxSubTitle={"z"}
        />
        <DashboardBox
          icon={<TrafficIcon />}
          infoBoxTitle={"c"}
          infoBoxSubTitle={"c"}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
