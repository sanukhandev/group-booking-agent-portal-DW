// AdultsInfants.tsx
import React from 'react';

interface Props {
    adults: number;
    setAdults: (value: number) => void;
    infants: number;
    setInfants: (value: number) => void;
}

const AdultsInfants: React.FC<Props> = ({ adults, setAdults, infants, setInfants }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">No. of Adults</label>
            <input type="number" className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={adults} onChange={(e) => setAdults(Number(e.target.value))} />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">No. of Infants</label>
            <input type="number" className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={infants} onChange={(e) => setInfants(Number(e.target.value))} />
        </div>
    </div>
);

export default AdultsInfants;
