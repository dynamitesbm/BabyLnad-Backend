const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB successfully");
  } catch (err) {
    console.error("MongoDB connection:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

// adepegbaadeyemi3
// x3H8WnGm7aZPTm0h
// mongodb+srv://adepegbaadeyemi3:x3H8WnGm7aZPTm0h@cluster0.1o9ca.mongodb.net/Baby-Toys?retryWrites=true&w=majority&appName=Cluster0
