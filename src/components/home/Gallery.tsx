
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Children playing",
    category: "Activities"
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Nutrition program",
    category: "Nutrition"
  },
  {
    src: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Healthcare checkup",
    category: "Healthcare"
  },
  {
    src: "https://images.unsplash.com/photo-1564429097439-485810a45a33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Education session",
    category: "Education"
  },
  {
    src: "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Community outreach",
    category: "Community"
  },
  {
    src: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alt: "Staff training",
    category: "Training"
  }
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            Glimpses of our activities, programs, and the impact we're making in the community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium text-icds-blue bg-white/90 px-2 py-1 rounded-full">{image.category}</span>
                  <h3 className="text-white text-lg font-semibold mt-2">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <button 
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
            
            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="max-w-4xl max-h-[80vh] relative">
              <img 
                src={galleryImages[currentImageIndex].src} 
                alt={galleryImages[currentImageIndex].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
                <h3 className="text-lg font-semibold">{galleryImages[currentImageIndex].alt}</h3>
                <p className="text-sm text-gray-300">{galleryImages[currentImageIndex].category}</p>
              </div>
            </div>
            
            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              onClick={goToNext}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
