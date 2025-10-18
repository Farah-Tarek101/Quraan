import express from 'express';
import app from '../server.js';

const api = express();

api.use('/api', app);

export default api;
