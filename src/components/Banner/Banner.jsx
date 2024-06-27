const Banner = () => {
  return (
    <div className="flex items-center bg-[#7E90FE] bg-opacity-0 mx-auto lg:px-10">
      <div className="ml-5">
        <h1 className="text-2xl font-bold mb-5 lg:text-4xl">
          One Step <br /> Closer To Your <br />
          <span className="text-[#9873FF]">Dream Job</span>
        </h1>
        <p className="opacity-70 mb-5">
          <small>
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all your
            job application from start to finish.
          </small>
        </p>
        <button className="py-2 px-3 rounded-lg font-semibold  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] border border-[#9873FF] uppercase shadow-md shadow-[#9873FF] hover:bg-none duration-700 text-[#d5c8ff] cursor-not-allowed">
          Get Started
        </button>
      </div>
      <div className="inline-block">
        <img src="user.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
