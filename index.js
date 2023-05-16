import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import equipmentRoute from "./routes/equipments.js";
import usersRoute from "./routes/users.js";

const app = express();
const port = 8080;
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("connected");
});

app.get("/", (req, res) => {
  res.send("hello mate");
});

//middleware

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/equipments", equipmentRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  connect();
  console.log("connectio0n started");
});
