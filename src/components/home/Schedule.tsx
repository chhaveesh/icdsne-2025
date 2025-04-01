import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const scheduleData = {
  day1: [
    {
      time: "08:00 - 09:00",
      title: "Registration & Breakfast",
      type: "break",
    },
    {
      time: "09:00 - 09:30",
      title: "Opening Ceremony",
      speaker: "Conference Chairs",
      location: "Main Hall",
      type: "ceremony",
    },
    {
      time: "09:30 - 10:30",
      title: "Keynote: The Future of AI in Scientific Discovery",
      speaker: "Dr. Sarah Johnson",
      location: "Main Hall",
      type: "keynote",
    },
    {
      time: "10:30 - 11:00",
      title: "Coffee Break",
      type: "break",
    },
    {
      time: "11:00 - 12:30",
      title: "Session 1: Machine Learning Advances",
      speaker: "Various Presenters",
      location: "Room A",
      type: "session",
    },
    {
      time: "12:30 - 14:00",
      title: "Lunch Break",
      type: "break",
    },
    {
      time: "14:00 - 15:30",
      title: "Session 2: Data Analytics Applications",
      speaker: "Various Presenters",
      location: "Room B",
      type: "session",
    },
    {
      time: "15:30 - 16:00",
      title: "Coffee Break",
      type: "break",
    },
    {
      time: "16:00 - 17:30",
      title: "Panel Discussion: Ethics in AI",
      speaker: "Distinguished Panelists",
      location: "Main Hall",
      type: "panel",
    },
    {
      time: "18:30 - 20:30",
      title: "Welcome Reception",
      location: "Grand Foyer",
      type: "social",
    },
  ],
  day2: [
    {
      time: "08:30 - 09:00",
      title: "Morning Coffee",
      type: "break",
    },
    {
      time: "09:00 - 10:00",
      title: "Keynote: Deep Learning Innovations",
      speaker: "Prof. James Wilson",
      location: "Main Hall",
      type: "keynote",
    },
    {
      time: "10:00 - 10:30",
      title: "Coffee Break",
      type: "break",
    },
    {
      time: "10:30 - 12:00",
      title: "Session 3: Natural Language Processing",
      speaker: "Various Presenters",
      location: "Room A",
      type: "session",
    },
    {
      time: "12:00 - 13:30",
      title: "Lunch Break",
      type: "break",
    },
    {
      time: "13:30 - 15:00",
      title: "Workshop: Practical Data Science",
      speaker: "Dr. Emily Chen",
      location: "Workshop Room",
      type: "workshop",
    },
    {
      time: "15:00 - 15:30",
      title: "Coffee Break",
      type: "break",
    },
    {
      time: "15:30 - 17:00",
      title: "Session 4: Computer Vision",
      speaker: "Various Presenters",
      location: "Room B",
      type: "session",
    },
    {
      time: "19:00 - 22:00",
      title: "Conference Dinner",
      location: "Grand Hotel",
      type: "social",
    },
  ],
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');

  return (
    <section id="schedule" className="section-padding bg-icds-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Conference Schedule</h2>
          <p className="section-subtitle">
            Two days of insightful sessions, workshops, and networking opportunities.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-1 rounded-full shadow-sm border border-gray-100">
            <button
              onClick={() => setActiveDay('day1')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeDay === 'day1'
                  ? "bg-icds-blue text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Day 1 (18 July, 2025)
            </button>
            <button
              onClick={() => setActiveDay('day2')}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeDay === 'day2'
                  ? "bg-icds-blue text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              Day 2 (19 July, 2025)
            </button>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            {scheduleData[activeDay].map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "flex flex-col md:flex-row gap-4 md:gap-8 p-4 rounded-xl border-l-4",
                  item.type === 'keynote' ? "border-amber-400 bg-amber-50/50" :
                  item.type === 'break' ? "border-gray-200 bg-gray-50/50" :
                  item.type === 'session' ? "border-blue-400 bg-blue-50/50" :
                  item.type === 'workshop' ? "border-green-400 bg-green-50/50" :
                  item.type === 'panel' ? "border-purple-400 bg-purple-50/50" :
                  item.type === 'social' ? "border-pink-400 bg-pink-50/50" :
                  "border-gray-300 bg-gray-50/50"
                )}
              >
                <div className="md:w-1/4 font-medium text-gray-700">
                  {item.time}
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-lg font-bold text-icds-dark">{item.title}</h3>
                  {item.speaker && (
                    <p className="text-muted-foreground mt-1">{item.speaker}</p>
                  )}
                  {item.location && (
                    <p className="text-sm text-gray-500 mt-1">📍 {item.location}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
