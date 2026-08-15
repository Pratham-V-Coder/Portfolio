import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Prevent queries from hanging when MongoDB is not connected
    mongoose.set("bufferCommands", false);

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 8000,
    });

    console.log(`✅ MongoDB Connected : ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);

    // Stop the server if database connection fails
    process.exit(1);
  }
};

export default connectDB;
