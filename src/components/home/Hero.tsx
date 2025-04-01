
import React from 'react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-icds-blue/10 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-icds-green/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 pt-10 md:pt-20 pb-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-3 py-1 rounded-full bg-icds-blue/10 text-icds-blue text-sm font-medium">
                International Conference
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-icds-dark leading-tight">
              Data <span className="text-icds-blue">Science</span> &<br />
              <span className="text-icds-green">Engineering</span> 2025
            </h1>
            
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground">
            Third International Conference on Data Science and Network Engineering (ICDSNE 2025) is being organized by the Department of Computer Science and Engineering, National Institute of Technology Agartala (NIT Agartala), India, in hybrid mode (online/in-person) on 18-19 July, 2025.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#registration"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 rounded-full",
                  "bg-icds-blue text-white font-medium",
                  "shadow-lg shadow-icds-blue/20 hover:shadow-xl hover:shadow-icds-blue/30",
                  "transform transition-all duration-300 hover:-translate-y-1",
                  "focus:outline-none focus:ring-2 focus:ring-icds-blue focus:ring-offset-2",
                  "btn-hover-effect"
                )}
              >
                Register Now
              </a>
              
              <a 
                href="#call-for-papers"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 rounded-full",
                  "bg-white text-icds-dark font-medium",
                  "border border-gray-200 shadow-sm",
                  "transform transition-all duration-300 hover:-translate-y-1",
                  "focus:outline-none focus:ring-2 focus:ring-gray-200",
                  "hover:bg-gray-50"
                )}
              >
                Submit Paper
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-icds-blue" />
                <span className="text-muted-foreground">18-19 July, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-icds-blue" />
                <span className="text-muted-foreground">National Institute of Technology Agartala, India</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-square max-w-lg mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-icds-blue/20 to-icds-green/20 rounded-2xl -rotate-6 transform-gpu"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl"></div>
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <img 
                  src="https://www.nita.ac.in/images/Gallary-3.jpg" 
                  alt="Data Science Conference" 
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-icds-blue animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
