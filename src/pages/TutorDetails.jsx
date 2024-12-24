import { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const TutorDetails = () => {
    const { user } = useUsers()
    const loaderdata = useLoaderData()
    const { details } = useParams()
    const [datas, setDatas] = useState(loaderdata)
    const [loader, setLoader] = useState(true)


    useEffect(() => {
        fetch(`http://localhost:5000/tutors/${details}`)
            .then(res => res.json())
            .then(data => {
                setDatas(data)
                setLoader(false)
            }).catch(error => {
                setLoader(false)
            })
    }, [user.email])

    const handelBooked = () => {

        const bookingDetails = {
            tutorId: datas._id,
            image: datas.photo,
            language: datas.language,
            price: datas.price,
            tutorEmail: datas.email,
            email: user.email,
            name: datas.name,
        };

        fetch('http://localhost:5000/tutorBooked', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Tutors Booked SuccessFull')
                }
            }).catch(error => {
                toast.error('You already Booked This Data')
                console.log(error);
            })


    }


    if (loader) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-6xl p-6 mx-auto ">
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <img src={datas.photo} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-4 lg:col-span-5">
                        <h3 className="text-xl font-semibold sm:text-2xl">Name : {datas.name}</h3>
                        <span className="text-xl md:text-2xl dark:text-gray-600">Language : {datas.language}</span>
                        <p><span>DesCriptions </span> {datas.description}</p>

                        <div className="md:flex  justify-between items-center">
                            <p className="font-medium">Price : ${datas.price}</p>

                            <p className="font-medium">Review {datas.review}</p>
                        </div>

                        <button onClick={handelBooked} className="btn my-3 py-3 hover:btn-accent btn-neutral">Book</button>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default TutorDetails;