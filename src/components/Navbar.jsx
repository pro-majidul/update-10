import React from 'react';
import { GiTeacher } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, setUser, logOutUser } = useUsers();

    const handelLogOut = () => {
        logOutUser()
            .then(result => {
                setUser(result);
                console.log(result);
                toast.success('user logOut SuccessFull')
            })
            .catch(error => {
                console.log(error);
                toast.error(`${error.code}`)
            })
    }

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
                {
                    user && user ? <div className='flex gap-1 items-center justify-center'>
                        <div className="dropdown">
                            <div tabIndex={0}  >
                                <img className='md:w-12 w-8  rounded-full' referrerPolicy='no-referrer' src={user.photoURL} alt="" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-green-500 rounded-box z-[1] w-28 mt-1  p-2 shadow">
                                <li>{user.displayName}</li>
                            </ul>
                        </div>
                        <button onClick={handelLogOut} className="btn md:bnt-md btn-sm btn-accent text-white hover:bg-green-300">Logout</button>
                    </div> : <div>
                        <NavLink to='/login' className={({ isActive }) => isActive ? 'btn btn-accent text-white btn-sm md:btn-md  hover:bg-green-300' : 'btn md:btn-md btn-sm btn-neutral text-lg font-medium text-white hover:bg-green-300'}>Login</NavLink>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;