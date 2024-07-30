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

const getRatingColor = (rating: string) => {
    switch (rating) {
        case '★':
            return 'text-red-500';
        case '★★':
            return 'text-orange-500';
        case '★★★':
            return 'text-yellow-500';
        case '★★★★':
            return 'text-green-500';
        case '★★★★★':
            return 'text-blue-500';
        default:
            return 'text-gray-500';
    }
};

const HotelRatesTable: React.FC<HotelRatesTableProps> = ({ hotelRates }) => (
    <div className="table-responsive">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Makkah Hotel Rates at AL-SABOOR GROUP</h2>
        <table className="w-full border-collapse">
            <thead>
            <tr className="border-b-0">
                <th className="ltr:rounded-l-md rtl:rounded-r-md">Hotel</th>
                <th>Date</th>
                <th>Distance</th>
                <th>Sharing</th>
                <th>Double</th>
                <th>Triple</th>
                <th>Quad</th>
                <th className="ltr:rounded-r-md rtl:rounded-l-md">Quint</th>
            </tr>
            </thead>
            <tbody>
            {hotelRates.map((rate, index) => (
                <tr key={index} className="text-white-dark hover:text-black dark:hover:text-white-light/90 group">
                    <td className="min-w-[150px] text-black dark:text-white">
                        <div className="flex">
                            <p className="whitespace-nowrap font-bold">
                                {rate.hotel}
                                <span className={`block text-xs ${getRatingColor(rate.rating)}`}>Rating: {rate.rating}</span>
                            </p>
                        </div>
                    </td>
                    <td>{rate.date}</td>
                    <td>{rate.distance} Meters</td>
                    <td>{rate.sharing}</td>
                    <td>{rate.double}</td>
                    <td>{rate.triple}</td>
                    <td>{rate.quad}</td>
                    <td>{rate.quint}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default HotelRatesTable;
