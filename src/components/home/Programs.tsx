
import React from 'react';
import { Apple, Utensils, Stethoscope, BookOpen, ShieldCheck, PieChart } from 'lucide-react';

const programsData = [
  {
    title: "Supplementary Nutrition",
    description: "Provides nutritious meals and take-home rations to combat malnutrition in children, pregnant women, and nursing mothers.",
    icon: Utensils,
  },
  {
    title: "Immunization",
    description: "Ensures complete immunization coverage to prevent childhood diseases and reduce infant mortality rates.",
    icon: ShieldCheck,
  },
  {
    title: "Health Check-ups",
    description: "Regular health check-ups for early detection and prevention of childhood diseases and developmental delays.",
    icon: Stethoscope,
  },
  {
    title: "Pre-school Education",
    description: "Age-appropriate activities to promote cognitive, social, and emotional development in children aged 3-6 years.",
    icon: BookOpen,
  },
  {
    title: "Nutrition Education",
    description: "Educational sessions for mothers on breastfeeding, complementary feeding, and overall family nutrition.",
    icon: Apple,
  },
  {
    title: "Health Monitoring",
    description: "Regular growth monitoring and promotion activities to track development milestones in children.",
    icon: PieChart,
  }
];

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-icds-gray relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle">
            ICDS provides a comprehensive package of services addressing the interrelated needs of young children and mothers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-gray-100"
            >
              <div className="mb-6 p-4 rounded-xl bg-blue-50 inline-flex">
                <program.icon className="w-8 h-8 text-icds-blue" />
              </div>
              <h3 className="text-xl font-display font-bold text-icds-dark mb-3">{program.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-icds-dark text-white font-medium transition-all duration-300 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-icds-dark focus:ring-offset-2"
          >
            Get More Information
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
