// PlanDetails.tsx
import React from 'react';

interface Props {
    city: string;
    setCity: (value: string) => void;
    hotel: string;
    setHotel: (value: string) => void;
    rooms: number;
    setRooms: (value: number) => void;
    checkInDate: string;
    setCheckInDate: (value: string) => void;
    nights: number;
    setNights: (value: number) => void;
}

const PlanDetails: React.FC<Props> = ({ city, setCity, hotel, setHotel, rooms, setRooms, checkInDate, setCheckInDate, nights, setNights }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Plan</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">City</label>
                <select className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="">Select City</option>
                    <option value="Makkah">Makkah</option>
                    <option value="Madina">Madina</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Hotel</label>
                <select className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={hotel} onChange={(e) => setHotel(e.target.value)}>
                    <option value="">Select Hotel</option>
                    <option value="Hotel1">Hotel 1</option>
                    <option value="Hotel2">Hotel 2</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Rooms</label>
                <input type="number" className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={rooms} onChange={(e) => setRooms(Number(e.target.value))} />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Check-in Date</label>
                <input type="date" className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Nights</label>
                <input type="number" className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={nights} onChange={(e) => setNights(Number(e.target.value))} />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Check-out Date</label>
                <input type="date" className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={new Date(new Date(checkInDate).getTime() + nights * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} readOnly />
            </div>
        </div>
    </div>
);

export default PlanDetails;
