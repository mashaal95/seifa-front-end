import { SeifaAllModel } from "../../Components/Models/seifa2011";
import seifaService from "../../Service/seifaService";
import { useEffect, useState } from "react";
import BaseTable from "../../Components/table";

const AllTable = () => {
  const [selectedState, setSelectedState] = useState("Victoria");
  const [stateNames, setStateNames] = useState([]);

  const [seifaData, setSeifaData] = useState<SeifaAllModel[]>([
    {
      Year: 2011,
      StateName: "s",
      PlaceName: "s",
      DisadvantageScore: 1,
      AdvantageScore: 2
    }
  ]);

  const handleStateChange = (event: any) => {
    setSelectedState(event.target.value);
  };

  const columns = [
    { field: "Year", headerName: "Year", flex: 1 },
    {
      field: "StateName",
      headerName: "State Name",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "PlaceName",
      headerName: "Place Name",
      flex: 1
    },
    {
      field: "DisadvantageScore",
      headerName: "Disadvantage Score",
      flex: 1
    },
    {
      field: "AdvantageScore",
      headerName: "Advantage Score"
    }
  ];

  // retrieving data from the Seifa tables
  useEffect(() => {
    seifaService.getAllStateData(selectedState).then((seifaAllData) => {
      seifaAllData && setSeifaData(seifaAllData);
    });

    seifaService.getStates().then((states) => {
      states && setStateNames(states);
    });
  }, [setSeifaData, selectedState]);

  const rows = seifaData.map((seifa) => {
    return {
      Year: seifa.Year,
      StateName: seifa.StateName,
      PlaceName: seifa.PlaceName,
      DisadvantageScore: seifa.DisadvantageScore,
      AdvantageScore: seifa.AdvantageScore
    };
  });

  return (
    <BaseTable
      stateNames={stateNames}
      rows={rows}
      columns={columns}
      title={"Seifa All Data"}
      subTitle={"All Data"}
      stateChange={handleStateChange}
      selectedState={selectedState}
    />
  );
};
export default AllTable;
