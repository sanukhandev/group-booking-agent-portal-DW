import React from 'react';

const SectorFilter: React.FC = () => {
    return (
        <div className="flex space-x-4 mb-4">
            <button className="btn bg-blue-500 text-white">All Sector</button>
            <button className="btn bg-orange-500 text-white">LHE-JED-LHE</button>
            <button className="btn bg-orange-500 text-white">MUX-JED-MUX</button>
            <button className="btn bg-orange-500 text-white">SV-739-LHE-JED-LHE</button>
            <button className="btn bg-orange-500 text-white">ISB-JED-ISB</button>
        </div>
    );
};

export default SectorFilter;
