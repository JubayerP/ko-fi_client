import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.avif';

const Navbar = () => {
    const menuItems = <>
        <li className='hover:text-primary text-secondary text-lg'><Link to='/'>Home</Link></li>
        <li className='hover:text-primary text-secondary text-lg'><Link to='/products'>Products</Link></li>
        <li className='hover:text-primary text-secondary text-lg'><Link to='/add'>Add Products</Link></li>
        <li className='hover:text-primary text-secondary text-lg'><Link to='/'>Sign in</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 no-animation h-28 bg-base">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-14 menu-horizontal px-1 font-nav">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/signup' className="btn capitalize bg-secondary text-primary hover:bg-secondary rounded px-6">Sign Up</Link>
            </div>
        </div>
    );
};

export default Navbar;