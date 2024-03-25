import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 text-xl   shadow-lg px-6 fixed z-10">
            <div className="flex-1">
                <a className="btn btn-ghost  ml-10 font-bold text-2xl text-primary gap-0">Book <span className='text-secondary'>Vibe</span></a>
            </div>
            <div className="flex-none ">
                <ul className="menu menu-horizontal px-80 font-bold text-xl  ">
                   
                    <Link to='/'  className='text-success'>
                        Home
                    </Link>
                    <Link to='/listedbooks'>
                    Listed Books
                    </Link>
                  
                    <li>
                        <a>Pages to Read</a>
                    </li>
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