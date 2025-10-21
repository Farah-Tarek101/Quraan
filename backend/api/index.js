import express from 'express';
import app from '../server.js';

const api = express();

api.use('/', app); // Reverted to correct syntax

export default api;
