
import React from 'react';
import { Users, Heart, School, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { 
    icon: Users, 
    value: '5000+', 
    label: 'Children Served', 
    color: 'bg-blue-50 text-blue-600'
  },
  { 
    icon: Heart, 
    value: '200+', 
    label: 'Care Centers', 
    color: 'bg-pink-50 text-pink-600' 
  },
  { 
    icon: School, 
    value: '500+', 
    label: 'Educators', 
    color: 'bg-amber-50 text-amber-600' 
  },
  { 
    icon: Award, 
    value: '25+', 
    label: 'Years of Service', 
    color: 'bg-green-50 text-green-600' 
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">About ICDS</h2>
          <p className="section-subtitle">
            Integrated Child Development Services (ICDS) is India's flagship program addressing health, nutrition, and development needs of children under 6 years and pregnant and lactating mothers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-icds-dark">Our Mission & Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              ICDS aims to break the vicious cycle of malnutrition, morbidity, reduced learning capacity, and mortality by providing a package of services including supplementary nutrition, immunization, health check-ups, referral services, pre-school education, and nutrition & health education.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our vision is to ensure that every child has the best start in life with proper nutrition, healthcare, and early education, leading to their holistic development and a brighter future.
            </p>
            <div className="pt-4">
              <a 
                href="#programs"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 rounded-full",
                  "bg-icds-blue text-white font-medium",
                  "shadow-md shadow-icds-blue/10",
                  "transform transition-all duration-300 hover:-translate-y-1",
                  "focus:outline-none focus:ring-2 focus:ring-icds-blue focus:ring-offset-2"
                )}
              >
                View Our Programs
              </a>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="aspect-video max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Children learning" 
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-icds-blue rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-icds-green rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className={cn("p-3 rounded-full mb-4", stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-display font-bold text-icds-dark mb-1">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
