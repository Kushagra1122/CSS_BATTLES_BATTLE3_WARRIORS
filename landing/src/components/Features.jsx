import React from "react";
import { FaRocket, FaStar } from "react-icons/fa"; // Example Icons

const Features = () => {
  return (
    <section id="features" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 animate-fade-in">
          Why Choose <span className="text-purple-500">Stellara</span>?
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Feature 1 */}
          <div className="feature-card">
            <FaRocket className="feature-icon text-purple-500" />
            <h3 className="text-2xl font-semibold mt-4 mb-2">
              Fast Deployment
            </h3>
            <p className="text-lg opacity-80">
              Claim your star in minutes and receive a personalized star
              certificate instantly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <FaStar className="feature-icon text-yellow-500" />
            <h3 className="text-2xl font-semibold mt-4 mb-2">
              Exclusive Naming
            </h3>
            <p className="text-lg opacity-80">
              Name a star that’s visible from your location and keep it uniquely
              yours forever.
            </p>
          </div>

          
        </div>
      </div>

      <style jsx>{`
        /* Animation for Section Title */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        /* Feature Card Hover Effects */
        .feature-card {
          background-color: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 1rem;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1);
        }

        /* Feature Icon Styling */
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          transition: color 0.4s ease, transform 0.4s ease;
        }

        .feature-card:hover .feature-icon {
          transform: rotate(15deg) scale(1.1);
        }

        /* Responsive Spacing */
        .grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 640px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
