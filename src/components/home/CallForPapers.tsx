
import React, { useState } from 'react';
import { Calendar, FileText, Award, Clock, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const topics = [
  "Machine Learning & Deep Learning",
  "Big Data Analytics",
  "Natural Language Processing",
  "Computer Vision",
  "AI Ethics & Governance",
  "Data Visualization & Visual Analytics",
  "Cloud Computing & Edge Computing",
  "IoT Data Analytics",
  "Blockchain in Data Science",
  "Recommender Systems",
  "Computational Social Science",
  "Health Informatics",
  "Smart Cities & Urban Computing",
];

const importantDates = [
  { event: "Paper Submission Deadline", date: "April 15, 2024", icon: FileText },
  { event: "Notification of Acceptance", date: "May 30, 2024", icon: Calendar },
  { event: "Camera-Ready Paper Submission", date: "June 30, 2024", icon: Award },
  { event: "Conference Dates", date: "August 12-14, 2024", icon: Clock },
];

const CallForPapers = () => {
  const [activeSection, setActiveSection] = useState<'papers' | 'guidelines' | 'publication'>('papers');

  const renderContent = () => {
    switch (activeSection) {
      case 'papers':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-display font-bold text-icds-dark mb-6">Research Topics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-icds-blue rounded-full"></div>
                    <p className="text-muted-foreground">{topic}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <p className="text-muted-foreground">
                  This is not an exhaustive list. We welcome submissions in related areas that advance the field of data science and engineering.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-display font-bold text-icds-dark mb-6">Important Dates</h3>
                <div className="space-y-6">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-blue-50 text-icds-blue flex-shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-icds-dark">{item.event}</h4>
                        <p className="text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-display font-bold text-icds-dark mb-6">Submission Guidelines</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Papers must be submitted in PDF format using the ICDSNE submission system.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>All papers must follow the IEEE conference format (10 pages maximum, including figures and references).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>All submissions will be peer-reviewed by at least three reviewers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Accepted papers will be included in the conference proceedings and submitted for inclusion in IEEE Xplore.</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <a 
                    href="#"
                    className={cn(
                      "inline-flex items-center justify-center px-6 py-3 w-full rounded-full",
                      "bg-icds-blue text-white font-medium",
                      "shadow-md shadow-icds-blue/10",
                      "transform transition-all duration-300 hover:-translate-y-1",
                      "focus:outline-none focus:ring-2 focus:ring-icds-blue focus:ring-offset-2"
                    )}
                  >
                    Submit Your Paper
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      case 'guidelines':
        return (
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-display font-bold text-icds-dark mb-6">Authors Guidelines</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-icds-dark text-lg mb-2">Manuscript Preparation</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Papers must be written in English and follow the IEEE conference format.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Use the IEEE conference templates available for LaTeX and Microsoft Word.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Maximum paper length is 10 pages, including figures, tables, and references.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Follow the IEEE guidelines for formatting references.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-icds-dark text-lg mb-2">Submission Process</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>All papers must be submitted electronically through the conference submission system.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Papers must be submitted as PDF files.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Authors must ensure that their submissions do not contain any identifying information for blind review.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-icds-dark text-lg mb-2">Ethical Considerations</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Papers must present original work that has not been previously published.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Authors must properly cite related work and avoid any form of plagiarism.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Any potential conflicts of interest must be disclosed during submission.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="#"
                className={cn(
                  "inline-flex items-center justify-center px-6 py-3 rounded-full",
                  "bg-icds-blue text-white font-medium",
                  "shadow-md shadow-icds-blue/10",
                  "transform transition-all duration-300 hover:-translate-y-1",
                  "focus:outline-none focus:ring-2 focus:ring-icds-blue focus:ring-offset-2"
                )}
              >
                Download IEEE Template
              </a>
            </div>
          </div>
        );
      case 'publication':
        return (
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-display font-bold text-icds-dark mb-6">Publication Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-icds-dark text-lg mb-2">Conference Proceedings</h4>
                <p className="text-muted-foreground">
                  All accepted and presented papers will be included in the conference proceedings, which will be submitted for inclusion in the IEEE Xplore Digital Library, subject to meeting IEEE's scope and quality requirements.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-icds-dark text-lg mb-2">Indexing</h4>
                <p className="text-muted-foreground">
                  The proceedings are typically indexed by major scientific databases including Scopus, Web of Science, and EI Compendex.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-icds-dark text-lg mb-2">Special Issues</h4>
                <p className="text-muted-foreground">
                  Selected papers will be invited to submit extended versions to special issues of reputed journals in the field of data science and engineering.
                </p>
                <ul className="space-y-3 text-muted-foreground mt-3">
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Journal of Big Data Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>IEEE Transactions on Knowledge and Data Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-icds-blue font-bold">•</span>
                    <span>Data Science and Engineering Journal</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-icds-dark text-lg mb-2">Copyright Information</h4>
                <p className="text-muted-foreground">
                  Authors of accepted papers will be required to sign an IEEE copyright form. At least one author must register for the conference and present the paper for it to be included in the proceedings.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="call-for-papers" className="section-padding bg-icds-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="section-title">Call For Papers</h2>
          <p className="section-subtitle">
            We invite researchers to submit their original and unpublished work on topics related to data science and engineering.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-6 py-3 rounded-full bg-icds-blue text-white font-medium shadow-md shadow-icds-blue/10 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-icds-blue focus:ring-offset-2">
              <span>Information for Researchers</span>
              <ChevronDown className="h-4 w-4 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              <DropdownMenuItem 
                onClick={() => setActiveSection('papers')}
                className={cn("cursor-pointer", activeSection === 'papers' && "bg-blue-50 text-icds-blue")}
              >
                Call for Papers
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setActiveSection('guidelines')}
                className={cn("cursor-pointer", activeSection === 'guidelines' && "bg-blue-50 text-icds-blue")}
              >
                Authors Guidelines
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setActiveSection('publication')}
                className={cn("cursor-pointer", activeSection === 'publication' && "bg-blue-50 text-icds-blue")}
              >
                Publication
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default CallForPapers;
