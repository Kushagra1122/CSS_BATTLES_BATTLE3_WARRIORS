import React, { useState } from "react";

const testimonials = [
  {
    quote: "Stellara transformed how we work, it's amazing!",
    name: "Jane Doe",
  },
  {
    quote: "I love how easy it is to use. Highly recommend!",
    name: "John Smith",
  },
  { quote: "The best solution for our business needs.", name: "Sarah Lee" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white text-center">
      <h2 className="text-5xl font-extrabold mb-12">What Our Users Say</h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="whitespace-nowrap transition-transform duration-700"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="inline-block w-full text-center px-4">
                <p className="text-xl italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
