import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connected to DB");
  });

  const MONGO_URL = "mongodb://127.0.0.1:27017/dailydeals";

  await mongoose.connect(MONGO_URL);
};

export default connectDB;
