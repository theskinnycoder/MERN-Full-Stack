import mongoose from 'mongoose';

// An async connection function : Calls and Connects to the DB, before listening for any requests
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
