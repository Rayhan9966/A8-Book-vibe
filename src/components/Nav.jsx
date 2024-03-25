import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 text-xl   shadow-lg px-6 fixed z-10">
            <div className="flex-1">
               <Link to='/' className="btn btn-ghost  ml-10 font-bold text-2xl text-primary gap-0">Book <span className='text-secondary'>Vibe</span></Link>
            </div>
            <div className="flex-none gap-2 ">
                <ul className="menu menu-horizontal px-80 font-bold text-xl hidden sm:flex items-center gap-5  ">
                   
                    <NavLink to='/'  className={({isActive})=> isActive? 'text-success font-bold': 'font-bold'}>
                        Home
                    </NavLink>
                    <NavLink to='/listedbooks'  className={({isActive})=> isActive? 'text-success font-bold': 'font-bold'}>
                    Listed Books
                    </NavLink>
                    <NavLink to='/pagestoread'  className={({isActive})=> isActive? 'text-success font-bold': 'font-bold'}>
                    Pages to Read

                    </NavLink>
                    <li>
                        <a>Bonus</a>
                    </li>
                    <li>
                        <a>Bonus</a>
                    </li>



                </ul>
                
            </div>
            <div className='gap-4 mr-20 '>    <button className="btn bg-green-500 font bold text-xl">Sign In</button>
            <button className="btn btn-accent font bold text-xl">Sign Up</button>
                    </div>
        </div>
    );
};

export default Nav;