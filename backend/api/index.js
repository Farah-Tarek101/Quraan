import express from 'express';
import app from '../server.js';

const api = express();

api.use('/', app); // Changed from '/api' to '/'

export default api;
