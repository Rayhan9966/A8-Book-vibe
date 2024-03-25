import React from 'react';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 text-xl font-bold">
            <div className="flex-1">
                <a className="btn btn-ghost  ml-10 font-bold text-xl">Book Vibe</a>
            </div>
            <div className="flex-none ">
                <ul className="menu menu-horizontal px-80  ">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Listed Books</a>
                    </li>
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
            <div className='gap-4 mr-20'>    <button className="btn bg-green-500">Sign In</button>
            <button className="btn btn-active btn-accent">Sign Up</button>
                    </div>
        </div>
    );
};

export default Nav;