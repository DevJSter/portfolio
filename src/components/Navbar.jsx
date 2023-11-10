import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
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
