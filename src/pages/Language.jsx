import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Language = () => {

    const loaderData = useLoaderData();

    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            loaderData.map(items => <article key={items._id} className="flex flex-col hover:scale-105 transition dark:bg-gray-50">

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
            </section>
        </div>
    );
};

export default Language;