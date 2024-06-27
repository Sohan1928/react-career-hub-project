import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Featured Jobs</h1>
        <p className="opacity-70 pb-8">
          <small>
            Explore thousands of job opportunities with all the information you
            need. Its your future.
          </small>
        </p>
      </div>
      <div className="grid lg:grid-cols-2 items-center my-4 gap-4">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className="mx-auto text-center ">
        <div className={dataLength === jobs.length && "hidden"}>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="px-4 py-2 my-5 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold shadow-md shadow-[#9873FF]"
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
