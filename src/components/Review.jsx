import React from 'react';

const Review = () => {
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src="https://www.shutterstock.com/image-photo/happy-young-indian-arabic-businessman-600nw-2187607295.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                        <div className="space-y-2">
                            <p className="inline-block text-2xl font-semibold sm:text-3xl"> The detailed tutor profiles and real-time reviews made the decision-making process so simple</p>
                            <p className="text-xl  dark:text-gray-600">By
                                <span className="text-xl hover:underline">John D.</span>
                            </p>
                        </div>
                        <div className="dark:text-gray-800">
                            <p>"This platform has completely transformed how I learn languages. I found an amazing Spanish tutor who tailored every lesson to my needs. The booking process is seamless, and the reviews really helped me choose the perfect tutor. Highly recommend!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;