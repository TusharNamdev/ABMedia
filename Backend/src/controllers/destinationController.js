import Destination from '../models/Destination.js';
import destinations from '../data/destinations.js';

export const getDestinations = async (req, res) => {
  try {
    // const data = await Destination.find();
    // if (data.length === 0) {
    //   await Destination.insertMany(destinations);
    //   return res.json(destinations);
    // }
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
