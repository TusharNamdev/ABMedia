import React from "react";
import { useSelector } from "react-redux";

export default function TourPackages() {
  const tours = useSelector((state) => state.tours.list);

  return (
    <div className="max-w-7xl mx-auto text-center mt-8">
      <h2 className="text-2xl md:text-4xl font-bold text-teal-700 mb-2">
        Top Selling Tour Packages of India
      </h2>
      <p className="text-gray-600 mb-10">
        Stay updated with our latest news and happenings through Informe.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300"
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-52 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold text-teal-700 mb-3">
                {tour.title}
              </h3>
              <button className="bg-teal-400 hover:bg-teal-500 text-white text-sm font-medium px-4 py-2 rounded-full">
                VIEW DETAILS
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
