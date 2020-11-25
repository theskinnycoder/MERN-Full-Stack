import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import connectDB from './config/connectDB.js';
import blogRoutes from './routes/blogRoutes.js';

// DotENV Module Config
dotenv.config({ path: './config/config.env' });

// Extract the required variables
const { PORT, NODE_ENV } = process.env;

// Main Async IIFE
(async () => {
  // Connect to the DataBase
  await connectDB();

  // Initialise the Express Web-App Instance
  const app = express();

  // Middlewares
  app.use(express.json()); // Parse and Stringify JSON
  app.use(express.urlencoded({ extended: false })); // EnCode Form Input Data
  if (NODE_ENV === 'development') app.use(morgan('dev')); // Logging

  // Blog Routes : Primary Route Hitter
  app.use('/blog', blogRoutes);

  // Listen for requests
  app.listen(
    PORT,
    console.log(
      `Server up and running in ${NODE_ENV} mode and listening for requests on http://localhost:${PORT}/`
    )
  );
})();
