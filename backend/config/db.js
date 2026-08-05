import mongoose from "mongoose";

const connectDB = async () => {
  try {
<<<<<<< HEAD
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
=======
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);

    process.exit(1);
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
  }
};

export default connectDB;
