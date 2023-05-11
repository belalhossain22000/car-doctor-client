import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'


const NavBar = () => {
    const navitems= <>
    <Link to="/"><li>Home</li></Link>
    <li>About</li>
    <li>Services</li>
    <li>Blog</li>
    <li>Content</li>
    
    </>
  return (
    <div className="navbar h-28 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 flex gap-5 p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navitems}
          </ul>
        </div>
       <Link to="/"><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal flex gap-5">
          {navitems}
        </ul>
      </div>
      <div className="navbar-end flex gap-5">
        <Link>Cart</Link>
        <Link>search</Link>
        <button className="btn btn-outline bottom-1 hover:border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811]  btn-[]">Warning</button>
      </div>
    </div>
  );
};

export default NavBar;
