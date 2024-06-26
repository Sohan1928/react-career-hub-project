import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    salary,
    job_type,
    job_description,
  } = job;

  return (
    <div className="w-72 lg:w-96 mx-auto border p-4 h-full rounded-lg hover:bg-[#e5e7f9]">
      <div>
        <img className="w-32" src={logo} alt="" />
        <h1 className="font-semibold my-3">{job_title}</h1>
        <p className="text-xl font-semibold opacity-80">{company_name}</p>
      </div>
      <div className="gap-3 flex my-3">
        <button className="border-2 border-[#9873FF] px-3 py-1 rounded-md">
          {remote_or_onsite}
        </button>
        <button className="border-2 border-[#9873FF] px-3 py-1 rounded-md">
          {job_type}
        </button>
      </div>
      <div className="space-y-2 lg:flex gap-4">
        <div className="flex items-center gap-2">
          <MdOutlineLocationOn />
          <h3>{location}</h3>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineDollarCircle />
          <h3>{salary}</h3>
        </div>
      </div>
      <button className="px-3 py-1 my-3 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
        View Details
      </button>
    </div>
  );
};

export default Job;
