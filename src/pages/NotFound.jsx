import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="p-4 ">
      <p className="text-indigo-500 text-lg font-bold">404 ERROR</p>
      <h1 className="text-6xl font-bold my-4">Page not found</h1>
      <p className="text-lg">Sorry, we couldn't find the page you're looking for</p>
      <Link to="/" className="flex font-bold  text-lg items-center mt-5 text-indigo-500">
        <FaArrowLeft size={20} className="mr-2" /> Go back
      </Link>
    </div>
  );
}

export default NotFound;
