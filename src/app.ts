import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes";

export default function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use("/api", userRouter);

  return app;
}
