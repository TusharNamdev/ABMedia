import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations, selectDestinations } from '../redux/destinationsSlice';

const Destinations = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(selectDestinations);
  const loading = useSelector((state) => state.destinations.loading);
  const error = useSelector((state) => state.destinations.error);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-800">
        Explore Most Popular Destinations
      </h2>
      <p className="text-center mt-2 text-gray-600 text-sm">
        Plan your perfect trip with our best-selling destinations.
      </p>

      {loading && <p className="text-center mt-6">Loading...</p>}
      {error && <p className="text-center mt-6 text-red-600">{error}</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {(destinations || []).map((dest, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={dest?.image || '/fallback.jpg'}
              alt={dest?.name || 'Destination'}
              className="w-full h-44 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/fallback.jpg';
              }}
            />
            <div className="p-4">
              <h3 className="text-sm font-bold text-cyan-700">{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
