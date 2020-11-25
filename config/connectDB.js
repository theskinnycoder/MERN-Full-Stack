import dotenv from 'dotenv';
import mongoose from 'mongoose';

// DotENV Module Config
dotenv.config({ path: './config/config.env' });

// Export the Async Connection Function to call and connect to the DB, before listening for requests
export default async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log(`Connected to the MongoDB DataBase ${conn.connection.name}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
