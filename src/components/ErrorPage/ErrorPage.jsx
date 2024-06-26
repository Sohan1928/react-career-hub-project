import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="max-w-6xl mx-auto  text-center items-center justify-center my-10">
      <h1 className="text-6xl font-bold mb-3">Oops!</h1>
      <h2 className="text-2xl font-semibold mb-2">404- PAGE NOT FOUND</h2>
      <p className="font-medium w-96 mx-auto mb-2">
        The page tou are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <Link to="/">
        <button className="bg-blue-600 py-2 px-3 text-white font-medium rounded-full">
          GO TO HOME PAGE
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
