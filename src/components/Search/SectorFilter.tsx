import React, { useState } from 'react';

interface AirlineGroupProps {
    label: string;
}

const SectorFilter: React.FC<any> = ({heading}) => {
    const [selectedSector, setSelectedSector] = useState<string>('All Sector');

    const sectors: AirlineGroupProps[] = [
        { label: 'All Sector' },
        { label: 'LHE-JED-LHE' },
        { label: 'MUX-JED-MUX' },
        { label: 'SV-739-LHE-JED-LHE' },
        { label: 'ISB-JED-ISB' },
    ];

    const handleSectorClick = (sector: string) => {
        setSelectedSector(sector);
    };

    return (
        <div className="p-4">
            <div className="flex space-x-4">
                <h1 className="text-2xl font-bold ">{heading} Airline Groups</h1>
                {sectors.map((sector) => (
                    <button
                        key={sector.label}
                        onClick={() => handleSectorClick(sector.label)}
                        className={`px-4 py-2 h-[35px] rounded text-white font-semibold transition-colors duration-300 ${
                            selectedSector === sector.label
                                ? 'bg-secondary hover:bg-primary' : 'bg-primary hover:bg-secondary'
                        }`}
                    >
                        {sector.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SectorFilter;
