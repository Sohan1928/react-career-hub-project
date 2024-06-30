import PropTypes from "prop-types";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import "./btn.css";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    salary,
    job_type,
  } = job;

  return (
    <div className="w-72 lg:w-96 mx-auto border p-4 h-full rounded-lg hover:bg-[#e5e7f9] shadow-md shadow-[#9873FF]">
      <div>
        <img className="w-32" src={logo} alt="" />
        <h1 className="font-semibold my-3">{job_title}</h1>
        <p className="text-xl font-semibold opacity-80">{company_name}</p>
      </div>
      <div className="gap-3 flex my-3">
        <button className="border-2 border-[#9873FF] px-3 py-1 rounded-md text-[#9873FF] font-bold">
          {remote_or_onsite}
        </button>
        <button className="border-2 border-[#9873FF] px-3 py-1 rounded-md text-[#9873FF] font-bold">
          {job_type}
        </button>
      </div>
      <div className=" lg:flex items-center gap-8 my-2">
        <h2 className="flex items-center">
          <MdOutlineLocationOn className="text-xl mr-2"></MdOutlineLocationOn>
          {location}
        </h2>
        <h2 className="flex items-center">
          <AiOutlineDollarCircle className="text-xl mr-2"></AiOutlineDollarCircle>
          {salary}
        </h2>
      </div>
      <Link to={`/jobDetails/${id}`}>
        <button className="button px-3 py-1 my-3 rounded bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold">
          View Details
        </button>
      </Link>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.string.isRequired,
};

export default Job;
