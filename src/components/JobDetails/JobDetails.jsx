import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { PiSubtitles } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);

  return (
    <div className="mb-20">
      <div className="bg-[#7E90FE] bg-opacity-5 text-center items-center">
        <h1 className="text-3xl font-bold pt-10">Job Details</h1>
        <img className="w-48" src="../bg1.png" alt="" />
      </div>

      <div className="grid md:grid-cols-4 gap-5 my-14 max-w-6xl mx-auto">
        <div className="md:col-span-3 border p-4">
          <h2 className="pb-8">
            <span className="text-xl font-bold">Job Description</span>:
            <span className="opacity-70"> {job.job_description}</span>
          </h2>

          <h2 className="">
            <span className="text-xl font-bold">Job Responsibility</span>:
            <span className="opacity-70"> {job.job_responsibility}</span>
          </h2>

          <h2 className="py-8">
            <span className="text-xl font-bold">Educational Requirements:</span>
            <p className="opacity-70 pt-4"> {job.educational_requirements}</p>
          </h2>

          <h2 className="">
            <span className="text-xl font-bold">Experiences:</span>
            <p className="opacity-70 py-4"> {job.experiences}</p>
          </h2>
        </div>

        <div className="mx-2 lg:mx-0 bg-[#ede3ff] shadow-lg shadow-[#be9aff] rounded-md">
          <div>
            <h3 className="px-3 py-6 text-xl font-bold">Job Details</h3>
            <hr className="h-px bg-[#b6b1bf] border-0 mx-auto w-60"></hr>
          </div>

          <div className="px-3 py-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg border border-dashed text-[#a270ff] border-[#9973e0]">
                <HiOutlineCurrencyDollar />
              </h3>
              <h2>
                <span className="font-semibold opacity-85">Salary</span>:{" "}
                <span className="opacity-70 font-medium">
                  {job.salary} (Per Month)
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <h3 className="text-lg text-[#a270ff] border border-dashed border-[#9973e0]">
                <PiSubtitles />
              </h3>
              <h2>
                <span className="font-semibold opacity-85">Job Title</span>:{" "}
                <span className="opacity-70 font-medium">{job.job_title}</span>
              </h2>
            </div>
          </div>
          <div>
            <h3 className="px-3 py-6 text-xl font-bold">Contact Information</h3>
            <hr className="h-px bg-[#b6b1bf] border-0 mx-auto w-60"></hr>
          </div>

          <div className="px-3 py-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg border border-dashed text-[#a270ff] border-[#9973e0]">
                <FiPhone />
              </h3>
              <h2>
                <span className="font-semibold opacity-85">Phone</span>:{" "}
                <span className="opacity-70 font-medium">
                  {job.contact_information.phone}
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <h3 className="text-lg text-[#a270ff] border border-dashed border-[#9973e0]">
                <GoMail />
              </h3>
              <h2>
                <span className="font-semibold opacity-85">Email</span>:{" "}
                <span className="opacity-70 font-medium">
                  {job.contact_information.email}
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <h3 className="text-lg text-[#a270ff] border border-dashed border-[#9973e0]">
                <IoLocationOutline />
              </h3>
              <h2>
                <span className="font-semibold opacity-85">Address</span>:{" "}
                <span className="opacity-70 font-medium">
                  {job.contact_information.address}
                </span>
              </h2>
            </div>
          </div>
          <div className="mx-auto text-center">
            <button className="py-2 px-3 rounded-lg font-semibold  bg-gradient-to-r from-[#6075ff] to-[#9873FF] text-[#bda9ff] border border-[#9873FF] uppercase shadow-md shadow-[#9873FF] hover:bg-none">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
