import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

<<<<<<< HEAD
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
=======
const sections = [
  { 
    number: "1", 
    title: "Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL)",
    content: "Clustering and classification, Online learning, Reinforcement learning, Semi-supervised and unsupervised learning, Time series analysis, Deep learning architectures, Generative models, Federated learning, Deep reinforcement learning, Learning theory, Probabilistic inference, Trustworthy machine learning, Applications of machine learning, Computer vision, Natural language processing, Pattern recognition, Robotics, Human-computer interaction."
  },
  { 
    number: "2", 
    title: "Image and Video Processing",
    content: "Adaptive processing, Biomedical signal processing, Multimedia signal processing, Communication signal processing, Non-linear signal processing, Array processing, Statistics and statistical signal processing, Modeling, Filtering, Graph signal processing, Multi-resolution signal analysis and wavelets, Segmentation, Coding, Restoration, Enhancement, Multi-spectral processing, Motion detection and estimation, Stereoscopic processing, Image and video coding."
  },
  { 
    number: "3", 
    title: "Internet of Things (IoT)",
    content: "IoT architectures, Social implications and ethics for IoT intelligence, Systems for IoT and services computing, Remote diagnosis and development, IoT-based supply chain management systems, Energy-efficient IoT, Transportation and traffic theory, IoT protocols, Modeling and simulation, Intelligent infrastructure and guidance systems for vehicles, Green systems, Smart city, Smart healthcare, Smart agriculture."
  },
  { 
    number: "4", 
    title: "Cybersecurity and Privacy",
    content: "Cryptography, Network security, Blockchain security, Intrusion detection and prevention, Privacy-preserving techniques, Digital forensics, Secure computing, Malware analysis, Cyber threat intelligence, Authentication and access control."
  },
  { 
    number: "5", 
    title: "Cloud and Edge Computing",
    content: "Distributed computing, Edge intelligence, Serverless computing, Resource management, Fault tolerance, Energy efficiency, Virtualization, Data management, AI in cloud and edge computing."
  },
  { 
    number: "6", 
    title: "Human-Centered Computing",
    content: "User experience, Interactive systems, Human-robot interaction, Assistive technologies, Cognitive computing, Ethical AI, Affective computing, Virtual and augmented reality."
  }
>>>>>>> 587fd0c (eveverthing changed according to nit)
];

const additionalSections = [
  {
    title: "Author's Guidelines",
    content: "Submissions should be original, previously unpublished, as well as not currently under review for publication elsewhere. All submissions must be done electronically through the submission service of Microsoft CMT (https://cmt3.research.microsoft.com/ICDSNE2025). Authors are advised to prepare their papers according to the formatting guidelines (one-column page format, should be written in English and in Word Document/LaTeX). The regular paper must be around 10 pages. However, a paper less than 8 pages or higher than 12 pages will not be considered. Authors are also advised to prepare their final camera-ready papers in PDF format according to the formatting guidelines and technical instructions for inclusion in the conference proceedings. All accepted papers must be presented at the conference by one of the authors, who must complete the registration process after paying the specified registration fee prior to uploading/submitting the final formatted and publication-ready version (camera ready paper) of the paper. There will be no refund of the registration fee for cancelling the registration, but substitution of an author may be allowed with prior permission for presenting the paper. Any paper not presented at the conference will be excluded from the conference proceedings."
  },
  {
    title: "Publication",
    content: "Each submitted paper will go through single blind review process after submission. The papers submitted by authors will be assessed on the basis of their technical suitability, the scope of work, plagiarism (maximum 20% is allowed), novelty, clarity, completeness, relevance, significance, and research contribution. All accepted, registered, and presented papers will be published in the conference proceedings. The extended version of the accepted papers with at least 60% new content will be allowed to submit as a full paper for consideration for a possible publication under special issues of reputed SCI/Scopus indexed journals."
  }
];

const CallForPapers = () => {
<<<<<<< HEAD
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
=======
  const [openSection, setOpenSection] = useState(null);
>>>>>>> 587fd0c (eveverthing changed according to nit)

  return (
    <section id="call-for-papers" className="section-padding bg-icds-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="section-title">Call For Papers</h2>
          <p className="section-content">
          Third International Conference on Data Science and Network Engineering (ICDSNE 2025) invites prospective authors to submit their papers electronically adhering to the guideline. The submitted paper should not be published or currently submitted for publication elsewhere. All accepted, registered, and presented papers will be included in the proceedings of ICDSNE 2025. Please submit papers through the online system (i.e., <a href="https://cmt3.research.microsoft.com/ICDSNE2025" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Microsoft CMT</a>) and be sure to select the appropriate track as given below:
          </p>
        </div>

<<<<<<< HEAD
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
=======
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="relative">
              <div
                className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg shadow-md hover:bg-blue-50"
                onClick={() => setOpenSection(openSection === index ? null : index)}
              >
                <h4 className="font-semibold text-icds-dark">{section.number}. {section.title}</h4>
                <ChevronDown className={`w-5 h-5 transition-transform ${openSection === index ? 'rotate-180' : ''}`} />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${openSection === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="p-4 text-muted-foreground">{section.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          {additionalSections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold text-icds-dark mb-2">{section.title}</h3>
              <p className="text-muted-foreground">{section.content}</p>
            </div>
          ))}
>>>>>>> 587fd0c (eveverthing changed according to nit)
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default CallForPapers;
