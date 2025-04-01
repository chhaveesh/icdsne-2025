
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const committeeData = {
  patron: [
    { name: "Prof. S. K. Patra", role: "Director", institution: "NIT Agartala, India" }
  ],
  coPatrons: [
    { name: "Prof. Rajib Saha", role: "Dean (AA)", institution: "NIT Agartala, India" },
    { name: "Prof. Tarun Kumar Misra", role: "Dean (R & C)", institution: "NIT Agartala, India" },
    { name: "Prof. Partha Pratim Sarkar", role: "Dean (P & D)", institution: "NIT Agartala, India" },
    { name: "Prof. Debasis Neogi", role: "Dean (FW)", institution: "NIT Agartala, India" }
  ],
  internationalAdvisory: [
    { name: "Pascal Lorenz", institution: "University of Haute-Alsace, France" },
    { name: "David Taniar", institution: "Monash University, Australia" },
    { name: "Sajal K. Das", institution: "Missouri University of Science and Technology, USA" },
    { name: "Ruben Gonzalez Crespo", institution: "International University of La Rioja (UNIR), Spain" },
    { name: "Seifedine Kadry", institution: "Noroff University College, Norway" },
    { name: "Nilanjan Dey", institution: "Techno International New Town, India" },
    { name: "Yanhui Guo", institution: "University of Illinois Springfield, USA" },
    { name: "Chau Yuen", institution: "Singapore University of Technology and Design, Singapore" }
  ],
  generalChairs: [
    { name: "Nirmalya Kar", department: "CSED", institution: "NIT Agartala, India" },
    { name: "Suyel Namasudra", department: "CSED", institution: "NIT Agartala, India" }
  ],
  organisingChairs: [
    { name: "Tribid Debbarma", department: "CSED", institution: "NIT Agartala, India" },
    { name: "Suman Deb", department: "CSED", institution: "NIT Agartala, India" }
  ],
  technicalProgramChairs: [
    { name: "Mrinal Kanti Debbarma", department: "CSED", institution: "NIT Agartala, India" },
    { name: "Arijit Datta", department: "CSED", institution: "IIIT Agartala, India" }
  ],
  publicationChairs: [
    { name: "Kunal Chakma", department: "CSED", institution: "NIT Agartala, India" },
    { name: "Ashim Saha", department: "CSED", institution: "NIT Agartala, India" }
  ],
  publicityChairs: [
    { name: "Dwijen Rudrapal", department: "CSED", institution: "NIT Agartala, India" },
    { name: "Jayakumar L.", department: "CSED", institution: "NIT Agartala, India" }
  ],
  hospitalityChairs: [
    { name: "Tannistha Pal", department: "CSED", institution: "NIT Agartala, India" },
    { name: "Prashant Bhardwaj", department: "CSED", institution: "NIT Agartala, India" }
  ],
  webChairs: [
    { name: "Swapan Debbarma", department: "CSED", institution: "NIT Agartala, India" },
    { name: "Sachin Minocha", department: "SCSET", institution: "Bennett University, India" }
  ],
  localAdvisory: [
    { name: "Diptendu Bhattacharya", department: "CSED", institution: "NIT Agartala, India" },
    { name: "Nikhil Debbarma", department: "CSED", institution: "NIT Agartala, India" }
  ],
  localOrganization: [
    { name: "Ranjita Das", department: "CSED", institution: "NIT Agartala, India" },
    { name: "Kishore Kumar Dhar", department: "CSED", institution: "NIT Agartala, India" },
    { name: "Smita Das", department: "CSED", institution: "NIT Agartala, India" }
  ]
};

