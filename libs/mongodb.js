import mongoose from "mongoose";

let isConnected = false; // 🔥 Caching the connection status

const connectMongoDb = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    isConnected = db.connections[0].readyState === 1; // ✅ Mark as connected
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectMongoDb;
