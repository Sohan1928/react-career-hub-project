import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="">
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
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
