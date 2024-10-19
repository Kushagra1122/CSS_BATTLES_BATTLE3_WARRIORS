import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen bg-hero-gradient text-white flex justify-center items-center overflow-hidden">
      {/* Parallax Star Background */}
      <div className="absolute inset-0 bg-stars bg-cover opacity-80 pointer-events-none animate-twinkle"></div>

      {/* Animated Meteor Shower */}
      <div className="absolute inset-0 pointer-events-none animate-meteor-shower opacity-70"></div>

      {/* Floating Glowing Planet */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-glowing-planet bg-cover rounded-full animate-floating transition-all duration-700 hover:scale-110 hover:shadow-glow"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-8 sm:px-12">
        <h1 className="text-6xl sm:text-7xl font-extrabold mb-4 animate-fade-up">
          Explore Your Own Star
        </h1>
        <p className="text-2xl sm:text-3xl mb-8 opacity-0 animate-fade-up-delay">
          Embark on a cosmic journey and claim a star in the vast universe
          today!
        </p>
        <a
          href="#features"
          className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-glow py-3 px-10 rounded-full text-xl font-semibold transform transition duration-500 hover:scale-110 opacity-0 animate-button-slide-up"
        >
          Start Your Journey
        </a>
      </div>

      <style jsx>{`
        /* Hero Section Background and Custom Styles */
        .bg-hero-gradient {
          background: radial-gradient(circle at center, #1e3a8a, #000000);
        }

        .bg-stars {
          background-image: url("https://source.unsplash.com/1600x900/?space,stars");
          background-position: center;
        }

        .bg-glowing-planet {
          background-image: url("https://source.unsplash.com/1600x900/?planet");
          background-size: cover;
        }

        /* Animations for Stars */
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        /* Animations for Meteor Shower */
        @keyframes meteor-shower {
          0% {
            transform: translateY(-100vh) translateX(50vw);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(-50vw);
            opacity: 0;
          }
        }

        /* Animations for Floating Planet */
        @keyframes floating {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Fade-in Animations */
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Button Slide-up Animation */
        @keyframes button-slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Star and Meteor Animations */
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-meteor-shower {
          animation: meteor-shower 6s linear infinite;
        }

        /* Planet Floating Animation */
        .animate-floating {
          animation: floating 5s ease-in-out infinite;
        }

        /* Text and Button Fade-in Animations */
        .animate-fade-up {
          animation: fade-up 1.5s ease-out forwards;
        }

        .animate-fade-up-delay {
          animation: fade-up 2s ease-out forwards;
        }

        .animate-button-slide-up {
          animation: button-slide-up 2.5s ease-out forwards;
        }

        /* Hover Effects */
        .hover\\:shadow-glow:hover {
          box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.8);
        }

        /* Responsive Design Tweaks */
        @media (max-width: 640px) {
          .text-7xl {
            font-size: 2.5rem;
          }
          .text-3xl {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
