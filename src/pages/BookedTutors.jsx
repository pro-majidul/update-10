import React, { useEffect, useState } from 'react';
import useUsers from '../hooks/useUsers';
import axios from 'axios';
import { toast } from 'react-toastify';

const BookedTutors = () => {
    const { user } = useUsers()
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/tutorBooked?email=${user.email}`)
            // .then(res => res.json())
            .then(res => {
                console.log(res.data);
                setItems(res.data)
            })
    }, [user.email])

    console.log(items);

    const handelReview = async (id) => {
        console.log(id);
        try {

            const { data } = await axios.patch(`http://localhost:5000/tutors/${id}`)
            if (data.modifiedCount > 0) {
                toast.success('Review Success')
            }
        } catch {

            toast.error("could'nt done review")
        }

    }
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <div className=" overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>

                            <th>Image</th>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Price</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            items.map(item => <tr key={item._id}>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.language}</td>
                                <td> $ {item.price}</td>
                                <th onClick={() => handelReview(item.tutorId)}>
                                    <span className="px-3 py-1 cursor-pointer hover:bg-purple-600 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        <span>Review</span>
                                    </span>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default BookedTutors;

