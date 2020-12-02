import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import morgan from 'morgan';

import connectDB from './config/connectDB.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import rantsRoutes from './routes/rantsRoutes.js';

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

  // Express Middlewares for Body-Parser, JSON, and Logging
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  if (NODE_ENV === 'development') app.use(morgan('dev'));

  // Primary Route Hitters
  // Forward all URLs from /api/rants to rant controllers
  app.use('/api/rants', rantsRoutes);

  // Serve the built React SPA as a static file from the server
  if (NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (_, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

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
