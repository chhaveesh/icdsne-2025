
import React from 'react';
import { Send, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-icds-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with us for more information about our services and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-display font-bold text-icds-dark mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-icds-blue/50 focus:border-transparent transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-icds-blue/50 focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-icds-blue/50 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-icds-blue/50 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg",
                  "bg-icds-blue text-white font-medium",
                  "shadow-md shadow-icds-blue/20 hover:shadow-lg hover:shadow-icds-blue/30",
                  "transform transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-icds-blue focus:ring-offset-2"
                )}
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
              <h3 className="text-2xl font-display font-bold text-icds-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-50 text-icds-blue flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-icds-dark mb-1">Our Location</h4>
                    <p className="text-muted-foreground">ICDS Office, New England, Main Street, New England - 110001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-50 text-icds-blue flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-icds-dark mb-1">Email Us</h4>
                    <p className="text-muted-foreground">info@icdsne.in</p>
                    <p className="text-muted-foreground">support@icdsne.in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-50 text-icds-blue flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-icds-dark mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+91 12345 67890</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-50 text-icds-blue flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-icds-dark mb-1">Working Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map iframe placeholder */}
            <div className="bg-white rounded-2xl p-4 shadow-md h-60 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9292381792257!2d77.21379907478477!3d28.632336683900138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd366195ee45%3A0x1b8b2652b8c7447a!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1688637657204!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="ICDS Office Location"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
