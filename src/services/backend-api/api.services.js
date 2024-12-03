import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_DATABASE_API_URL;

export async function loginUser(email, senha) {
  console.log("teste2");
  try {
    const res = await axios.post(`${baseURL}login`, {
      email,
      senha,
    });
    return res.data.usuario.id_usuario;
  } catch (error) {
    console.log(error);

    return false;
  }
}

export async function registerUser(displayName, email, senha) {
  console.log("teste2");
  try {
    const res = await axios.post(`${baseURL}usuario`, {
      nome: displayName,
      email,
      senha,
    });
    return res.data.id_usuario;
  } catch (error) {
    console.log(error);

    return false;
  }
}

export async function getUser(userId) {
  try {
    const res = await axios.get(`${baseURL}usuario/${userId}`);
    return res.data;
  } catch (error) {
    return error;
  }
}

export function getBusRoutes(userId) {}

export function setBusRoute(userId, routeId) {}

export function deleteBusRoute(userId, routeId) {}

export function getStops(userId) {}

export function setStop(userId, stopId) {}

export function deleteStop(userId, stopId) {}

export function setToBusHistory(userId, routeId) {}

export function setToStopHistory(userId, stopId) {}

export function getBusHistory(userId) {}

export function getStopHistory(userId) {}
