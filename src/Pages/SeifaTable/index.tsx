import { SeifaStateModel } from "../../Components/Models/seifa2011";
import seifaService from "../../Service/seifaService";
import { useEffect, useState } from "react";
import BaseTable from "../../Components/table";

const Table = () => {
  const [selectedState, setSelectedState] = useState("Victoria");

  const [stateNames, setStateNames] = useState([]);
  const [seifaData, setSeifaData] = useState<SeifaStateModel[]>([
    {
      Disadvantage2011: 1,
      Disadvantage2016: 2,
      Comparison: 1,
      PlaceName: "s",
      StateName: "s"
    }
  ]);

  const handleStateChange = (event: any) => {
    setSelectedState(event.target.value);
  };

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
      headerName: "State Name"
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
    <BaseTable
      rows={rows}
      columns={columns}
      title={"Seifa 2016 vs 2011"}
      subTitle={"A Comparison"}
      selectedState={selectedState}
      stateChange={handleStateChange}
      stateNames={stateNames}
    />
  );
};
export default Table;
