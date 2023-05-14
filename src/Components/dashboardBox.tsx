import { Box, useTheme } from "@mui/material";
import InfoBox from "./infoBox";
import { colourTokens } from "../theme";

const DashboardBox = (props: {
  icon: React.ReactNode;
  infoBoxTitle: string;
  infoBoxSubTitle: string;
}) => {
  const theme = useTheme();
  const colours = colourTokens(theme.palette.mode);

  return (
    <Box
      sx={{
        gridColumn: "span 3",
        backgroundColor: colours.primary[400]
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <InfoBox
        title={props.infoBoxTitle}
        subtitle={props.infoBoxSubTitle}
        icon={props.icon}
      />
    </Box>
  );
};
export default DashboardBox;
