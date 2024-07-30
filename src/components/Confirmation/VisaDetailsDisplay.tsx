// VisaDetailsDisplay.tsx
import React from 'react';

interface VisaDetailsDisplayProps {
    visaType: string;
    adults: number;
    infants: number;
    totalVisaCost: number;
}

const VisaDetailsDisplay: React.FC<VisaDetailsDisplayProps> = ({ visaType, adults, infants, totalVisaCost }) => (
    <div className="bg-primary p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-xl font-semibold text-white">Visa</h3>
        <p className="text-white">Visa Type: {visaType} (Adults: {adults} | Infants: {infants})</p>
        <p className="text-white">Total Visa Cost: SR {totalVisaCost}</p>
    </div>
);

export default VisaDetailsDisplay;
