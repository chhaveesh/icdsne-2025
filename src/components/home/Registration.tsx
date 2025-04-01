import React from 'react';

const registrationData = [
  { type: "Student", indian: "₹7,000 INR", international: "$300 USD" },
  { type: "Academician", indian: "₹8,000 INR", international: "$350 USD" },
  { type: "Industry", indian: "₹9,000 INR", international: "$400 USD" },
  { type: "Attendee", indian: "₹5,000 INR", international: "$250 USD" }
];

const Registration = () => {
  return (
    <section id="registration" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Registration Details</h2>
          <p className="text-lg text-gray-700 mt-2">
            To ensure the publication of an accepted paper in the proceedings, at least one author of an accepted paper has to register by submitting the registration fee within the deadline. Also, the registered author must present the accepted paper in online/in-person mode as per the given schedule.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 px-6 py-3 text-left">Registration Type</th>
                <th className="border border-gray-300 px-6 py-3 text-left">Indian</th>
                <th className="border border-gray-300 px-6 py-3 text-left">International</th>
              </tr>
            </thead>
            <tbody>
              {registrationData.map((entry, index) => (
                <tr key={index} className="hover:bg-blue-100 even:bg-gray-100">
                  <td className="border border-gray-300 px-6 py-3 font-semibold text-gray-800">{entry.type}</td>
                  <td className="border border-gray-300 px-6 py-3 text-gray-700">{entry.indian}</td>
                  <td className="border border-gray-300 px-6 py-3 text-gray-700">{entry.international}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Registration;
