import mongoose from "mongoose";

const connect = async () => {
  try {
    console.log("connecting")
    await mongoose.connect(process.env.MONGO);
    console.log("connected")
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;