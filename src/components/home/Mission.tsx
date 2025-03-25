
import React from 'react';
import { CheckCircle, Target, Users, Star } from 'lucide-react';

const missionPoints = [
  {
    title: "Early Childhood Development",
    description: "Laying strong foundations for lifelong learning and development",
    icon: Star,
  },
  {
    title: "Maternal Health & Nutrition",
    description: "Supporting expectant and nursing mothers with essential care",
    icon: Users,
  },
  {
    title: "Holistic Child Care",
    description: "Providing integrated services for complete child wellbeing",
    icon: CheckCircle,
  },
  {
    title: "Community Empowerment",
    description: "Engaging communities in child development initiatives",
    icon: Target,
  }
];

const Mission = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Approach</h2>
          <p className="section-subtitle">
            We believe in a comprehensive, integrated approach to early childhood and maternal care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Mother and child" 
                className="object-cover h-full w-full"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 w-64 h-64 bg-icds-blue/10 rounded-full blur-3xl -top-10 -right-10"></div>
            <div className="absolute -z-10 w-64 h-64 bg-icds-green/10 rounded-full blur-3xl -bottom-10 -left-10"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-icds-dark">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide comprehensive health, nutrition, and early childhood development services that ensure every child under six years of age and pregnant and lactating mothers have access to quality care, support, and education.
              </p>
            </div>

            <div className="space-y-6">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <point.icon className="w-6 h-6 text-icds-blue" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-icds-dark mb-1">{point.title}</h4>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
