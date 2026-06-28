import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

// Connect MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

console.log("EMAIL_USER =", process.env.EMAIL_USER);
console.log("EMAIL_PASS =", process.env.EMAIL_PASS);
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
