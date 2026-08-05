import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Query hang hone se bachne ke liye — agar DB connect nahi hai
    // toh turant fail karega, silently pending nahi rahega
    mongoose.set("bufferCommands", false);

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 8000,
    });

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // loudly crash instead of running broken
  }
};

export default connectDB;
