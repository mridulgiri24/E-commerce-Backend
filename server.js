import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import { ExpressError } from "./utils/expressError.js";

// App Config
const app = express();
const port = process.env.PORT || 3000;

//DB Connection
connectDB();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("api working");
});

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "page Not Found"));
});

// error handler middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).json({ message: message });
});

app.listen(port, (req, res) => console.log("Server Started on PORT:" + port));
