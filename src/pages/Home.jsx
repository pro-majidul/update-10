import React from 'react';
import Banner from '../components/Banner';
import Starts from '../components/Starts';
import Languages from '../components/Languages';
import FAQ from '../components/FAQ';
import Review from '../components/Review';
import CarusolReview from '../components/CarusolReview';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <main className='md:space-y-10 md:mb-5'>
                <Starts></Starts>
                <div className='shadow-lg'>
                    <div >
                        <h3 className='my-5 py-5 text-center text-xl md:text-3xl font-medium text-orange-400 md:font-bold underline underline-offset-8'>Languages</h3>
                        <Link to='/find-tutors' className='hover:underline hover:text-orange-300'>Show ALL</Link>
                    </div>
                    <Languages></Languages>
                </div>
                <div className='my-5 shadow-md'>
                    <div>
                        <h3 className='my-5 py-5 text-center text-xl md:text-3xl font-medium text-orange-400 md:font-bold underline underline-offset-8'>What Client Says</h3>
                    </div>
                    <CarusolReview></CarusolReview>
                </div>
                <div className='mt-5 md:mb-10 md:pb-10 '>
                    <FAQ></FAQ>
                </div>


            </main>


        </div>
    );
};

export default Home;