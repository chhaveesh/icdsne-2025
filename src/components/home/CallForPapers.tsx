
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
  const [openSection, setOpenSection] = useState(null);

  return (
    <section id="call-for-papers" className="section-padding bg-icds-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="section-title">Call For Papers</h2>
          <p className="section-content">
          Third International Conference on Data Science and Network Engineering (ICDSNE 2025) invites prospective authors to submit their papers electronically adhering to the guideline. The submitted paper should not be published or currently submitted for publication elsewhere. All accepted, registered, and presented papers will be included in the proceedings of ICDSNE 2025. Please submit papers through the online system (i.e., <a href="https://cmt3.research.microsoft.com/ICDSNE2025" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Microsoft CMT</a>) and be sure to select the appropriate track as given below:
          </p>
        </div>

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
        </div>
      </div>
    </section>
  );
};

export default CallForPapers;
