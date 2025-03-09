import React from "react";

// TimelineItem Component
const TimelineItem = ({ event, description, date, isLeft }) => {
  return (
    <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
      {/* Event Card */}
      <div className="relative w-full md:w-1/2 p-4 my-6 text-gray-800 bg-white rounded-xl">
        <h3 className="text-lg font-semibold lg:text-xl">{event}</h3>
        <p className="mt-2 leading-6">{description}</p>
        <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
          {date}
        </span>
      </div>
    </div>
  );
};

// Timeline Component
const Education = () => {
  const events = [
    {
      event: "New Event 1",
      description: "Description of the first event.",
      date: "Date 1",
      isLeft: true, // First box on the left
    },
    {
      event: "New Event 2",
      description: "Description of the second event.",
      date: "Date 2",
      isLeft: false, // Second box on the right
    },
    {
      event: "New Event 3",
      description: "Description of the third event.",
      date: "Date 3",
      isLeft: true, // Third box on the left
    },
  ];

  return (
    <div className="bg-indigo-700 p-4">
      <h2 className="text-3xl text-white font-bold mb-12">Chronology</h2>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 w-1 h-full bg-indigo-300 transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        {events.map((event, index) => (
          <TimelineItem
            key={index}
            event={event.event}
            description={event.description}
            date={event.date}
            isLeft={event.isLeft}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;