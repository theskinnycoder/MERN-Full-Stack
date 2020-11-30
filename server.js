import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import connectDB from './config/connectDB.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import blogRoutes from './routes/blogRoutes.js';

// DotENV Module Config
dotenv.config();

// Extract the required variables
const { PORT, NODE_ENV } = process.env;

// Main Async IIFE
(async () => {
  // Connect to the DataBase
  await connectDB();

  // Initialise the Express Web-App Instance
  const app = express();

  // Express Middlewares for
  app.use(express.json()); // Parse and Stringify JSON
  app.use(express.urlencoded({ extended: false })); // Parse and Stringify JSON
  if (NODE_ENV === 'development') app.use(morgan('dev')); // Logging

  // Primary Route Hitters
  // Forward all URLs from /api/articles to blog the controllers
  app.use('/api/articles', blogRoutes);

  // Custom Error Handlers
  app.use(notFound);
  app.use(errorHandler);

  // Listen for requests
  app.listen(
    PORT,
    console.log(
      `Server up and running in ${NODE_ENV} mode and listening for requests on http://localhost:${PORT}/`
    )
  );
})();
