
import React from 'react';
import { Check, Calendar, Users, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const registrationPackages = [
  {
    title: "Early Bird",
    price: "$399",
    validUntil: "Until May 31, 2024",
    icon: Calendar,
    features: [
      "Full conference access",
      "Conference proceedings",
      "Welcome reception",
      "Conference dinner",
      "Coffee breaks & lunches"
    ],
    recommended: false,
    btnText: "Register Now"
  },
  {
    title: "Regular",
    price: "$499",
    validUntil: "June 1 - July 31, 2024",
    icon: Users,
    features: [
      "Full conference access",
      "Conference proceedings",
      "Welcome reception",
      "Conference dinner",
      "Coffee breaks & lunches"
    ],
    recommended: true,
    btnText: "Register Now"
  },
  {
    title: "Student",
    price: "$249",
    validUntil: "Valid with student ID",
    icon: Award,
    features: [
      "Full conference access",
      "Conference proceedings",
      "Welcome reception",
      "Conference dinner",
      "Coffee breaks & lunches"
    ],
    recommended: false,
    btnText: "Register Now"
  }
];

const Registration = () => {
  return (
    <section id="registration" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Registration</h2>
          <p className="section-subtitle">
            Join us at ICDSNE 2024. Choose the registration package that suits you best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {registrationPackages.map((pkg, index) => (
            <div
              key={index}
              className={cn(
                "relative rounded-2xl p-8 flex flex-col",
                "border transition-all duration-300",
                pkg.recommended 
                  ? "border-icds-blue shadow-lg shadow-icds-blue/10" 
                  : "border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300"
              )}
            >
              {pkg.recommended && (
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                  <span className="bg-icds-blue text-white text-sm font-medium px-4 py-1 rounded-full">Recommended</span>
                </div>
              )}
              
              <div className="p-3 rounded-full bg-blue-50 text-icds-blue w-fit mb-6">
                <pkg.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-icds-dark">{pkg.title}</h3>
              
              <div className="mt-4 mb-6">
                <span className="text-4xl font-display font-bold text-icds-dark">{pkg.price}</span>
                <span className="text-muted-foreground ml-2">{pkg.validUntil}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-green-100 text-green-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#"
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300",
                  pkg.recommended 
                    ? "bg-icds-blue text-white shadow-md shadow-icds-blue/20 hover:shadow-lg hover:shadow-icds-blue/30" 
                    : "bg-white text-icds-dark border border-gray-200 hover:bg-gray-50"
                )}
              >
                {pkg.btnText}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-icds-gray p-8 rounded-2xl">
          <h3 className="text-xl font-display font-bold text-icds-dark mb-4">Additional Information</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-icds-blue font-bold">•</span>
              <span className="text-muted-foreground">Group discounts are available for 5+ attendees from the same organization.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-icds-blue font-bold">•</span>
              <span className="text-muted-foreground">At least one author of each accepted paper must register at the regular rate.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-icds-blue font-bold">•</span>
              <span className="text-muted-foreground">Cancellations before July 15, 2024 will receive a refund minus a $50 processing fee.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-icds-blue font-bold">•</span>
              <span className="text-muted-foreground">For special accommodation requests, please contact us at registration@icdsne.in</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Registration;
