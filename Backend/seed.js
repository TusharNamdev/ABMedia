import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import Destination from './src/models/Destination.js';
import destinations from './src/data/destinations.js';

dotenv.config();

await connectDB();

try {
  await Destination.deleteMany();
  await Destination.insertMany(destinations);
  console.log("✅ Data seeded successfully!");
  process.exit();
} catch (error) {
  console.error("❌ Error seeding data:", error);
  process.exit(1);
}
