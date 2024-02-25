import express from "express";
import cors from "cors";
import { SERVER_PORT } from "./Config";
import { AppDataSource } from "./DB";
import errorHandler from "./Middlewares/error-handler";
import UserRouter from "./Routes/users";
import PostRouter from './Routes/post'
const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(SERVER_PORT, async () => {
  AppDataSource.initialize().then(() => {
    console.log("database initilized.");
  });

  app.use("/api/users", UserRouter);
  app.use("/api/posts", PostRouter);
  app.use(errorHandler);
  console.log(`API server is running at ${SERVER_PORT}`);
});
