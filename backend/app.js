import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRouter from "./routers/contactRouter.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Backend Running 🚀",
  });
});

app.use("/api/v1/contact", contactRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
