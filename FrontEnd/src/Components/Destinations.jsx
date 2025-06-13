import React from 'react';
import { useSelector } from 'react-redux';
import { selectDestinations } from '../redux/destinationsSlice';

const Destinations = () => {
    const destinations = useSelector(selectDestinations);

    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-800">
                Explore Most Popular Destinations
            </h2>
            <p className="text-center mt-2 text-gray-600 text-sm">
                Plan your perfect trip with our most loved and best-selling tour packages.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {destinations.map((dest, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
                    >
                        <img src={dest.image} alt={dest.name} className="w-full h-44 object-cover" />
                        <div className="p-4">
                            <h3 className="text-sm font-bold text-cyan-700">{dest.name}</h3>
                            <p className="text-sm text-gray-700">
                                Starting From <span className="font-semibold text-green-600">{dest.price}</span>
                            </p>
                        </div>
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
        </section>
    );
};

export default Destinations;
