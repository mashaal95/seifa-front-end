import axios from "axios";
import { SeifaAllModel, SeifaStateModel } from "../Components/Models/seifa2011";
const baseUrl = "https://localhost:7214/api/Seifa";

// getting all the responses for each particular state from the API
const getEachStateData = (state: string) => {
  const request = axios.get(baseUrl + "/" + state);
  return request.then((response: { data: SeifaStateModel[] }) => response.data);
};

const getAllStateData = (state: string) => {
  const request = axios.get(baseUrl + "/allData?state=" + state);
  return request
    .then((response: { data: SeifaAllModel[] }) => response.data)
    .catch((err) => {
      alert(err + " You might not be connected to the API");
    });
};

const getStates = () => {
  const request = axios.get(baseUrl + "/allStates");
  return request
    .then((response: { data: [] }) => response.data)
    .catch((err) => {
      alert(err + " You might not be connected to the API");
    });
};

const getDashboardStats = () => {
  const request = axios.get(baseUrl + "/dashboard");
  return request
    .then((response: { data: [] }) => response.data)
    .catch((err) => {
      alert(err + " You might not be connected to the API");
    });
};

const seifaService = {
  getEachStateData,
  getStates,
  getAllStateData,
  getDashboardStats
};

export default seifaService;
