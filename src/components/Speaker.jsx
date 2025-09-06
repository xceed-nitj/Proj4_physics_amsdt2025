//import React from "react";
import { useState, useEffect, useRef, forwardRef } from 'react';
import axios from "axios";
import getEnvironment from "../getenvironment";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

const Speaker = forwardRef((props, ref) => {
  const confid = props.confid;
  const [speakers, setSpeakers] = useState([]);
  const [apiUrl, setApiUrl] = useState(null);

  // Track the tallest card height
  const [cardMinHeight, setCardMinHeight] = useState(null);

  // Keep refs to each rendered card element
  const cardRefs = useRef({});
  const setCardRef = (id) => (el) => {
    if (el) cardRefs.current[id] = el;
    else delete cardRefs.current[id];
  };

  // Helper: measure tallest card and set as min height
  const measureHeights = () => {
    // Defer to next paint so layout is final
    requestAnimationFrame(() => {
      const nodes = Object.values(cardRefs.current);
      if (!nodes.length) return;
      const max = Math.max(...nodes.map((n) => n.offsetHeight || 0));
      if (max && max !== cardMinHeight) {
        setCardMinHeight(Math.ceil(max));
      }
    });
  };

  useEffect(() => {
    getEnvironment().then(url => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (!apiUrl) return;
    axios.get(`${apiUrl}/conferencemodule/speakers/conference/${confid}`, {
      withCredentials: true
    })
      .then(res => {
        const sortedSpeakers = (res.data || [])
          .filter(speaker => speaker.TalkType !== "1")
          .sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0));
        setSpeakers(sortedSpeakers);
      })
      .catch(err => console.log(err));
  }, [apiUrl, confid]);

  // Re-measure when speakers change
  useEffect(() => {
    measureHeights();
    // Re-measure on window resize
    const onResize = () => measureHeights();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speakers]);

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-[800px] h-[800px] border border-[#2563eb]/10 rounded-full -right-1/4 top-1/4 transform -translate-y-1/2"></div>
        <div className="absolute w-[500px] h-[500px] border border-[#2563eb]/15 rounded-full -left-1/4 bottom-1/4"></div>
        <div className="absolute w-3 h-3 bg-[#2563eb] rounded-full left-[10%] top-[20%] animate-pulse"></div>
        <div className="absolute w-2 h-2 bg-[#2563eb] rounded-full right-[15%] bottom-[30%] animate-pulse"></div>
      </div>

      <div className="top-0 w-screen z-40">
        <Navbar />
      </div>

      <div ref={ref} className="bg-white container space-y-8 lg:max-w-7xl py-16 mx-auto px-8 sm:px-10 lg:px-8 md:pb-5">
        <h2 className="text-4xl font-sans font-bold text-center text-[#2563eb] mb-8">Our Speakers</h2>
        <div className="w-24 h-1 mx-auto mb-10"></div>

        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
            {speakers.length > 0 ? (
              speakers.map((speaker) => (
                <Link
                  key={speaker.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  to={speaker.ProfileLink !== "" ? speaker.ProfileLink : "/"}
                  className="group block h-full"
                >
                  <div
                    ref={setCardRef(speaker.id)}
                    className="relative w-full bg-[white] border border-[#2563eb]/30 hover:border-[#2563eb] rounded-lg shadow-md hover:shadow-lg hover:shadow-[#2563eb]/20 transition-all duration-300 flex flex-col items-center justify-start p-6 overflow-hidden backdrop-blur-sm h-full"
                    style={cardMinHeight ? { minHeight: cardMinHeight } : undefined}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2563eb]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#2563eb]/50 mb-5 relative z-10 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#2563eb]/20">
                      <img
                        src={speaker.ImgLink}
                        alt={speaker.Name}
                        className="w-full h-full object-cover"
                        onLoad={measureHeights}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/150?text=Speaker";
                          measureHeights();
                        }}
                      />
                    </div>

                    <p className="font-sans text-[18px] font-bold text-black group-hover:text-[#2563eb] transition-colors duration-300 text-center z-10">
                      {speaker.Name}
                    </p>

                    <p className="font-sans text-[12px] font-medium text-gray-400 text-center mt-1 z-10 px-2">
                      {speaker.Institute}
                    </p>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2563eb]/30 group-hover:bg-[#2563eb] transition-colors duration-300"></div>
                  </div>
                </Link>
              ))
            ) : (
              // Loading state with skeleton cards (fixed height for consistency)
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="w-full bg-[white] border border-[#2563eb]/10 rounded-lg flex flex-col items-center justify-center p-6 h-full"
                  style={{ minHeight: cardMinHeight || 320 }}
                >
                  <div className="w-32 h-32 rounded-full bg-[#eaf4ff] animate-pulse mb-4"></div>
                  <div className="h-5 w-3/4 bg-[#eaf4ff] animate-pulse mb-2 rounded"></div>
                  <div className="h-3 w-1/2 bg-[#eaf4ff] animate-pulse rounded"></div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

Speaker.displayName = 'Speaker';
export default Speaker;
