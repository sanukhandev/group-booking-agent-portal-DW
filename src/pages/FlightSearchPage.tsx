import React from 'react';
import SectorFilter from '../components/Search/SectorFilter';
import SearchBar from '../components/Search/SearchBar';
import AirlineGroups from '../components/Search/AirlineGroups';

const FlightSearchPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <SectorFilter heading='' />
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/4 p-2">
                    <SearchBar onFilterChange={(filterType, value) => console.log(filterType, value)} />
                </div>
                <div className="w-full lg:w-3/4 p-2">
                    <AirlineGroups />
                </div>
            </div>
            
        </div>
    );
};

export default FlightSearchPage;
