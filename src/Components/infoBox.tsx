import { Box, Typography, useTheme } from "@mui/material";
import { colourTokens } from "../theme";

const InfoBox = (props: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) => {
  const theme = useTheme();
  const colours = colourTokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {props.icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colours.grey[100] }}
          >
            {props.title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colours.greenAccent[500] }}>
          {props.subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoBox;
