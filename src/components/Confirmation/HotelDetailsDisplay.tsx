// HotelDetailsDisplay.tsx
import React from 'react';

interface HotelDetailsDisplayProps {
    hotelName: string;
    rating: string;
    distanceFromHaram: number;
    rooms: number;
    checkInDate: string;
    checkOutDate: string;
    nights: number;
    totalCost: number;
}

const HotelDetailsDisplay: React.FC<HotelDetailsDisplayProps> = ({
                                                                     hotelName,
                                                                     rating,
                                                                     distanceFromHaram,
                                                                     rooms,
                                                                     checkInDate,
                                                                     checkOutDate,
                                                                     nights,
                                                                     totalCost
                                                                 }) => (
    <div className="bg-primary p-4 rounded-lg shadow-md mb-4">
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">{hotelName}</h3>
            <span className="text-white">Rating: {rating} | Distance From Haram: {distanceFromHaram} Meter</span>
        </div>
        <p className="text-white">No. of Rooms: {rooms}</p>
        <p className="text-white">Checkin: {checkInDate}</p>
        <p className="text-white">Checkout: {checkOutDate}</p>
        <p className="text-white">Nights: {nights}</p>
        <p className="text-white">Total Cost: SR {totalCost}</p>
    </div>
);

export default HotelDetailsDisplay;
