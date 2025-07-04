const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECT); // Removed deprecated options
    console.log("✅ Connected to DB");
  } catch (error) {
    console.error("❌ DB Connection Error:", error);
    process.exit(1);
  }
}

module.exports = connectToDb;
