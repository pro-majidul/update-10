import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
// import { LiaFlagUsaSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const Languages = () => {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/language')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLanguages(data)
            })
    }, [])

    return (
        <section className="p-4 my-6 md:p-8 dark:bg-gray-100 dark:text-gray-800">
            <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
                {
                    languages.map(language => <Link key={language._id} to={`/find-tutors/${language.language}`}>
                        <div className="flex overflow-hidden rounded-lg md:p-6 p-4 transition hover:scale-x-105 hover:bg-purple-500 border dark:bg-gray-50 dark:text-gray-800">
                            <div className="flex items-center justify-center px-4">
                                <img className='w-10' src={language.img} />

                            </div>
                            <div className="flex items-center justify-between flex-1 p-3">
                                <p className="text-2xl font-semibold">{language.language} Tutors</p>
                                <p><FaChevronRight /></p>
                            </div>
                        </div>
                    </Link>)
                }
                {/* <Link>
                    <div className="flex overflow-hidden rounded-lg md:p-6 p-4 transition hover:scale-x-105 hover:bg-purple-500 border dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex items-center justify-center px-4 ">
                            <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq7vXPbFTWnXWdT6BV8oazjjJnhLcGMaBu_g&s" />
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">Spanish Tutors</p>
                            <p><FaChevronRight /></p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="flex overflow-hidden rounded-lg md:p-6 p-4 transition hover:scale-x-105 hover:bg-purple-500 border  dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex items-center justify-center px-4 ">
                            <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JKskBvwB-YqR7DRwvVsfMuayDdJxY-UvpQ&s" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">French Tutors</p>
                            <p><FaChevronRight /></p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="flex overflow-hidden rounded-lg md:p-6 p-4 transition hover:scale-x-105 hover:bg-purple-500 border  dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex items-center justify-center px-4 ">
                            <img className='w-10' src="https://static-00.iconduck.com/assets.00/flag-germany-emoji-2048x1279-j5kqjj7v.png" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">German Tutors</p>
                            <p><FaChevronRight /></p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="flex overflow-hidden rounded-lg md:p-6 p-4 transition hover:scale-x-105 hover:bg-purple-500 border dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex items-center justify-center px-4 ">
                            <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2MLXVL5iDwlWqAKEYhfU1Kf_o9rEADtrqXA&s" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">Italian Tutors</p>
                            <p><FaChevronRight /></p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="flex overflow-hidden rounded-lg md:p-6 p-4 transition hover:scale-x-105 hover:bg-purple-500 border  dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex items-center justify-center px-4 ">
                            <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0fDDOegYNkQb9ayHkxupsXCq1yoSVjxNTQ&s" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">Chinish Tutors</p>
                            <p><FaChevronRight /></p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="flex overflow-hidden rounded-lg md:p-6 p-4 transition hover:scale-x-105 hover:bg-purple-500 border dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex items-center justify-center px-4 ">
                            <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp99F4pn2Ji7-Q1omjr_wiWLPuCWzI8VsxZA&s" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">Arabic Tutors</p>
                            <p><FaChevronRight /></p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="flex overflow-hidden rounded-lg md:p-6 p-4 transition hover:scale-x-105 hover:bg-purple-500 border dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex items-center justify-center px-4 ">
                            <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7nnTFW4tiguLh4m41jzzb2zET8VujZNMzA&s" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">Japanese Tutors</p>
                            <p><FaChevronRight /></p>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className="flex overflow-hidden rounded-lg md:p-6 p-4 transition hover:scale-x-105 hover:bg-purple-500 border dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex items-center justify-center px-4 ">
                            <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsl2PTwiXR7iRvV3umPhPkLra6kUujWXFX4Q&s" alt="" />
                        </div>
                        <div className="flex items-center justify-between flex-1 p-3">
                            <p className="text-2xl font-semibold">Portuguese Tutors</p>
                            <p><FaChevronRight /></p>
                        </div>
                    </div>
                </Link> */}
            </div>
        </section>
    );
};

export default Languages;