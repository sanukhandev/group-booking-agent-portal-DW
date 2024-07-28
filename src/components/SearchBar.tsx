// src/components/SearchBar.tsx
import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold mb-2">Refine search results</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Filter Airline Wise</h3>
                <div>
                    <input type="radio" name="airline" id="all" />
                    <label htmlFor="all" className="ml-2">Show All</label>
                </div>
                <div>
                    <input type="radio" name="airline" id="air-canada" />
                    <label htmlFor="air-canada" className="ml-2">AIR CANADA</label>
                </div>
                <div>
                    <input type="radio" name="airline" id="saudi-airlines" />
                    <label htmlFor="saudi-airlines" className="ml-2">SAUDI ARABIAN AIRLINES</label>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Filter Sector Wise</h3>
                <div>
                    <input type="radio" name="sector" id="all-sectors" />
                    <label htmlFor="all-sectors" className="ml-2">Show All</label>
                </div>
                <div>
                    <input type="radio" name="sector" id="lhe-jed-lhe" />
                    <label htmlFor="lhe-jed-lhe" className="ml-2">LHE-JED-LHE</label>
                </div>
                <div>
                    <input type="radio" name="sector" id="mux-jed-mux" />
                    <label htmlFor="mux-jed-mux" className="ml-2">MUX-JED-MUX</label>
                </div>
                <div>
                    <input type="radio" name="sector" id="sv-739-lhe-jed-lhe" />
                    <label htmlFor="sv-739-lhe-jed-lhe" className="ml-2">SV-739-LHE-JED-LHE</label>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
