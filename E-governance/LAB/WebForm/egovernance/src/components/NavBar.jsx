import { NavLink } from "react-router-dom";
import { logo1 } from "../assets/assets";
import { IoMdMenu } from "react-icons/io";
import { FaSearch, FaUser } from "react-icons/fa";
import Button from "./Button";

const menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "News",
    link: "/news",
  },
];

const NavBar = () => {
  return (
    <div className="flex items-center flex-wrap  gap-x-6 border sticky mt-0 z-50 bg-primary">
      <button className="lg:hidden">
        <IoMdMenu className=" ml-3 w-5 h-5" aria-hidden="true" />
      </button>

      <NavLink to="/">
        <img className="ml-4" src={logo1} alt={logo1} width={80} height={200} />
      </NavLink>
      <div className="flex flex-col text-secondary justify-between text-center ml-[-1.2rem]">
        <h1 className=" font-bold items-center">MINISTRY OF HEALTH</h1>
        <h3>Kathmandu,Nepal</h3>
      </div>

      {menu.map((val) => (
        <NavLink
          className=" max-md:hidden text-secondary font-semibold uppercase hover:text-one"
          key={val.id}
          to={val.link}>
          {val.name}
        </NavLink>
      ))}
      <div className="flex ml-8 ">
        <div className=" flex items-center max-sm:ml-[-2rem]">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500  "
          />
          <button className="bg-secondary text-tertiary rounded-r-md px-4 py-2 hover:bg-two">
            <FaSearch className="h-[1.6rem]" />
          </button>
        </div>
        <div className="px-2 space-x-2 flex items-center">
          <Button
            to="/signup"
            value="Sign Up"
            className="bg-secondary text-tertiary px-4 py-2 rounded-sm shadow-lg hover:bg-two m max-sm:text-sm max-sm:px-2 "></Button>
          <div className="lg:px-3">
            <button className="bg-secondary text-tertiary px-4 py-2 rounded-sm shadow-lg hover:bg-two flex items-center  max-sm:text-sm max-sm:px-2 ">
              <FaUser className="mr-2" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
