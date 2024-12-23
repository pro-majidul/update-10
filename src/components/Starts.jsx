import React from 'react';
import { FaLanguage } from 'react-icons/fa';
import { FaUsersGear } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';
import { MdReviews } from 'react-icons/md';

const Starts = () => {
    return (
        <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                    <GiTeacher size={40} color='white' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">200</p>
                        <p className="capitalize">Tutors Count</p>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                    <MdReviews size={40} color='white' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">7500</p>
                        <p className="capitalize">Review Counts</p>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                    <FaLanguage size={40} color='white' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">172%</p>
                        <p className="capitalize">Language Count</p>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                    <FaUsersGear size={40} color='white' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">17%</p>
                        <p className="capitalize">User's Count</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Starts;