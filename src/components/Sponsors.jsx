// import React from "react";

const Sponsors = () => {
    return (
        <div className="bg-white w-full py-16 relative overflow-hidden">
            {/* === Animated Background === */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                <div className="absolute w-[600px] h-[600px] border border-[#2563eb]/10 rounded-full left-1/2 top-1/2 
                        transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                <div className="absolute w-[400px] h-[400px] border border-[#2563eb]/20 rounded-full left-1/2 top-1/2 
                        transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                <div className="absolute w-[200px] h-[200px] border border-[#2563eb]/30 rounded-full left-1/2 top-1/2 
                        transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                <div className="absolute w-3 h-3 bg-[#2563eb] rounded-full left-[calc(50%-300px)] top-1/2 
                        transform -translate-y-1/2 animate-ping opacity-75" />
                <div className="absolute w-2 h-2 bg-[#2563eb] rounded-full left-[calc(50%-200px)] top-1/2 
                        transform -translate-y-1/2 animate-ping opacity-75" />
                <div className="absolute w-1.5 h-1.5 bg-[#2563eb] rounded-full left-[calc(50%-100px)] top-1/2 
                        transform -translate-y-1/2 animate-ping opacity-75" />
            </div>

            {/* === Content === */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black mb-2 text-[#2563eb] inline-flex items-center justify-center relative">
                        Sponsor
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-[#2563eb]"></span>
                    </h2>
                    <div className="flex flex-col items-center justify-center mt-8 mb-16">
                        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-16">
                            <img src="/DRDO logo.jpg" className="rounded-full" alt="" />
                        </div>
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

export default Sponsors;
