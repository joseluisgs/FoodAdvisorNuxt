import axios from 'axios';
import API_URL from './api.config';

// El objeto con todas las funciones de la API
const api = {};

// Petición GET Genérica
async function apiGet (url) {
  // Configuración de la petición
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
  // Endpoint a consumir
  const urlCall = API_URL + url;
  try {
    const response = await axios.get(urlCall, config);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// GET de Restaurantes
api.getRestaurants = () => {
  return apiGet('restaurants');
};

export default api;
