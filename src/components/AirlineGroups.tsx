// src/components/AirlineGroups.tsx
import React from 'react';
import AirlineGroup, { AirlineGroupProps } from './AirlineGroup';

const groups: AirlineGroupProps[] = [
    {
        airline: 'SAUDI ARABIAN AIRLINES',
        sectorDetails: '795 03AUG MUX-JED 04:30 23-KG Baggage, 794 30AUG MUX-JED 17:00 23:45 46-KG Baggage',
        totalSeats: 30,
        availableSeats: 2,
        depDate: 'Sat 03 Aug 2024',
        price: 'PKR 141,600',
        flightNumber: 'SV-795',
        AirlineCode: 'SV',
        numberOfDays: 27,
        route: 'MUX-JED-MUX',
    },
    {
        airline: 'Air Canada AIRLINES',
        sectorDetails: '735 05AUG LHE-JED 10:45 13:55 23-KG Baggage, 738 25AUG LHE-JED 18:00 18:05 46-KG Baggage',
        totalSeats: 70,
        availableSeats: 3,
        depDate: 'Mon 05 Aug 2024',
        price: 'PKR 144,000',
        flightNumber: 'AC-795',
        AirlineCode: 'AC',
        numberOfDays: 27,
        route: 'MUX-JED-MUX',
    },
];

const AirlineGroups: React.FC = () => {
    return (
        <div>
            {groups.map((group, index) => (
                <AirlineGroup key={index} group={group} />
            ))}
        </div>
    );
};

export default AirlineGroups;
