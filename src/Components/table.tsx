import { Box, Typography, Select, useTheme, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Header } from "./header";
import { colourTokens } from "../theme";

const BaseTable = (props: {
  rows: any;
  columns: any;
  title: string;
  subTitle: string;
  selectedState: string;
  stateChange: (event: any) => void;
  stateNames: never[];
}) => {
  const theme = useTheme();
  const colours = colourTokens(theme.palette.mode);

  function generateRandom() {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  return (
    <Box m="20px">
      <Header title={props.title} subTitle={props.subTitle}></Header>
      <Box
        m="40px 0 0 0"
        height={"75vh"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .name-column--cell": {
            color: colours.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colours.blueAccent[700],
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colours.primary[400]
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colours.blueAccent[700]
          },
          "& .MuiCheckbox-root": {
            color: `${colours.greenAccent[200]} !important`
          }
        }}
      >
        <Box sx={{ marginBottom: "20px" }}>
          <Typography>Select State:</Typography>
          <Select
            value={props.selectedState}
            onChange={props.stateChange}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="">All States</MenuItem>
            {props.stateNames &&
              props.stateNames.map((stateName) => (
                <MenuItem key={stateName} value={stateName}>
                  {stateName}
                </MenuItem>
              ))}
          </Select>
        </Box>
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          getRowId={(row: any) => generateRandom()}
        ></DataGrid>
      </Box>
    </Box>
  );
};

export default BaseTable;
