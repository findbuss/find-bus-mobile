import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_SPTRANS_API_URL;

console.log(baseURL);

export async function getBusShape(shapeID) {
  const response = await axios.get(`${baseURL}shapes/${shapeID}`);
  return response.data;
}

export async function getStopDetails(stopId) {
  const response = await axios.get(`${baseURL}stops/${stopId}`);
  return response.data;
}

export async function getStopsByRouteId(lineId) {
  const response = await axios.get(`${baseURL}line/${lineId}`);
  return response.data;
}

export async function getTrips(routeId) {
  const response = await axios.get(`${baseURL}api/trips?route_id=${routeId}`);
  return response.data;
}

export async function getRoute(routeId) {
  const response = await axios.get(`${baseURL}api/routes?route_id=${routeId}`);
  return response.data;
}

export async function getStopsByLonLat(lon, lat) {
  const response = await axios.get(`${baseURL}stops`);
  console.log(response.data);

  return response.data;
}
