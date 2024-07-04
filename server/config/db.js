import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("your_connection_string", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
