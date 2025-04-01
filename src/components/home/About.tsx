
import React from 'react';
import { Users, Award, Globe, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { 
    icon: Users, 
    value: '500+', 
    label: 'Attendees', 
    color: 'bg-blue-50 text-blue-600'
  },
  { 
    icon: Award, 
    value: '150+', 
    label: 'Research Papers', 
    color: 'bg-pink-50 text-pink-600' 
  },
  { 
    icon: Globe, 
    value: '30+', 
    label: 'Countries', 
    color: 'bg-amber-50 text-amber-600' 
  },
  { 
    icon: Lightbulb, 
    value: '50+', 
    label: 'Workshops', 
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
          <h2 className="section-title">About ICDSNE</h2>
          <p className="section-subtitle">
          Third International Conference on Data Science and Network Engineering (ICDSNE 2025) is being organized by the Department of Computer Science and Engineering, National Institute of Technology Agartala (NIT Agartala), India, in hybrid mode (online/in-person) on 18-19 July, 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-icds-dark">International Conference On Data Science and Network Engineering
</h3>
            <p className="text-muted-foreground leading-relaxed">
            Third International Conference on Data Science and Network Engineering (ICDSNE 2025) is being organized by the Department of Computer Science and Engineering, National Institute of Technology Agartala (NIT Agartala), India, in hybrid mode (online/in-person) on 18-19 July, 2025. This institute is an Institution of National Importance by Ministry of Education, Govt. of India, and it is located in Tripura, India. There are 4702 students enrolled in different undergraduate, post-graduate, and PhD programmes at NIT Agartala. This institute supports excellent teaching and research environments to produce leaders, who can make a difference in the world. ICDSNE 2025 is a non-profitable conference, and it provides an opportunity for researchers, academicians, and industry professionals to present their research work on data science and network engineering. The main objective of this conference is to bring together researchers and practitioners in the world working on data science and network engineering, so that they can share ideas, innovations, and recent trends in their respective areas to address real-time problems. ICDSNE 2025 will feature a range of presentations on the latest research activities, as well as stimulating talks, and keynote addresses. There are multiple tracks in the conference covering almost all the areas of data science and network engineering. The organizing committee is confident that this conference will provide a platform for researchers to share their ideas and to have future collaboration with different people across the world. All accepted, registered, and presented papers will be included in the proceedings of ICDSNE 2025.
            </p>
            <div className="pt-4">
              <a 
                href="#registration"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 rounded-full",
                  "bg-icds-blue text-white font-medium",
                  "shadow-md shadow-icds-blue/10",
                  "transform transition-all duration-300 hover:-translate-y-1",
                  "focus:outline-none focus:ring-2 focus:ring-icds-blue focus:ring-offset-2"
                )}
              >
                Register for the Conference
              </a>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="aspect-video max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://nita.ac.in/images/Banner-Image-hostel.jpg" 
                alt="Data Science Conference" 
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
