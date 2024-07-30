// VisaDetails.tsx
import React, { useEffect } from 'react';

interface Props {
    visaType: string;
    setVisaType: (value: string) => void;
    adultVisaRate: number;
    setAdultVisaRate: (value: number) => void;
    infantVisaRate: number;
    setInfantVisaRate: (value: number) => void;
    totalVisaCost: number;
    setTotalVisaCost: (value: number) => void;
    adults: number;
    infants: number;
}

const VisaDetails: React.FC<Props> = ({ visaType, setVisaType, adultVisaRate, setAdultVisaRate, infantVisaRate, setInfantVisaRate, totalVisaCost, setTotalVisaCost, adults, infants }) => {
    useEffect(() => {
        setTotalVisaCost(adultVisaRate * adults + infantVisaRate * infants);
    }, [adultVisaRate, infantVisaRate, adults, infants]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Visa Type</label>
                <select className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={visaType} onChange={(e) => setVisaType(e.target.value)}>
                    <option value="">Select Visa Type</option>
                    <option value="tourist">Tourist</option>
                    <option value="work">Work</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Adult Visa Rate</label>
                <input type="number" className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={adultVisaRate} onChange={(e) => setAdultVisaRate(Number(e.target.value))} />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Infant Visa Rate</label>
                <input type="number" className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={infantVisaRate} onChange={(e) => setInfantVisaRate(Number(e.target.value))} />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-white">Total Visa Cost</label>
                <input type="number" className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={totalVisaCost} readOnly />
            </div>
        </div>
    );
};

export default VisaDetails;
