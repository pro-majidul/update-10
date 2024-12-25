import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useUsers from '../hooks/useUsers';
import { Link } from 'react-router-dom';

const MyTutorials = () => {
    const { user } = useUsers()
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState([])
    console.log(user.email);

    const loaderdata = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/tutor/${user?.email}`)

            setData(data);
            setLoader(false);
        } catch {
            setLoader(false);
        }
    }


    useEffect(() => {
        loaderdata()

    }, [user.email])

    if (loader) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    } console.log(data);
    return (
        <div className='grid grid-cols-1  py-5 my-5 sm:grid-cols-2 md:grid-cols-3 g gap-5'>
            {/* <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            data.map(items => <article key={items._id} className="flex transition hover:scale-105 border flex-col dark:bg-gray-50">

                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={items.photo} />

                                <div className="flex flex-col flex-1 p-6">

                                    <p className="text-lg tracking-wider uppercase hover:underline dark:text-violet-600">Name:{items.name}</p>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Language :  {items.language}</h3>
                                    <div className="flex flex-wrap justify-between items-center pt-3 space-x-2  dark:text-gray-600">
                                        <p className='font-bold'>Review {items.review}</p>
                                        <Link to={`/tutor/${items._id}`}><button className="btn btn-neutral">Details</button></Link>
                                    </div>
                                </div>
                            </article>)
                        }

                    </div>
                </div>
            </section> */}
            {
                data.map(items => <div key={items._id} className="flex border-2 transition hover:scale-105 flex-col max-w-md p-6 rounded-md dark:bg-gray-200 dark:text-gray-800">
                    <img
                        src={items.photo}
                        alt=""
                        className="flex-shrink-0 object-cover h-32 rounded-sm sm:h-64 dark:bg-gray-500 aspect-square"
                    />
                    <div className="mt-2 space-y-2 flex-grow">
                        <h2 className="text-xl font-semibold">Name : {items.name}</h2>
                        <span className="block pb-2 text-xl font-semibold dark:text-gray-600">
                            Language : {items.language}
                        </span>
                        <p>Descriptions : {items.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-md font-semibold">Price : ${items.price}</p>
                        <p className="text-md font-semibold">Review : {items.review}</p>
                    </div>
                    <div className="flex justify-between mt-auto pt-4">
                        <Link>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Update
                            </button>
                        </Link>
                        <Link>
                            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
                                Delete
                            </button>
                        </Link>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default MyTutorials;