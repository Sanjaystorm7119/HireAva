import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobList = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } =
    useContext(AppContext);
  //States
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [filteredJob, setFilteredJobs] = useState([jobs]);

  //handle functions
  const handleCategory = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleLocation = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  useEffect(() => {
    const matchesCategory = (job) =>
      selectedCategory.length == 0 || selectedCategory.includes(job.category);
    const matchesLocation = (job) =>
      selectedLocation.length == 0 || selectedLocation.includes(job.location);
    const matchesTitle = (job) =>
      searchFilter.title === "" ||
      job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const matchesSearchLocation = (job) =>
      searchFilter.location === "" ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilteredJobs = jobs
      .slice()
      .reverse()
      .filter(
        (job) =>
          matchesCategory(job) &&
          matchesLocation(job) &&
          matchesTitle(job) &&
          matchesSearchLocation(job)
      );

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1);
  }, [jobs, selectedCategory, selectedLocation, searchFilter]);
  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-2 px-3">
      {/* side bar */}
      <aside className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 bg-white px-3">
        {/* search filter from hero component */}
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-600">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-md px-4 py-1.5">
                    {searchFilter.title}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt="cross_icon"
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-md px-4 py-1.5 ml-2">
                    {searchFilter.location}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      className="cursor-pointer"
                      src={assets.cross_icon}
                      alt="cross_icon"
                    />
                  </span>
                )}
              </div>
            </>
          )}
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="px-6 py-1.5 rounded border border-gray-400 lg:hidden"
        >
          {showFilter ? "Close" : "Filters"}
        </button>

        {/* category filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h3 className="font-medium text-lg">Search by Categories</h3>
          <ul className="space-y-4 text-gray-600 pt-4">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center " key={index}>
                <input
                  className="scale-125"
                  type="checkbox"
                  onChange={() => handleCategory(category)}
                  checked={selectedCategory.includes(category)}
                  name=""
                  id=""
                />
                {category}
              </li>
            ))}
          </ul>
        </div>
        {/* location filter  */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h3 className="font-medium text-lg py-4 pt-10">
            Search by Locations
          </h3>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center " key={index}>
                <input
                  className="scale-125"
                  type="checkbox"
                  onChange={() => handleLocation(location)}
                  checked={selectedLocation.includes(location)}
                  name=""
                  id=""
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div>
        {/* Job listings */}
        <section className="w-full text-green-800 max-lg:px">
          <h3 className="font-medium text-3xl id='job_list' ">Latest Jobs</h3>
          <p className="mb-8 ">Get hired at VC backed startups</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredJob
              .slice((currentPage - 1) * 6, currentPage * 6)
              .map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
          </div>
          {/* pagination */}
          {filteredJob.length > 0 && (
            <div className="flex items-center justify-center space-x-2 mt-10">
              <a href="#job_list">
                <img
                  onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                  src={assets.left_arrow_icon}
                  alt="back_arrow"
                ></img>
              </a>
              {Array.from({ length: Math.ceil(filteredJob.length / 6) }).map(
                (_, index) => (
                  <a href="#job_list">
                    <button
                      onClick={() => setCurrentPage(index + 1)}
                      className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
                        currentPage === index + 1
                          ? "bg-blue-100 text-blue-400"
                          : "text-pink-500"
                      }`}
                    >
                      {index + 1}
                    </button>
                  </a>
                )
              )}
              <a href="#job_list">
                <img
                  onClick={() =>
                    setCurrentPage(
                      Math.min(
                        currentPage + 1,
                        Math.ceil(filteredJob.length / 6)
                      )
                    )
                  }
                  src={assets.right_arrow_icon}
                  alt="forwardx_arrow"
                ></img>
              </a>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default JobList;
