
import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const speakers = [
  {
    name: "Dr. Sarah Johnson",
    role: "AI Research Director",
    affiliation: "Stanford University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Expert in machine learning applications for healthcare",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    }
  },
  {
    name: "Prof. James Wilson",
    role: "Head of Data Science",
    affiliation: "MIT",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Pioneer in deep learning architectures",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    }
  },
  {
    name: "Dr. Emily Chen",
    role: "Chief Data Scientist",
    affiliation: "Google Research",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Renowned for work on large language models",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    }
  },
  {
    name: "Prof. David Kim",
    role: "Director",
    affiliation: "AI Ethics Institute",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    bio: "Leading researcher in ethical AI and governance",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com",
    }
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Keynote Speakers</h2>
          <p className="section-subtitle">
            Learn from industry leaders and academic experts in data science and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 group-hover:shadow-xl">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-display font-bold">{speaker.name}</h3>
                  <p className="text-white/80">{speaker.role}</p>
                  <p className="text-white/60 text-sm">{speaker.affiliation}</p>
                  
                  <div className="flex gap-3 mt-4 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <a href={speaker.social.twitter} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors" aria-label="Twitter">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href={speaker.social.linkedin} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors" aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={speaker.social.website} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors" aria-label="Website">
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground text-sm">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">More speakers to be announced soon. Stay tuned!</p>
          <a 
            href="#registration"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-icds-blue text-white font-medium transition-all duration-300 hover:bg-icds-blue/90 focus:outline-none focus:ring-2 focus:ring-icds-blue focus:ring-offset-2"
          >
            Register Now to Join
          </a>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
