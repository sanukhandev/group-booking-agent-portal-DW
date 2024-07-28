import React from 'react';
import SectorFilter from '../components/SectorFilter';
import SearchBar from '../components/SearchBar';
import AirlineGroups from '../components/AirlineGroups';

const FlightSearchPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Airline Groups</h1>
            <SectorFilter />
            <div className="flex">
                <div className="w-1/4">
                    <SearchBar />
                </div>
                <div className="w-3/4">
                    <AirlineGroups />
                </div>
            </div>
        </div>
    );
};

export default FlightSearchPage;
