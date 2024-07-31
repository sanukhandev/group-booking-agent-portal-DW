import React from 'react';
import Cards from '../components/Home/Cards';
import InfoCards from '../components/Home/InfoCards';
import cardData from '../data/HomeCard';
import { DashData } from '../data/DashData';

const Home: React.FC = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex flex-wrap justify-center gap-6 mb-6">
                {cardData.map((data, index) => (
                    <Cards
                        key={index}
                        image={data.image}
                        buttonText={data.buttonText}
                        buttonLink={data.buttonLink}
                    /> 
                ))}
            </div>
            {/*<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 text-white">*/}
            {/*    {DashData.map((data, index) => (*/}
            {/*        <InfoCards*/}
            {/*            key={index}*/}
            {/*            title={data.title}*/}
            {/*            amount={data.amount}*/}
            {/*            percentage={data.percentage}*/}
            {/*            trend={data.trend}*/}
            {/*            lastWeek={data.lastWeek}*/}
            {/*            gradientFrom={data.gradientFrom}*/}
            {/*            gradientTo={data.gradientTo}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
}

export default Home;
