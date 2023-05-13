import axios from 'axios';
import { ISeifa2011 } from '../Components/Models/seifa2011';
// import { Product } from '../components/interfaces';
const baseUrl = 'https://localhost:7214/api/Seifa2011';

// getting all the responses for each particular state from the API
const getEachState = (state: string) => {
  const request = axios.get(baseUrl + '/' + state);
  return request.then((response: { data: ISeifa2011[] }) => response.data);
};


// get specific Product
// const getProduct = (id: string) => {
//   const request = axios.get(`${baseUrl}/${id}`);
//   return request.then((response: { data: Product }) => response.data);
// };

// // deleting a Product
// const removeProduct = (id: string) => {
//   const request = axios.delete(`${baseUrl}/${id}`);
//   return request;
// };

// // creating a new Product
// const createProduct = (newObject: Product) => {
//   const request = axios.post(baseUrl, newObject);
//   return request.then((response: { data: Product }) => response.data);
// };

// // updating a Product
// const updateProduct = (id: string, newObject: Product) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject);
//   return request.then((response: { data: Product }) => response.data);
// };

const seifaService = {
  getEachState
  // getProduct,
  // removeProduct,
  // createProduct,
  // updateProduct
};

export default seifaService;
