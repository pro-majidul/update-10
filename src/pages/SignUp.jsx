import React from 'react';
import { Link } from 'react-router-dom';
import signUpImg from '../assets/login.json'
import Lottie from 'lottie-react';

const SignUp = () => {
    const handelSignUp = e => {
      e.preventDefault()
        const form =(e.target);
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const profileInfo ={ name , email, password, photo};
        console.log(profileInfo);


    }
    return (
        <div className='md:flex items-center gap-2 justify-center py-5 my-5'>
            <div>
                <Lottie animationData={signUpImg}></Lottie>
            </div>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-200 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handelSignUp} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="name" className="block dark:text-gray-600">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-2 text-sm">Photo URL</label>
                        <input type="url" name="photo" id="photo" placeholder="Emter Your Phot URL here" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign Up</button>
                </form>
                <p className="text-md text-center sm:px-6 dark:text-gray-600">Already have an account?
                    <Link to='/login' className="focus:underline hover:underline ml-1 text-red-400">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;