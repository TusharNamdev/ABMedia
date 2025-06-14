import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTours, selectTours } from '../redux/tourSlice';

const TourPackages = () => {
  const dispatch = useDispatch();
  const tours = useSelector(selectTours);
  const loading = useSelector((state) => state.tours.loading);
  const error = useSelector((state) => state.tours.error);

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  console.log("✅ TOURS data in component:", tours); // Debug print

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-800">
        Top Tour Packages
      </h2>
      <p className="text-center mt-2 text-gray-600 text-sm">
        Explore our specially crafted tour experiences.
      </p>

      {loading && <p className="text-center mt-6">Loading...</p>}
      {error && <p className="text-center mt-6 text-red-600">{error}</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {(Array.isArray(tours) ? tours : []).map((tour, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={tour?.image || '/fallback.jpg'}
              alt={tour?.title || 'Tour'}
              className="w-full h-44 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/fallback.jpg';
              }}
            />
            <div className="p-4">
              <h3 className="text-md font-bold text-center text-cyan-700 mb-3">{tour.title}</h3>
              <button className="bg-teal-400  hover:bg-teal-500 text-white text-sm font-medium px-4 py-2 ml-16 md:ml-10 lg:ml-32  rounded-full">
                VIEW DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TourPackages;