// Technical Program Committee members - these are displayed in a separate expandable section
const technicalProgramCommittee = [
  "Khumanthem Manglem Singh, National Institute of Technology Manipur, India",
  "Uttam Ghosh, Meharry Medical College, USA",
  "Khelchandra Thongam, National Institute of Technology Manipur, India",
  "Rabul Hussain Laskar, National Institute of Technology Silchar, India",
  "Salam Shuleenda Devi, National Institute of Technology Meghalaya, India",
  "Prakash Choudhary, Central University of Rajasthan, India",
  "Pradip Kumar Das, Indian Institute of Technology Guwahati, India",
  "Sanasam Ranbir Singh, Indian Institute of Technology Guwahati, India",
  "Partha Pakray, National Institute of Technology Silchar, India",
  "Omprakash Kaiwartya, Nottingham Trent University, UK",
  "Laiphrakpam Dolendro Singh, National Institute of Technology Silchar, India",
  "Thoudam Doren Singh, National Institute of Technology Silchar, India",
  "Themrichon Tuithung, National Institute of Technology Nagaland, India",
  "Arambam Neelima, National Institute of Technology Nagaland, India",
  "Heisnam Rohen Singh, Nagaland University, India",
  "Joyeeta Singha, LNM Institute of Information Technology, India",
  "Sandeep Kumar Dash, National Institute of Technology Mizoram, India",
  "Lenin Laitonjam, National Institute of Technology Mizoram, India",
  "Nongmeikapam Kishorjit Singh, Indian Institute of Information Technology Manipur, India",
  "Anupam Jamatia, CSED, NIT Agartala, India",
  "Naresh Kumar, University of Nizwa, Oman",
  "Dhananjay Singh, Hankuk University of Foreign Studies, South Korea",
  "Yu-Chen Hu, Providence University, Taiwan",
  "Ghanshyam Singh, University of Johannesburg, South Africa",
  "Victor Hugo C. de Albuquerque, Federal University of Ceara, Brazil",
  "Dhrubajyoti Bhowmik, National Institute of Technology Agartala, India",
  "Jiechao Gao, University of Virginia, USA",
  "Hafiz Tayyab Rauf, University of Brandford, UK",
  "Ali Ahmadian, Kean University, USA",
  "Dhrubajyoti Bhowmik, CSED, NIT Agartala, India",
  "Denis A. Pustokhin, State University of Management, Russia",
  "Erma Suryani, Institut Teknologi Sepuluh Nopember (ITS), Indonesia",
  "Sathish Kumar, Cleveland State University, USA",
  "Piyush Kumar, National Institute of Technology Patna, India",
  "Mario Ciampi, Institute for High Performance Computing and Networking of the National Research Council of Italy",
  "M'mtaz Karatas, National Defence University, Turkey",
  "Anand Nayyar, Duy Tan University, Vietnam",
  "Sanjeet Kumar Nayak, IIITDM Kancheepuram, India",
  "Naveen Chilamkurti, La Trobe University, Australia",
  "Rupak Chakraborty, Techno India University, India",
  "Pranesh Das, National Institute of Technology Calicut, India",
  "Mazin Mohammed, University of Anbar, Iraq",
  "Sujit Das, Siksha 'O' Anusandhan, India",
  "Vicente García Díaz, University of Oviedo, Spain",
  "Elena Verdu Perez, Universidad Internacional de La Rioja, Spain",
  "Vijay Kumar Bohat, Netaji Subhas University of Technology, India",
  "Saswati Debnath, Alliance University, India",
  "Fatih Ertam, Firat University, Turkey",
  "Gyan Singh Yadav, Indian Institute of Information Technology Kota, India",
  "Pranav Gangwani, Florida International University, USA",
  "Chien-Ming Chen, Shandong University of Science and Technology, China",
  "Ashish Singh, Kalinga Institute of Industrial Technology (KIIT), India"
];

const Committees = () => {
  const [showTPC, setShowTPC] = useState(false);

  const renderCommitteeSection = (title, members, withDepartment = false) => (
    <div className="mb-10 animate-on-scroll">
      <h3 className="text-xl font-semibold text-icds-dark mb-4">{title}</h3>
      <div className="space-y-2">
        {members.map((member, index) => (
          <div key={index} className="text-muted-foreground">
            {withDepartment ? (
              <p>{member.name}, {member.department}, {member.institution}</p>
            ) : (
              <p>{member.name}{member.role ? `, ${member.role}` : ''}{member.institution ? `, ${member.institution}` : ''}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="committees" className="section-padding bg-icds-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Committees</h2>
          <p className="section-subtitle">
            Meet the team behind ICDSNE 2025
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {renderCommitteeSection("Patron", committeeData.patron)}
              {renderCommitteeSection("Co-Patrons", committeeData.coPatrons)}
              {renderCommitteeSection("General Chairs", committeeData.generalChairs, true)}
              {renderCommitteeSection("Organising Chairs", committeeData.organisingChairs, true)}
              {renderCommitteeSection("Technical Program Chairs", committeeData.technicalProgramChairs, true)}
              {renderCommitteeSection("Publication Chairs", committeeData.publicationChairs, true)}
            </div>
            <div>
              {renderCommitteeSection("Publicity Chairs", committeeData.publicityChairs, true)}
              {renderCommitteeSection("Hospitality Chairs", committeeData.hospitalityChairs, true)}
              {renderCommitteeSection("Web Chairs", committeeData.webChairs, true)}
              {renderCommitteeSection("Local Advisory Committee", committeeData.localAdvisory, true)}
              {renderCommitteeSection("Local Organization Committee", committeeData.localOrganization, true)}
              <div className="mb-10 animate-on-scroll">
                <h3 className="text-xl font-semibold text-icds-dark mb-4">International Advisory Committee</h3>
                <div className="space-y-2">
                  {committeeData.internationalAdvisory.map((member, index) => (
                    <div key={index} className="text-muted-foreground">
                      <p>{member.name}, {member.institution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-gray-200">
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowTPC(!showTPC)}
            >
              <h3 className="text-xl font-semibold text-icds-dark">Technical Program Committee</h3>
              <ChevronDown className={`w-5 h-5 transition-transform ${showTPC ? 'rotate-180' : ''}`} />
            </div>
            <div className={cn(
              "mt-4 overflow-hidden transition-all duration-300",
              showTPC ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
            )}>
              <div className="columns-1 md:columns-2 gap-8 space-y-2">
                {technicalProgramCommittee.map((member, index) => (
                  <p key={index} className="text-muted-foreground text-sm break-inside-avoid">{member}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committees;
