import React from 'react';
import Banner from '../components/Banner';
import Starts from '../components/Starts';
import Languages from '../components/Languages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <main>
                <Starts></Starts>
                <div>
                    <Languages></Languages>
                </div>
            </main>


        </div>
    );
};

export default Home;