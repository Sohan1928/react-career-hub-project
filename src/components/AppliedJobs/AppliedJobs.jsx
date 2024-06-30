import { MdOutlineLocationOn } from "react-icons/md";

import { AiOutlineDollarCircle } from "react-icons/ai";

import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);

  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }

      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div className=" mx-auto">
      <div className="">
        <div className="bg-[#7E90FE] bg-opacity-5 text-center items-center">
          <h1 className="text-3xl font-bold pt-10">Applied Jobs</h1>
          <img className="w-48" src="../bg1.png" alt="" />
        </div>
        <div className="relative mt-3 mb-16">
          <details className="dropdown absolute top-0 right-0 mr-1 lg:mr-9">
            <summary className="py-2 px-2 rounded-lg font-medium  text-[#bda9ff] border border-[#9873FF] uppercase shadow-md shadow-[#9873FF] hover:shadow-[#f652ff]">
              Filter Jobs
            </summary>
            <ul className="menu dropdown-content z-[1]  p-2  mx-2 lg:mx-0 bg-[#ede8f5] shadow-lg shadow-[#be9aff] rounded-md hover:shadow-[#894eff] text-[#723fff] font-semibold">
              <li onClick={() => handleJobsFilter("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleJobsFilter("remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleJobsFilter("onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </details>
        </div>

        <div className="w-full items-center lg:pl-8 mb-10">
          {displayJobs.map((job) => (
            <div key={job.id} className="">
              <div className="my-6 mx-auto lg:flex border border-[#7E90FE] rounded-md p-4 items-center justify-between shadow-lg shadow-[#7E90FE] hover:bg-[#f0e9ff]">
                <div className="gap-5 lg:flex ml-6 lg:ml-0">
                  <img
                    className="w-60 h-60 bg-[#f6f6f7] p-3 rounded-md"
                    src={job.logo}
                  />
                  <div className="">
                    <h2 className="font-semibold my-3">{job.job_title}</h2>
                    <h2 className="text-xl font-semibold opacity-80">
                      {job.company_name}
                    </h2>
                    <div className="gap-3 flex my-3">
                      <div>
                        <button className="border-2 border-[#9873FF] px-3 py-1 rounded-md text-[#9873FF] font-bold">
                          {job.remote_or_onsite}
                        </button>
                        <button className="border-2 border-[#9873FF] px-3 ml-3 py-1 rounded-md text-[#9873FF] font-bold">
                          {job.job_type}
                        </button>
                        <div className=" my-2 md:flex items-center gap-8">
                          <p className="flex items-center">
                            <MdOutlineLocationOn className="text-xl mr-2"></MdOutlineLocationOn>
                            {job.location}
                          </p>
                          <p className="flex items-center">
                            <AiOutlineDollarCircle className="text-xl mr-2"></AiOutlineDollarCircle>
                            {job.salary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Link to={`/jobDetails/${job.id}`}>
                    <button className="ml-6 lg:ml-0 button px-3 py-1 my-3 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
