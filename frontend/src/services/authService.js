import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const register = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    username,
    email,
    password,
  });
  return response.data;
};

const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
  return response.data;
};

const markAyah = async (surahNumber, ayahNumber, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}/markAyah`, { surahNumber, ayahNumber }, config);
  return response.data;
};

const getMarkedAyahs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URL}/markedAyahs`, config);
  return response.data;
};

const authService = {
  register,
  login,
  markAyah,
  getMarkedAyahs,
};

export default authService;
