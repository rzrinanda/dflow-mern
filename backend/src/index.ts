import cors from "cors";
import express, { application } from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import { loggerMiddleware } from "./middleware/logger.middleware";
import { ProductRoute, CustomerRoute } from "./routes";

dotenv.config();
if (!process.env.PORT) {
  console.log(`Error to get ports`);
  process.exit(1);
}

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const dbUri: string = process.env.MONGO || "";
console.log(dbUri);
mongoose.connect(dbUri, (err: any) => {
  if (err) {
    console.log("Error:", err.message);
  } else {
    console.log(`Connecting to MONGO`);
  }
});
// app.use(loggerMiddleware());

const router = express.Router();
router.use("/products",ProductRoute);
router.use("/users",CustomerRoute);

const PORT: number = parseInt(process.env.PORT as string, 10);
const server = app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
app.get("/", (req, res) => res.send("Welcome to Express using Typescript"));
app.use("/", router);
