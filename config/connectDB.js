import { connect } from 'mongoose';
import { config } from 'dotenv';

// DotENV Module Config
config({ path: './config/config.env' });

// Extract the required variables
const { MONGO_URI } = process.env;

// Async Connection Function
const connectDB = async () => {
	try {
		const conn = await connect(MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
		});
		console.log(`MongoDB Connected...${conn.connection.host}`.white.bold);
	} catch (err) {
		console.log(`${err}`.red);
		process.exit(1);
	}
};

// Export the connection function to call and connect to the DB, before listening for requests
export default connectDB;
