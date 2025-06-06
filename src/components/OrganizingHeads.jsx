// import React from "react";

const OrganizingHeads = () => {
  const patrons = [
    {
      name: "Prof. Binod Kumar Kanaujia",
      position: "Director, Dr B R Ambedkar National Institute of Technology Jalandhar",
      image: "Director.jpg",
      role: "Chief Patron",
    },
    {
      name: "Prof. Akash Deep",
      position: "Director, Institute of Nano Science and Technology, Mohali",
      image: "akashdeep.jpeg",
      role: "Chief Patron",
    },
  ];

  const coPatrons = [
    {
      name: "Prof. Ajay Bansal",
      position: "Registrar,Dr B R Ambedkar National Institute of Technology Jalandhar",
      image: "ajaybansal.jpg",
      role: "Patron",
    },
    {
      name: "Prof. Rohit Mehra",
      position: "Dean (R&C), Dr B R Ambedkar National Institute of Technology Jalandhar",
      image: "rohitmehra.jpg",
      role: "Patron",
    },
  ];

 const coPatrons2 = [
    {
      name: "Prof. H. M. Mittal",
      position: "Head, Department of Physics, NIT Jalandhar",
      image: "mittal.jpg",
      role: "Patron",
    }
  ];
   const chairman = [
    {
      name: "Dr. Praveen Malik",
      position: "Department of Physics, NIT Jalandhar",
      image: "malik.jpg",
      role: "Patron",
    }
  ];

 const secretary = [
    {
      name: "Dr. Abhinav Pratap Singh",
      position: "Department of Physics, NIT Jalandhar",
      image: "abhinav.jpg",
      role: "Patron",
    },
    {
      name: "Dr Shishram Rebari",
      position: "Department of Physics, NIT Jalandhar",
      image: "Shishram.jpg",
      role: "Patron",
    },
     {
      name: "Dr Vijayakumar Shanmugam",
      position: "Scientist E, INST Mohali",
      image: "vijay.png",
      role: "Patron",
    },
  ];

  return (
    <div className="bg-black w-full py-16 relative overflow-hidden">
      {/* === Animated Atomic/Molecular Background === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {/* Electron Orbits */}
        <div className="absolute w-[600px] h-[600px] border border-[#00ff4c]/10 rounded-full left-1/2 top-1/2 
                        transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute w-[400px] h-[400px] border border-[#00ff4c]/20 rounded-full left-1/2 top-1/2 
                        transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute w-[200px] h-[200px] border border-[#00ff4c]/30 rounded-full left-1/2 top-1/2 
                        transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

        {/* Electrons */}
        <div className="absolute w-3 h-3 bg-[#00ff4c] rounded-full left-[calc(50%-300px)] top-1/2 
                        transform -translate-y-1/2 animate-ping opacity-75" />
        <div className="absolute w-2 h-2 bg-[#00ff4c] rounded-full left-[calc(50%-200px)] top-1/2 
                        transform -translate-y-1/2 animate-ping opacity-75" />
        <div className="absolute w-1.5 h-1.5 bg-[#00ff4c] rounded-full left-[calc(50%-100px)] top-1/2 
                        transform -translate-y-1/2 animate-ping opacity-75" />
      </div>

      {/* === Main Content Container === */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ====== Section: Chief Patrons ====== */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-[#00ff4c] inline-flex items-center">
            Chief Patrons
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00ff4c] to-transparent mx-auto mt-4" />
        </div>

        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {patrons.map((patron, idx) => (
              <div
                key={idx}
                className="bg-[#001a00] border border-[#00ff4c]/30 hover:border-[#00ff4c]/70
                           transition-all duration-300 rounded-xl p-6 shadow-lg hover:shadow-[#00ff4c]/20
                           backdrop-blur-sm max-w-sm flex flex-col items-center"
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#00ff4c] p-1">
                    <img
                      src={patron.image}
                      alt={patron.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* If you later want to show 'Chief Patron' as a badge:
                    <div className="absolute -top-2 -right-2 bg-[#00ff4c] text-black font-bold px-3 py-1
                                     rounded-full text-sm">
                      {patron.role}
                    </div> */}
                </div>
                <h3 className="text-xl font-bold text-[#00ff4c] mb-2 text-center">
                  {patron.name}
                </h3>
                <p className="text-gray-300 text-center text-sm">{patron.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ====== Section: Co-Patrons ====== */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-[#00ff4c] inline-flex items-center">
            Patrons
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00ff4c] to-transparent mx-auto mt-4" />
        </div>

        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {coPatrons.map((coPatron, idx) => (
              <div
                key={idx}
                className="bg-[#001a00] border border-[#00ff4c]/30 hover:border-[#00ff4c]/70
                           transition-all duration-300 rounded-xl p-6 shadow-lg hover:shadow-[#00ff4c]/20
                           backdrop-blur-sm max-w-sm flex flex-col items-center"
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#00ff4c] p-1">
                    <img
                      src={coPatron.image}
                      alt={coPatron.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* If you later want to show 'Patron' badge:
                    <div className="absolute -top-2 -right-2 bg-[#00ff4c] text-black font-bold px-3 py-1
                                     rounded-full text-sm">
                      {coPatron.role}
                    </div> */}
                </div>
                <h3 className="text-xl font-bold text-[#00ff4c] mb-2 text-center">
                  {coPatron.name}
                </h3>
                <p className="text-gray-300 text-center text-sm">{coPatron.position}</p>
              </div>
            ))}
          </div>
        </div>

<div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-[#00ff4c] inline-flex items-center">
            Co-Patron
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00ff4c] to-transparent mx-auto mt-4" />
        </div>

        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {coPatrons2.map((coPatron, idx) => (
              <div
                key={idx}
                className="bg-[#001a00] border border-[#00ff4c]/30 hover:border-[#00ff4c]/70
                           transition-all duration-300 rounded-xl p-6 shadow-lg hover:shadow-[#00ff4c]/20
                           backdrop-blur-sm max-w-sm flex flex-col items-center"
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#00ff4c] p-1">
                    <img
                      src={coPatron.image}
                      alt={coPatron.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* If you later want to show 'Patron' badge:
                    <div className="absolute -top-2 -right-2 bg-[#00ff4c] text-black font-bold px-3 py-1
                                     rounded-full text-sm">
                      {coPatron.role}
                    </div> */}
                </div>
                <h3 className="text-xl font-bold text-[#00ff4c] mb-2 text-center">
                  {coPatron.name}
                </h3>
                <p className="text-gray-300 text-center text-sm">{coPatron.position}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-[#00ff4c] inline-flex items-center">
            Chairman/Convernor
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00ff4c] to-transparent mx-auto mt-4" />
        </div>

        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {chairman.map((coPatron, idx) => (
              <div
                key={idx}
                className="bg-[#001a00] border border-[#00ff4c]/30 hover:border-[#00ff4c]/70
                           transition-all duration-300 rounded-xl p-6 shadow-lg hover:shadow-[#00ff4c]/20
                           backdrop-blur-sm max-w-sm flex flex-col items-center"
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#00ff4c] p-1">
                    <img
                      src={coPatron.image}
                      alt={coPatron.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* If you later want to show 'Patron' badge:
                    <div className="absolute -top-2 -right-2 bg-[#00ff4c] text-black font-bold px-3 py-1
                                     rounded-full text-sm">
                      {coPatron.role}
                    </div> */}
                </div>
                <h3 className="text-xl font-bold text-[#00ff4c] mb-2 text-center">
                  {coPatron.name}
                </h3>
                <p className="text-gray-300 text-center text-sm">{coPatron.position}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4 text-[#00ff4c] inline-flex items-center">
            Organising Secretaries
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00ff4c] to-transparent mx-auto mt-4" />
        </div>

        <div className="flex flex-col items-center justify-center mb-16">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {secretary.map((coPatron, idx) => (
              <div
                key={idx}
                className="bg-[#001a00] border border-[#00ff4c]/30 hover:border-[#00ff4c]/70
                           transition-all duration-300 rounded-xl p-6 shadow-lg hover:shadow-[#00ff4c]/20
                           backdrop-blur-sm max-w-sm flex flex-col items-center"
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#00ff4c] p-1">
                    <img
                      src={coPatron.image}
                      alt={coPatron.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  {/* If you later want to show 'Patron' badge:
                    <div className="absolute -top-2 -right-2 bg-[#00ff4c] text-black font-bold px-3 py-1
                                     rounded-full text-sm">
                      {coPatron.role}
                    </div> */}
                </div>
                <h3 className="text-xl font-bold text-[#00ff4c] mb-2 text-center">
                  {coPatron.name}
                </h3>
                <p className="text-gray-300 text-center text-sm">{coPatron.position}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* === Custom Ping Animation Keyframes === */}
      <style>
        {`
          @keyframes ping {
            0% { transform: scale(1); opacity: 1; }
            75%, 100% { transform: scale(2); opacity: 0; }
          }
          .animate-ping {
            animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}
      </style>
    </div>
  );
};

export default OrganizingHeads;
