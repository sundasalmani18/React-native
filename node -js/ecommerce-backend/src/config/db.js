import mongoose from "mongoose";
import dns from "dns";
dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
])

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(" MongoDB Connected");
  } catch (error) {
    console.log(" MongoDB Error:", error.message);
  }
};

export default connectDB;


// username:sundas
// Password:sundas



