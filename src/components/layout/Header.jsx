import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-indigo-900 text-indigo-100 p-4">
      <nav className=" flex flex-col sm:flex-row container  justify-between mx-auto  gap-5">
        <div className="flex ">
          <FaGithub size={30} className="mr-2  " />
          <p className="text-lg font-bold">Github User Finder</p>
        </div>
        <ul className="flex gap-4">
          <li className="mr-6">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mr-6">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
