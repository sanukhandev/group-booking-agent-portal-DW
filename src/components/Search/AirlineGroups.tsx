// src/components/AirlineGroups.tsx
import React from 'react';
import AirlineGroup, { AirlineGroupProps } from './AirlineGroup';
import generateRandomData from '../../data/AirlineGroups';



const AirlineGroups: React.FC = () => {
    return (
        <div>
            {generateRandomData().map((group, index) => (
                <AirlineGroup key={index} group={group} />
            ))}
        </div>
    );
};
 
export default AirlineGroups;
