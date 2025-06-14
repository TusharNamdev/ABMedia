import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import Package from './src/models/Package.js';
import packages from './src/data/packages.js';

dotenv.config();
await connectDB();

try {
  await Package.deleteMany();
  await Package.insertMany(packages);
  console.log("✅ Package data seeded!");
  process.exit();
} catch (error) {
  console.error("❌ Error seeding packages:", error);
  process.exit(1);
}
