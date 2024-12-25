import React from 'react';

const FAQ = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="divide-y dark:divide-gray-300">
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5"> "What is this platform about?"</h3>
                        <p className="md:pl-0 md:col-span-7"> "This platform connects users with tutors across various languages and subjects. It simplifies finding, reviewing, and booking tutors globally.",</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">"How do I register as a user?"</h3>
                        <p className="md:pl-0 md:col-span-7"> "Go to the registration page, fill in your details like Name, Email, Password, and Photo URL, and click on 'Register'.",</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">"Can I book multiple tutors at the same time?"</h3>
                        <p className="md:pl-0 md:col-span-7"> "Yes, you can book as many tutors as you want. Each booking will be listed under the 'My Booked Tutors' section.",</p>
                    </div>
                    <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                        <h3 className="font-semibold md:col-span-5">"What happens if I forget my password?"</h3>
                        <p className="md:pl-0 md:col-span-7"> "Currently, we don't support password reset. Make sure to remember your password or use Google Sign-In for hassle-free access.",</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;