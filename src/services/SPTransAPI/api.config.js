import axios from "axios";

const api = axios.create({
  baseURL: process.env.SPTRANS_API_URL,
});
// Interceptores de requisição
api.interceptors.request.use(
  async (config) => {
    try {
      const authResponse = await axios.post(
        `/Login/Autenticar?token=${process.env.SPTRANS_API_KEY}`
      );

      if (!authResponse.data) {
        throw new Error("Autenticação falhou");
      }

      return config;
    } catch (error) {
      return Promise.reject({ status: 401, message: "Não autorizado" });
    }
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

// Interceptores de resposta
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Você pode tratar erros globais aqui
    return Promise.reject(error.response?.data);
  }
);

export default api;
