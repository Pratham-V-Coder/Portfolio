import dotenv from "dotenv";
<<<<<<< HEAD
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

// DB connect hone ka wait karo, tabhi server start karo —
// warna requests aane lag sakti hain jab DB abhi connect hi nahi hua
const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer();
=======
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

// Connect MongoDB
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
>>>>>>> 8ff2cbabb63e3dc363c67e93fb1bb524c7290ee0
