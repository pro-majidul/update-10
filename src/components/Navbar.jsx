import React from 'react';
import { GiTeacher } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'btn hover:bg-green-300 btn-accent text-black' : 'btn btn-neutral text-lg font-medium text-white hover:bg-green-300'}> Home</NavLink>
                        <NavLink to='/find-tutors' className={({ isActive }) => isActive ? 'btn btn-accent text-white hover:bg-green-300' : 'btn btn-neutral text-lg font-medium text-white hover:bg-green-300'}> Find Tutors</NavLink>
                        <NavLink to='/add-tutorial' className={({ isActive }) => isActive ? 'btn btn-accent text-white hover:bg-green-300' : 'btn btn-neutral text-lg font-medium text-white hover:bg-green-300'}> Add Tutorials</NavLink>
                        <NavLink to='/my-tutorial' className={({ isActive }) => isActive ? 'btn btn-accent text-white hover:bg-green-300' : 'btn btn-neutral text-lg font-medium text-white hover:bg-green-300'}> My Tutorials
                        </NavLink>
                        <NavLink to='/booked-tutor' className={({ isActive }) => isActive ? 'btn btn-accent text-white hover:bg-green-300' : 'btn btn-neutral text-lg font-medium text-white hover:bg-green-300'}> My booked tutors</NavLink>

                    </ul>
                </div>
                <NavLink to='/' className='flex items-center md:text-4xl text-3xl  gap-1 md:font-bold'>
                    <GiTeacher size={28} />Tutors
                    </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    <NavLink to='/' className={({ isActive }) => isActive ? 'btn hover:bg-green-300 btn-accent text-black' : 'btn btn-neutral text-lg font-medium text-white hover:bg-green-300'}> Home</NavLink>
                    <NavLink to='/find-tutors' className={({ isActive }) => isActive ? 'btn btn-accent text-white hover:bg-green-300' : 'btn btn-neutral text-lg font-medium text-white hover:bg-green-300'}> Find Tutors</NavLink>
                    <NavLink to='/add-tutorial' className={({ isActive }) => isActive ? 'btn btn-accent text-white hover:bg-green-300' : 'btn btn-neutral text-lg font-medium text-white hover:bg-green-300'}> Add Tutorials</NavLink>
                    <NavLink to='/my-tutorial' className={({ isActive }) => isActive ? 'btn btn-accent text-white hover:bg-green-300' : 'btn btn-neutral text-lg font-medium text-white hover:bg-green-300'}> My Tutorials
                    </NavLink>
                    <NavLink to='/booked-tutor' className={({ isActive }) => isActive ? 'btn btn-accent text-white hover:bg-green-300' : 'btn btn-neutral text-lg font-medium text-white hover:bg-green-300'}> My booked tutors</NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login' className="btn">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;