// src/components/Timeline.jsx

import axios from "axios";
import getEnvironment from "../getenvironment";
import { useState, useEffect, forwardRef } from "react";
import formatDate from "../utility/formatDate";

const Timeline = forwardRef((props, ref) => {
  const { confid } = props;
  const [datesData, setDatesData] = useState([]);
  const [apiUrl, setApiUrl] = useState(null);

  useEffect(() => {
    getEnvironment().then((url) => setApiUrl(url));
  }, []);

  useEffect(() => {
    if (!apiUrl) return;

    axios
      .get(`${apiUrl}/conferencemodule/eventDates/conference/${confid}`, {
        withCredentials: true,
      })
      .then((res) => setDatesData(res.data))
      .catch((err) => console.error(err));
  }, [apiUrl, confid]);

  return (
    <div
      ref={ref}
      className="
        bg-black container w-full
        flex flex-col items-center
        lg:flex-row lg:justify-evenly lg:items-start
        mx-auto px-5 sm:px-10
        min-h-[200px]
      "
    >
      <div className=" w-full pr-4">
        <div className="text-center">
          <h2 className="text-4xl font-black mb-4 text-[#00ff4c]">
            Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ff4c] to-transparent mx-auto mb-8" />
        </div>

        <div className="relative py-0">
          {/* central vertical line */}
          <div
            className="
              w-10 md:w-12 absolute top-0 left-0 bottom-0
              flex flex-col justify-center
              lg:left-1/2 lg:-ml-6
            "
            aria-hidden="true"
          >
            <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-b from-transparent to-[#00ff4c] rounded-t" />
            <div className="mx-auto w-1 grow bg-[#00ff4c]" />
            <div className="mx-auto w-1 h-2.5 grow-0 bg-gradient-to-t from-transparent to-[#00ff4c] rounded-b" />
          </div>

          <ul className="relative space-y-6 pl-10 md:pl-12 lg:pl-0">
            {datesData.map((item, idx) =>
              idx % 2 === 0 ? (
                <li
                  key={idx}
                  className="relative lg:w-1/2 lg:pr-6 lg:mr-auto"
                >
                  {/* dot */}
                  <div
                    className="
                      w-10 md:w-12 absolute top-0 left-0 bottom-0
                      -translate-x-full flex justify-center mt-5
                      lg:translate-x-6 lg:left-auto lg:right-0
                    "
                  >
                    <div className="w-3 h-3 bg-[#00ff4c] rounded-full ring ring-[#00ff4c]/30 ring-offset-2 ring-offset-black" />
                  </div>

                  {/* content */}
                  <div className="bg-[#00120a] hover:bg-[#001a0d] border border-[#00ff4c]/30 hover:border-[#00ff4c]/70 transition-all duration-300 rounded-xl p-5 shadow-md hover:shadow-[#00ff4c]/20">
                    <h4 className="font-semibold mb-2 text-white">
                      {item.title}
                    </h4>
                  </div>

                  {/* date */}
                  <div className="px-4 py-2 lg:w-48 absolute lg:top-0 lg:right-0 lg:bottom-0 lg:translate-x-full lg:flex lg:flex-col lg:mt-4 lg:py-0 lg:pl-6">
                    {!item.extended ? (
                      <p className="font-medium text-sm text-[#00ff4c]">
                        {formatDate(item.date)}
                      </p>
                    ) : (
                      <>
                        <p className="font-medium text-sm text-[#00ff4c]">
                          {formatDate(item.newDate)}
                        </p>
                        <p className="font-medium text-sm text-gray-500 line-through">
                          {formatDate(item.date)}
                        </p>
                      </>
                    )}
                  </div>
                </li>
              ) : (
                <li key={idx} className="relative lg:w-1/2 lg:pl-6 lg:ml-auto">
                  {/* dot */}
                  <div
                    className="
                      w-10 md:w-12 absolute top-0 left-0 bottom-0
                      -translate-x-full flex justify-center mt-5
                      lg:-translate-x-6
                    "
                  >
                    <div className="w-3 h-3 bg-[#00ff4c] rounded-full ring ring-[#00ff4c]/30 ring-offset-2 ring-offset-black" />
                  </div>

                  {/* content */}
                  <div className="bg-[#00120a] hover:bg-[#001a0d] border border-[#00ff4c]/30 hover:border-[#00ff4c]/70 transition-all duration-300 rounded-xl p-5 shadow-md hover:shadow-[#00ff4c]/20">
                    <h4 className="font-semibold mb-2 text-white">
                      {item.title}
                    </h4>
                  </div>

                  {/* date */}
                  <div className="px-4 py-2 lg:w-48 absolute lg:top-0 lg:left-0 lg:bottom-0 lg:-translate-x-full lg:flex lg:flex-col lg:text-right lg:mt-4 lg:py-0 lg:pr-6">
                    {!item.extended ? (
                      <p className="font-medium text-sm text-[#00ff4c]">
                        {formatDate(item.date)}
                      </p>
                    ) : (
                      <>
                        <p className="font-medium text-sm text-[#00ff4c]">
                          {formatDate(item.newDate)}
                        </p>
                        <p className="font-medium text-sm text-gray-500 line-through">
                          {formatDate(item.date)}
                        </p>
                      </>
                    )}
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
});

Timeline.displayName = "Timeline";
export default Timeline;
