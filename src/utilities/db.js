import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO, () => {
  console.log("Connected to MongoDB");
});
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;