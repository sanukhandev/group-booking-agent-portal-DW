// HotelRates.tsx
import React, { useState } from 'react';
import Filters from '../components/Hotel/Filters';
import HotelRatesTable from '../components/Hotel/HotelRatesTable';
import { hotelRates } from '../data/HotelRates';

const HotelRates: React.FC = () => {
    const [rating, setRating] = useState('All Rating');
    const [distance, setDistance] = useState('All Distances');
    const [hotel, setHotel] = useState('All Hotels');


    const filteredHotelRates = hotelRates.filter((rate) => {
        const matchesRating = rating === 'All Rating' || rate.rating === rating;
        const matchesDistance =
            distance === 'All Distances' || rate.distance <= parseInt(distance, 10);
        const matchesHotel = hotel === 'All Hotels' || rate.hotel.includes(hotel);
        return matchesRating && matchesDistance && matchesHotel;
    });

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <Filters rating={rating} setRating={setRating} distance={distance} setDistance={setDistance} hotel={hotel} setHotel={setHotel} />
                <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary">
                    Print Rates
                </button>
            </div>
            <HotelRatesTable hotelRates={filteredHotelRates} />
        </div>
    );
};

export default HotelRates;
