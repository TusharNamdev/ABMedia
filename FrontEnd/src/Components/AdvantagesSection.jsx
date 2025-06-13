import React from "react";
import { useSelector } from "react-redux";

export default function AdvantagesSection() {
  const advantages = useSelector((state) => state.advantages.items);

  return (
    <div className="bg-teal-300 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Advantages</h2>
        <p className="text-sm md:text-base mb-10 max-w-xl mx-auto">
          You can rely on our experience and the quality of services we provide. Here are other reasons to book tours at Treat Holidays
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {advantages.map((adv) => (
            <div key={adv.id} className="bg-white rounded-full w-24 h-24 mx-auto flex items-center justify-center">
              <img src={adv.icon} alt={adv.title} className="w-12 h-12" />
            </div>
          ))}

          {advantages.map((adv) => (
            <div key={adv.id} className="text-center mt-4">
              <h3 className="text-white font-semibold text-lg mb-2">{adv.title}</h3>
              <p className="text-white text-sm">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
