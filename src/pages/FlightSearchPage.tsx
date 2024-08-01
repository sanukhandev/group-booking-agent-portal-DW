import React from 'react';
import SectorFilter from '../components/Search/SectorFilter';
import SearchBar from '../components/Search/SearchBar';
import AirlineGroups from '../components/Search/AirlineGroups';

const FlightSearchPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <SectorFilter heading = 'Airline Groups '/>
            <div className="flex">
                <div className="w-1/4 pt-5 pl-2.5">
                    <SearchBar onFilterChange={(filterType, value) => console.log(filterType, value)} />
                </div>
                <div className="w-3/4">
                    <AirlineGroups />
                </div>
            </div>
        </div>
    ); 
};

export default FlightSearchPage;
