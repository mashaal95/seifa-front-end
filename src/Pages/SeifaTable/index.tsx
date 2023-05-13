import { Box, Typography, useTheme } from "@mui/material";
import AdminIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityIcon from "@mui/icons-material/SecurityOutlined";
import { Header } from "../../Components/header";
import { colourTokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { mockSeifa } from "../../Data/mockData";
import { ISeifa2011 } from "../../Components/Models/seifa2011";
import seifaService from "../../Service/seifaService";
import { useEffect, useState } from "react";

const Table = () => {
  const theme = useTheme();
  const colours = colourTokens(theme.palette.mode);

  const columns = [
    { field: "seifaId", headerName: "ID" },
    { field: "RelativeDisadvantage", headerName: "Disadvantage 2011", flex: 1 },
    {
      field: "Locations",
      headerName: "Place Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "LocalGovtAreas",
      headerName: "State Name",
      flex: 1
    }
  ];

  const [seifaData, setSeifaData] = useState<ISeifa2011[]>([
    {
      id: 1,
      LocalGovtAreas: "New South Wales",
      Locations: "Albury (C)",
      RelativeDisadvantage: 979,
      RelativeAdvantage: 967
    }
]
  );

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

  // retrieving data from Products
  useEffect(() => {
    seifaService.getEachState("Victoria").then((seifaData) => {
      setSeifaData(seifaData);
    });
  }, [setSeifaData]);

 
  const rows = seifaData.map((seifa) => {
    return {
      id: seifa.id,
      RelativeDisadvantage: seifa.RelativeDisadvantage,
      Locations: seifa.Locations,
      LocalGovtAreas: seifa.LocalGovtAreas
    };
  });
  console.log(rows)
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
        <DataGrid rows={rows} columns={columns} ></DataGrid>
      </Box>
    </Box>
  );
};
export default Table;
