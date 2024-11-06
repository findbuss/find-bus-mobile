import axios from "axios";

const baseURL = "http://192.168.1.107:5000/";

export async function getBusShape(shapeID) {
  const response = await axios.get(`${baseURL}api/shapes?shape_id=${shapeID}`);
  return response.data;
}

export async function getStopsByLonLat(lon, lat) {
  const response = await axios.get(
    `${baseURL}api/stops?stop_lat=${lat}&stop_lon=${lon}&bounding_box_side_m=2000`
  );

  return response.data;
}
