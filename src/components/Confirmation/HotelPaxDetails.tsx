// HotelPaxDetails.tsx
import React from 'react';

const HotelPaxDetails: React.FC = () => (
    <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">03 Enter Hotel Pax Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Pax First name (Lead Pax First Name)</label>
                <input type="text" className="mt-1 p-2 block w-full border rounded-md" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Pax Last name (Lead Pax Last Name)</label>
                <input type="text" className="mt-1 p-2 block w-full border rounded-md" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Pax Passport No. (Lead Pax Passport No.)</label>
                <input type="text" className="mt-1 p-2 block w-full border rounded-md" />
            </div>
        </div>
    </div>
);

export default HotelPaxDetails;
