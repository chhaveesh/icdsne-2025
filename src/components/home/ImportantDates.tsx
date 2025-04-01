
import React from 'react';
import { Calendar, Clock, FileText, Send, Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const importantDates = [
  {
    event: "Due Date of Paper Submission",
    date: "15 April, 2025",
    icon: Send
  },
  {
    event: "Notification",
    date: "15 May, 2025",
    icon: FileText
  },
  {
    event: "Due Date of Registration",
    date: "01 June, 2025",
    icon: Calendar
  },
  {
    event: "Camera Ready Paper Submission",
    date: "15 June, 2025",
    icon: FileText
  },
  {
    event: "Conference Date",
    date: "18-19 July, 2025",
    icon: CalendarIcon
  }
];

const ImportantDates = () => {
  return (
    <section id="important-dates" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Important Dates</h2>
          <p className="section-subtitle">
            Mark your calendar with these crucial deadlines
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8">
          <div className="space-y-8">
            {importantDates.map((item, index) => (
              <div key={index} className="flex items-start gap-6 animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-4 rounded-full bg-blue-50 text-icds-blue flex-shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-icds-dark">{item.event}</h4>
                  <p className="text-lg text-muted-foreground mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
