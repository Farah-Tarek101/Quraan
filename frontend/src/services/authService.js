import axios from "axios";

// ✅ Use environment variable if available, otherwise fallback to local dev URL
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://quraan-r9c3.vercel.app";

const API_URL = `${BASE_URL}/auth`;

// ✅ Automatically attach Authorization header if token is found
const authHeaders = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

// 🟢 Register new user
const register = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/register`, {
    username,
    email,
    password,
  });
  return response.data;
};

// 🟢 Login user
const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

// 🟡 Mark / Unmark Ayah
const markAyah = async (surahNumber, ayahNumber, token) => {
  const response = await axios.put(
    `${API_URL}/markAyah`,
    { surahNumber, ayahNumber },
    authHeaders(token)
  );
  return response.data;
};

// 🔵 Get all marked Ayahs
const getMarkedAyahs = async (token) => {
  const response = await axios.get(`${API_URL}/markedAyahs`, authHeaders(token));
  return response.data;
};

const authService = {
  register,
  login,
  markAyah,
  getMarkedAyahs,
};

export default authService;

