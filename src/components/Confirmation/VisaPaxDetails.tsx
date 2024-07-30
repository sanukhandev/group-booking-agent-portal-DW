// VisaPaxDetails.tsx
import React from 'react';

const VisaPaxDetails: React.FC = () => (
    <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">02 Enter Visa Pax Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">First name (Lead Pax First Name)</label>
                <input type="text" className="mt-1 p-2 block w-full border rounded-md" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Last name (Lead Pax Last Name)</label>
                <input type="text" className="mt-1 p-2 block w-full border rounded-md" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Passport No. (Lead Pax Passport No.)</label>
                <input type="text" className="mt-1 p-2 block w-full border rounded-md" />
            </div>
        </div>
    </div>
);

export default VisaPaxDetails;
