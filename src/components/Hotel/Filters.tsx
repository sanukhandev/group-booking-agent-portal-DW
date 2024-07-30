// Filters.tsx
import React from 'react';

interface FiltersProps {
    rating: string;
    setRating: (value: string) => void;
    distance: string;
    setDistance: (value: string) => void;
    hotel: string;
    setHotel: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ rating, setRating, distance, setDistance, hotel, setHotel }) => (
    <div className="flex justify-around mb-4 gap-2">
        <div>
            <label className="block text-sm font-medium text-gray-700">Filter by Rating</label>
            <select value={rating} onChange={(e) => setRating(e.target.value)} className="mt-1 p-2 border rounded-md">
                <option value="All Rating">All Rating</option>
                <option value="★">★</option>
                <option value="★★">★★</option>
                <option value="★★★">★★★</option>
                <option value="★★★★">★★★★</option>
                <option value="★★★★★">★★★★★</option>
            </select>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Filter by Distance</label>
            <select value={distance} onChange={(e) => setDistance(e.target.value)} className="mt-1 p-2 border rounded-md">
                <option value="All Distances">All Distances</option>
                <option value="500">Up to 500 meters</option>
                <option value="1000">Up to 1000 meters</option>
                <option value="1500">Up to 1500 meters</option>
                <option value="2000">Up to 2000 meters</option>
            </select>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Filter by Hotels</label>
            <select value={hotel} onChange={(e) => setHotel(e.target.value)} className="mt-1 p-2 border rounded-md">
                <option value="All Hotels">All Hotels</option>
                <option value="Mayar Maisar / Qasar e Saad">Mayar Maisar / Qasar e Saad</option>
                <option value="Land Premium">Land Premium</option>
                <option value="Fundaq Haris">Fundaq Haris</option>
                <option value="Fundaq Jafria">Fundaq Jafria</option>
            </select>
        </div>
    </div>
);

export default Filters;
