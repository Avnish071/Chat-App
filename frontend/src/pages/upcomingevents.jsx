import React, { useContext, useState } from "react";
import { AuthContext } from "../components/authcontext";

const events = [
  {
    title: "Ramp Walk Auditions",
    date: "June 25, 2025",
    image: "/photos/events/audition.jpg",
  },
  {
    title: "Fashion Week Launch",
    date: "July 10, 2025",
    image: "/photos/events/fashionweek.jpg",
  },
  {
    title: "Model Casting Gala",
    date: "August 2, 2025",
    image: "/photos/events/casting.jpg",
  },
];

export default function UpcomingEvents() {
  return (
    <div className="py-16 px-4 bg-black text-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#D4AF37] mb-12">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="relative h-64">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-2xl font-bold text-white uppercase drop-shadow-md tracking-wider">
                  {event.title}
                </h3>
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
    </div>
  );
}
