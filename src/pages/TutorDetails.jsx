import { useState } from "react";
import useUsers from "../hooks/useUsers";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const TutorDetails = () => {
    const { user } = useUsers()
    const loaderdata = useLoaderData()
    const [data, setLoader] = useState(loaderdata)

    const handelBooked = () => {
        const { ...addbooked } = data
        addbooked.userEmail = user.email
        console.log(addbooked);
        fetch('http://localhost:5000/tutorBooked', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addbooked)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Tutors Booked SuccessFull')
                }
            })

            
    }
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto ">
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <img src={data.photo} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-4 lg:col-span-5">
                        <h3 className="text-xl font-semibold sm:text-2xl">Name : {data.name}</h3>
                        <span className="text-xl md:text-2xl dark:text-gray-600">Language : {data.language}</span>
                        <p><span>DesCriptions </span> {data.description}</p>

                        <div className="md:flex  justify-between items-center">
                            <p className="font-medium">Price : ${data.price}</p>

                            <p>Review {data.review}</p>
                        </div>

                        <button onClick={handelBooked} className="btn my-3 py-3 hover:btn-accent btn-neutral">Book</button>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default TutorDetails;