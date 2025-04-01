import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-icds-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with the ICDSNE organizing committee for any queries about the conference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col h-full">
            <h3 className="text-2xl font-display font-bold text-icds-dark mb-4">Contact Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-50 text-icds-blue flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-icds-dark">Department of Computer Science and Engineering</h4>
                  <p className="text-muted-foreground">National Institute of Technology Agartala, Barjala, Jirania, Tripura, India. PIN: 799046</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-50 text-icds-blue flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-icds-dark">Email Us</h4>
                  <p className="text-muted-foreground">icdsne@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-50 text-icds-blue flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-icds-dark">Call Us</h4>
                  <p className="text-muted-foreground">+91 824 2474000</p>
                  <p className="text-muted-foreground">Mon-Fri, 9:00 AM - 5:00 PM (IST)</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map iframe */}
          <div className="bg-white rounded-2xl p-4 shadow-md flex items-center h-[350px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.373238030094!2d91.41884467562491!3d23.840876678608794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753ec19aaa69b0d%3A0xf1c683a298e69e7b!2sNational%20Institute%20of%20Technology%20Agartala!5e0!3m2!1sen!2sin!4v1743531297951!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Conference Location"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
