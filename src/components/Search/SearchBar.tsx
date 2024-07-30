import React, { useState } from 'react';

interface RefineSearchResultsProps {
    onFilterChange: (filterType: string, value: string) => void;
}

const SearchBar: React.FC<RefineSearchResultsProps> = ({ onFilterChange }) => {
    const [selectedAirline, setSelectedAirline] = useState<string>('');
    const [selectedSector, setSelectedSector] = useState<string>('');

    const handleAirlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedAirline(value);
        onFilterChange('airline', value);
    };

    const handleSectorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedSector(value);
        onFilterChange('sector', value);
    };

    return (
        <div className="p-4  bg-white shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">Refine search results</h2>
            <div className="mb-6">
                <h3 className="text-md font-semibold text-gray-700 mb-2">Filter Airline Wise</h3>
                <ul className="space-y-2">
                    <li>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="airline"
                                value="Show All"
                                checked={selectedAirline === 'Show All'}
                                onChange={handleAirlineChange}
                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <span className="text-sm text-gray-600">Show All</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="airline"
                                value="AIR CANADA"
                                checked={selectedAirline === 'AIR CANADA'}
                                onChange={handleAirlineChange}
                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <span className="text-sm text-gray-600">AIR CANADA</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="airline"
                                value="SAUDI ARABIAN AIRLINES"
                                checked={selectedAirline === 'SAUDI ARABIAN AIRLINES'}
                                onChange={handleAirlineChange}
                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <span className="text-sm text-gray-600">SAUDI ARABIAN AIRLINES</span>
                        </label>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-md font-semibold text-gray-700 mb-2">Filter Sector Wise</h3>
                <ul className="space-y-2">
                    <li>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="sector"
                                value="Show All"
                                checked={selectedSector === 'Show All'}
                                onChange={handleSectorChange}
                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <span className="text-sm text-gray-600">Show All</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="sector"
                                value="LHE-JED-LHE"
                                checked={selectedSector === 'LHE-JED-LHE'}
                                onChange={handleSectorChange}
                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <span className="text-sm text-gray-600">LHE-JED-LHE</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="sector"
                                value="MUX-JED-MUX"
                                checked={selectedSector === 'MUX-JED-MUX'}
                                onChange={handleSectorChange}
                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <span className="text-sm text-gray-600">MUX-JED-MUX</span>
                        </label>
                    </li>
                    <li>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="sector"
                                value="SV-739-LHE-JED-LHE"
                                checked={selectedSector === 'SV-739-LHE-JED-LHE'}
                                onChange={handleSectorChange}
                                className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                            />
                            <span className="text-sm text-gray-600">SV-739-LHE-JED-LHE</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SearchBar;
