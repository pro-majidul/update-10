import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateTutors = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()
    const { name, email, language, price, description, photo, review } = data || {}

    useEffect(() => {
        fetch(`http://localhost:5000/tutors/${id}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                setLoader(false)
            })
            .catch(error => {
                console.log(error);
                setLoader(false)
            })
    }, [])

    const handelUpdate = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const formdata = Object.fromEntries(form.entries());

        console.log(formdata);
        fetch(`http://localhost:5000/tutors/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formdata)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Tutorial Update Successfull')
                    navigate('/my-tutorial')
                } else {
                    toast.error('Please Update an item first')
                }
            })
            .catch(error => {
                console.log(error);
            })


    }


    if (loader) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    return (
        <div className="py-6 dark:bg-gray-100 dark:text-gray-900">
            <div>
                <form onSubmit={handelUpdate} className="card-body">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={name} readOnly placeholder="Enter Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" defaultValue={email} name='email' placeholder="Enter Your Email" readOnly className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Language</span>
                            </label>
                            <select name='language' defaultValue={language} className="select input-bordered select-ghost w-full " required>
                                <option disabled>Select A Language</option>
                                <option>English</option>
                                <option>Japanese</option>
                                <option>French</option>
                                <option>Spanish</option>
                                <option>German</option>
                                <option>Italian</option>
                                <option>Chinish</option>
                                <option>Arabic</option>
                                <option>Portuguese</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' defaultValue={price} placeholder="Enter Your Price" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input defaultValue={photo} name="photo" type="url" placeholder="Enter Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <input readOnly defaultValue={review} name="review" type="text" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Description</span>
                        </label>
                        <textarea defaultValue={description} className="textarea textarea-bordered" placeholder="Description" name="description" required></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-purple-500">Update</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateTutors;