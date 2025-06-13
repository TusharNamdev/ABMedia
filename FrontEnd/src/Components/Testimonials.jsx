import React from "react";
import { useSelector } from "react-redux";

export default function Testimonials() {
  const testimonials = useSelector((state) => state.testimonials.list);

  return (
    <div className="max-w-7xl mx-auto mt-8 pb-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full mx-auto -mt-14 mb-4 border-4 border-white shadow"
            />
            <p className="text-sm text-gray-700 mb-4">{item.message}</p>
            <p className="font-bold">{item.name}</p>
            <p className="text-gray-600 text-sm">{item.designation}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6 gap-4">
        <button className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-xl">←</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
}