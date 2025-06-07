import React, { useState } from "react";
import { Menu, ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ModelAgencyHome() {
  const modelImages = [
    "/photos/featured model pic/2.jpg",
    "/photos/featured model pic/2.jpg",
    "/photos/featured model pic/2.jpg",
    "/photos/featured model pic/2.jpg",
    "/photos/featured model pic/2.jpg",
    "/photos/featured model pic/2.jpg",
    "/photos/featured model pic/2.jpg",
  ];

  const videos = [
    {
      title: "Beachside Elegance",
      description:
        "An enchanting evening shoot featuring flowing gowns and ocean breeze.",
      src: "/photos/shoots/shoot1.mp4",
    },
    {
      title: "Urban Vibes",
      description: "Edgy cityscape shoot with street-style glam and neon lights.",
      src: "/videos/shoot2.mp4",
    },
    {
      title: "Golden Hour Magic",
      description:
        "Captured moments in soft golden light amidst floral surroundings.",
      src: "/videos/shoot3.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero */}
      <section className="relative h-screen w-full">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        >
          <source src="/photos/video/starmodel.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Navbar */}
          <nav className="flex justify-between items-center px-10 py-6 bg-transparent">
            <div
              className="text-2xl md:text-2xl font-semibold tracking-wider"
              style={{ color: "#D4AF37" }}
            >
              New Face Casting
            </div>
            <ul className="hidden md:flex space-x-8 text-white text-lg">
              <li className="border-b border-[#D4AF37] pb-1">Home</li>
              <li className="hover:text-[#D4AF37] transition">Models</li>
              <li className="hover:text-[#D4AF37] transition">Actors</li>
              <li className="hover:text-[#D4AF37] transition">About Us</li>
              <li className="hover:text-[#D4AF37] transition">Contact Us</li>
              <li className="hover:text-[#D4AF37] transition">Join Us</li>
            </ul>

            <div className="flex items-center space-x-4">
              <button className="bg-[#D4AF37] text-black px-4 py-2 rounded hover:bg-white transition text-sm">
                Request A Call Back
              </button>
              <Menu className="w-6 h-6 text-white md:hidden" />
            </div>
          </nav>

          {/* Hero Text */}
          <div className="text-right px-10 pb-20 md:pb-32">
            <h1
              className="inline-block text-2xl md:text-4xl font-semibold tracking-wider typing-animation"
              style={{ color: "#D4AF37" }}
            >
              New Upcoming Faces
            </h1>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Model Representation",
                desc: "Male, female, kids, and plus-size models.",
              },
              {
                title: "Casting & Shoots",
                desc: "Professional casting services for ads, events, and campaigns.",
              },
              {
                title: "Training & Grooming",
                desc: "Runway, styling, posing, etiquette, and self-confidence.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black text-white border border-[#D4AF37] p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">
                  {item.title}
                </h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Model Portfolio</h2>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-7">
            {modelImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Model ${i + 1}`}
                className="rounded-xl shadow-md hover:scale-105 transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-[#1a1a1a] py-16 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">About Us</h2>
          <p className="text-lg leading-relaxed">
            New Face Casting is a cutting-edge talent and model management agency
            dedicated to discovering and promoting fresh talent. With a strong
            network across India, we specialize in grooming models and actors for
            success in fashion, advertising, and entertainment industries.
          </p>
        </div>
      </section>

        {/* Upcoming Events */}
 <section className="py-16 px-4 bg-black text-white">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#D4AF37] mb-12">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Ramp Walk Auditions",
              date: "June 25, 2025",
              image: "/photos/events/rampwalk.jpg",
            },
            {
              title: "Fashion Week Launch",
              date: "July 10, 2025",
              image: "/photos/events/fashion.webp",
            },
            {
              title: "Model Casting Gala",
              date: "August 2, 2025",
              image: "/photos/events/modelcasting.webp",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-white uppercase drop-shadow-md tracking-wider"
                  >
                    {event.title}
                  </motion.h3>
                  <p className="text-sm text-[#D4AF37] mt-2">{event.date}</p>
                </div>
              </div>
              <div className="bg-[#111] p-4 text-center">
                <a
                  href="#"
                  className="text-[#D4AF37] font-semibold hover:underline text-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
 </section>

      {/* Latest Shoot */}
      <section className="py-16 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-10">
            Our Latest Shoot
          </h2>

          <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-xl mb-6">
            <video
              key={videos[currentIndex].src}
              src={videos[currentIndex].src}
              controls
              autoPlay
              muted
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <motion.div
            key={videos[currentIndex].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">
              {videos[currentIndex].title}
            </h3>
            <p className="text-gray-300 mt-2">{videos[currentIndex].description}</p>
          </motion.div>

          <button
            onClick={handleNext}
            className="mt-8 inline-flex items-center gap-2 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Next <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 px-6 bg-black text-center text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-[#D4AF37]">Featured Clients</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["Vogue", "Gucci", "Lakme", "Pepsi", "Myntra", "Chanel"].map(
              (brand, i) => (
                <div
                  key={i}
                  className="text-lg font-semibold text-gray-300 hover:text-[#D4AF37] transition"
                >
                  {brand}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
    <section className="bg-[#1a1a1a] py-16 px-6 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">Contact Us</h2>
          <form className="bg-black p-6 rounded-xl shadow-md space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-[#D4AF37] bg-transparent p-3 rounded-md text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-[#D4AF37] bg-transparent p-3 rounded-md text-white placeholder-gray-400"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-[#D4AF37] bg-transparent p-3 rounded-md text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-[#D4AF37] text-black px-6 py-2 rounded-md hover:bg-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        &copy; 2025 New Face Casting. All Rights Reserved.
      </footer>
    </div>
  );
}
