import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });

    setIsSearched(true);
    // console.log({
    //   title: titleRef.current.value,
    //   location: locationRef.current.value,
    // });
  };

  return (
    <div className="container 2xl:px-20 mx-auto px-5 my-10">
      <div className="bg-gradient-to-r from bg-blue-400 to-purple-700 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Get hired Fast With AVA
        </h2>
        <p className="mb-8 max-wxl mx-auto text-lg font-light px-5">
          Explore the best Job Opportunities
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto">
          <div className="flex items-center ">
            <img
              className="h-4 sm:h-5"
              src={assets.search_icon}
              alt="search_icon"
            />
            <input
              ref={titleRef}
              type="text"
              placeholder="search for jobs"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
            />
          </div>

          <div className="flex items-center">
            <img
              className="h-4 sm:h-5"
              src={assets.location_icon}
              alt="location_icon"
            />
            <input
              ref={locationRef}
              type="text"
              placeholder="Location"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
            />
          </div>
  
          <button
            onClick={onSearch}
            className=" bg-blue-400 px-6 py-2 rounded text-white m-1"
          >
            Search
          </button>
        </div>
      </div>
      <div className="border border-gray-300 shadow-md mx-2 mt-5 rounded-md flex p-5">
        <div className="flex justify-center gap-10 sm:gap-5 md:gap-14 lg:gap-18 flex-wrap ">
          <p className="font-medium">Partnered by</p>
          <img className="h-6" src={assets.walmart_logo} alt="company_logo" />
          <img className="h-6" src={assets.adobe_logo} alt="company_logo" />
          <img className="h-6" src={assets.amazon_logo} alt="company_logo" />
          <img className="h-6" src={assets.microsoft_logo} alt="company_logo" />
          <img className="h-6" src={assets.samsung_logo} alt="company_logo" />
          <img className="h-6" src={assets.accenture_logo} alt="company_logo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
