import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="h-20">
      <div className="navbar bg-base-100 shadow-lg px-4 fixed z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to='/' className={({isActive}) =>isActive ? 'text-primary' : 'font-bold'}>Home</NavLink>
      <NavLink to='/ListedBooks' className={({isActive}) =>isActive ? 'text-primary' : 'font-bold'}>ListedBooks</NavLink>
      <NavLink to='/PagesToRead' className={({isActive}) =>isActive ? 'text-primary' : 'font-bold'}>Pages to read</NavLink>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-2xl font-bold lg:text-4xl">Book Vite</Link>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1 font-bold flex gap-10">
      <NavLink to='/' className={({isActive}) =>isActive ? 'text-primary' : 'font-bold'}>Home</NavLink>
      <NavLink to='/ListedBooks' className={({isActive}) =>isActive ? 'text-primary' : 'font-bold'}>ListedBooks</NavLink>
      <NavLink to='/PagesToRead' className={({isActive}) =>isActive ? 'text-primary' : 'font-bold'}>Pages to read</NavLink>
      
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;