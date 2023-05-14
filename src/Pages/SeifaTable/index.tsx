import { Box, MenuItem, Select, Typography, useTheme } from "@mui/material";
import AdminIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityIcon from "@mui/icons-material/SecurityOutlined";
import { Header } from "../../Components/header";
import { colourTokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { Seifa2011Model, StateModel } from "../../Components/Models/seifa2011";
import seifaService from "../../Service/seifaService";
import { useEffect, useState } from "react";

const Table = () => {
  const theme = useTheme();
  const colours = colourTokens(theme.palette.mode);
  const [selectedState, setSelectedState] = useState("Victoria");

  const [seifaData, setSeifaData] = useState<Seifa2011Model[]>([
    {
      Disadvantage2011: 1,
      Disadvantage2016: 2,
      Comparison: 1,
      PlaceName: "s",
      StateName: "s"
    }
  ]);

  const [stateNames, setStateNames] = useState([]);

  const handleStateChange = (event: any) => {
    setSelectedState(event.target.value);
  };
  console.log(selectedState);
  const columns = [
    { field: "Disadvantage2011", headerName: "Disadvantage 2011", flex: 1 },
    {
      field: "Disadvantage2016",
      headerName: "Disadvantage 2016",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "Comparison",
      headerName: "Comparison between 2016 to 2011",
      flex: 1
    },
    {
      field: "PlaceName",
      headerName: "Place Name",
      flex: 1
    },
    {
      field: "StateName",
      headerName: "State Name",
      flex: 1
    }
  ];

  // retrieving data from the Seifa tables
  useEffect(() => {
    seifaService.getStates().then((states) => {
      if (states != null || undefined) {
        setStateNames(states);
      }
    });
    seifaService.getEachStateData(selectedState).then((seifaData) => {
      setSeifaData(seifaData);
    });
  }, [setSeifaData, selectedState]);

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

  const rows = seifaData.map((seifa) => {
    return {
      Disadvantage2011: seifa.Disadvantage2011,
      Disadvantage2016: seifa.Disadvantage2016,
      Comparison: seifa.Comparison,
      PlaceName: seifa.PlaceName,
      StateName: seifa.StateName
    };
  });

  return (
    <Box m="20px">
      <Header title="Seifa 2011 vs Seifa 2016" subTitle="Seifa"></Header>
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
            value={selectedState}
            onChange={handleStateChange}
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="">All States</MenuItem>
            {stateNames &&
              stateNames.map((stateName) => (
                <MenuItem key={stateName} value={stateName}>
                  {stateName}
                </MenuItem>
              ))}
          </Select>
        </Box>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row: any) => generateRandom()}
        ></DataGrid>
      </Box>
    </Box>
  );
};
export default Table;
