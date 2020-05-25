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

// Petición POST Genérica
async function apiPost (url, payload) {
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: payload
  };
  const urlCall = API_URL + url;
  try {
    const response = await axios.post(urlCall, config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// Petición PUT Genérica
async function apiPut (url, payload) {
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: payload
  };
  const urlCall = API_URL + url;
  try {
    const response = await axios.put(urlCall, config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// GET de Restaurantes
api.getRestaurants = () => {
  return apiGet('restaurants');
};

// POST Suscribir usuario
api.postSubcribeUser = (payload) => {
  return apiPost('users', payload);
};

// PUT Actualizar Likes de Restaurante
api.putSumRestaurantLikes = (payload) => {
  const restaurantId = payload.id;
  const url = `restaurants/${restaurantId}`;
  return apiPut(url, payload.data);
};

export default api;
