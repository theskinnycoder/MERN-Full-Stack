import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';
import blogRoutes from './routes/blogRoutes';
import connectDB from './config/connectDB';
import morgan from 'morgan';
import colors from 'colors';

// DotENV Module Config
config({ path: './config/config.env' });

// Extract the required variables
const { PORT, NODE_ENV } = process.env;

// Main Async Function
(async () => {
	// Initialise the Express Web-App Instance
	const app = express();

	// Middlewares to use JSON, Encode Forms Data and Logging
	app.use(json());
	app.use(urlencoded({ extended: false }));
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

	// Blog Routes : Primary Route Hitter
	app.use('/blog', blogRoutes);

	// Connect to the DataBase
	await connectDB();

	// Listen for requests
	app.listen(
		PORT,
		console.log(
			`Server running in ${NODE_ENV} mode and listening for requests on http://localhost:${PORT}/...`
				.green.bold
		)
	);
})();
