import axios from "axios";

const baseURL = "http://192.168.80.189:5000/";

export async function getBusShape(shapeID) {
  const response = await axios.get(`${baseURL}api/shapes?shape_id=${shapeID}`);
  return response.data;
}

export async function getStopDetails(stopId) {
  const response = await axios.get(`${baseURL}api/stops?stop_id=${stopId}`);
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
  const response = await axios.get(
    `${baseURL}api/stops?stop_lat=${lat}&stop_lon=${lon}&bounding_box_side_m=2000`
  );

  return response.data;
}
