import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useUsers from '../hooks/useUsers';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSecureAxios from '../hooks/useSecureAxios';

const MyTutorials = () => {
    const { user } = useUsers()
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState([])
    const axiosSecure = useSecureAxios()
    // const loaderdata = async () => {
    //     try {
    //         const { data } = await axios.get(`http://localhost:5000/tutor/${user?.email}`, {withCredentials : true})
    //         console.log(data);

    //         setData(data);
    //         setLoader(false);
    //     } catch {
    //         setLoader(false);
    //     }
    // }


    useEffect(() => {
        // loaderdata()
        try {

            axiosSecure.get(`/tutor/${user?.email}`)
                .then(res => {
                    setData(res.data)
                    setLoader(false)
                })
        } catch {
            setLoader(false)
        }

    }, [user.email])



    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/tutors/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await response.json();

            if (result.deletedCount === 1) {
                console.log("Successfully deleted one document.");
                toast.success('Successfully deleted one document.');

                const filterdata = data.filter(item => item._id !== id)
                setData(filterdata)
            } else {
                console.log("No documents matched the query. Deleted 0 documents.");
                toast.error('No documents matched the query. Deleted 0 documents.');
            }
        } catch (error) {
            console.error("Error deleting document:", error);
            toast.error('An error occurred while trying to delete the document.');
        }
    };



    if (loader) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    } console.log(data);
    return (
        <div className='grid grid-cols-1  py-5 my-5 sm:grid-cols-2 md:grid-cols-3 g gap-5'>
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
                        <Link to={`/update/${items._id}`}>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Update
                            </button>
                        </Link>

                        <button onClick={() => handleDelete(items._id)} className="px-4 py-2 bg-gray-200 text-gray-800 hover:text-white rounded hover:bg-gray-700">
                            Delete
                        </button>

                    </div>
                </div>
                )
            }
        </div>
    );
};

export default MyTutorials;