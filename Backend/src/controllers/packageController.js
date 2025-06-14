import Package from '../models/Package.js';
import packages from '../data/packages.js';

export const getPackages = async (req, res) => {
  try {
    
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch packages' });
  }
};
