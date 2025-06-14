import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './src/config/db.js'; // ✅ Correct path
import destinationRoutes from './src/routes/destinationRoutes.js';
import packageRoutes from './src/routes/packageRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB(); // ✅ MongoDB connected

// 🖼️ Serve static images from /public/images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// 🔗 API Routes
app.use('/api/destinations', destinationRoutes);
app.use('/api/packages', packageRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
