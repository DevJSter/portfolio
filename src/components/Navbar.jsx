import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md ">
        {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain' /> */}
        <p className="blue-gradient_text w-18 h-18 object-contain" >ST</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='#' className={({ isActive }) => isActive ? "text-black" : "text-blue-600" }>
          About
        </NavLink>
        <NavLink to='#' className={({ isActive }) => isActive ? "text-black" : "text-blue-600"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
