// HotelRatesTable.tsx
import React from 'react';

interface HotelRate {
    hotel: string;
    date: string;
    distance: number;
    sharing: number;
    double: number;
    triple: number;
    quad: number;
    quint: string;
    rating: string;
}

interface HotelRatesTableProps {
    hotelRates: HotelRate[];
}

const HotelRatesTable: React.FC<HotelRatesTableProps> = ({ hotelRates }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Makkah Hotel Rates at AL-SABOOR GROUP</h2>
        <table className="w-full border-collapse">
            <thead>
            <tr className="bg-primary text-white">
                <th className="p-2 border">Hotel</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Distance</th>
                <th className="p-2 border">Sharing</th>
                <th className="p-2 border">Double</th>
                <th className="p-2 border">Triple</th>
                <th className="p-2 border">Quad</th>
                <th className="p-2 border">Quint</th>
            </tr>
            </thead>
            <tbody>
            {hotelRates.map((rate, index) => (
                <tr key={index} className="bg-gray-100">
                    <td className="p-2 border">
                        {rate.hotel} <br /> <span className="text-sm text-gray-500">Rating: {rate.rating}</span>
                    </td>
                    <td className="p-2 border">{rate.date}</td>
                    <td className="p-2 border">{rate.distance} Meters</td>
                    <td className="p-2 border">{rate.sharing}</td>
                    <td className="p-2 border">{rate.double}</td>
                    <td className="p-2 border">{rate.triple}</td>
                    <td className="p-2 border">{rate.quad}</td>
                    <td className="p-2 border">{rate.quint}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default HotelRatesTable;
