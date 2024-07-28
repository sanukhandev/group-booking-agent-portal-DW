// src/components/AirlineGroup.tsx
import React from 'react';

export interface AirlineGroupProps {
    airline: string;
    sectorDetails: string;
    totalSeats: number;
    availableSeats: number;
    depDate: string;
    price: string;
    flightNumber: string;
    AirlineCode: string;
    numberOfDays: number;
    route: string;
}

const AirlineGroup: React.FC<{ group: AirlineGroupProps }> = ({ group }) => {
    return (
        // <div className="bg-white shadow-md p-4 rounded-lg mb-4">
        //     <h2 className="text-xl font-bold mb-2">UMRAH GROUP</h2>
        //     <h3 className="text-lg font-semibold text-green-600 mb-2">{group.airline}</h3>
        //     <div className="mb-2">
        //         <span className="font-semibold">Sector Details:</span> {group.sectorDetails}
        //     </div>
        //     <div className="mb-2">
        //         <span className="font-semibold">Total Seats:</span> {group.totalSeats}
        //     </div>
        //     <div className="mb-2">
        //         <span className="font-semibold">Dep Date:</span> <span className="text-green-600">{group.depDate}</span>
        //     </div>
        //     <div className="flex justify-between items-center">
        //         <span className="text-xl font-bold">{group.price}</span>
        //         <button className="btn bg-orange-500 text-white">BOOK NOW</button>
        //     </div>
        // </div>
        <div className="mb-5 flex items-center">
            <div
                className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                <div className="p-5 flex items-center flex-col sm:flex-row">
                    <div className="mb-5 w-24 h-auto ">
                        <img
                            src={`/assets/vectors/airlines/${group.AirlineCode}.svg`}
                            alt="airline logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 ltr:sm:pl-5 rtl:sm:pr-5 text-center sm:text-left">
                        <div className="flex items-center">
                            <h5 className="text-primary text-[15px] font-semibold mb-2 mt-1.5 mr-2.5 dark:text-white-light">{group.airline}</h5>
                            <span className="badge bg-primary rounded-full mr-2.5">{group.flightNumber}</span>
                            <span className="badge bg-secondary rounded-full mr-2.5">{group.route}</span>
                            <span className="badge bg-black rounded-full mr-2.5">{group.numberOfDays} Days</span>
                        </div>
                        <div className="flex items-center">
                            <button type="button" className="btn btn-warning rounded btn-sm">
                                25
                            </button>
                        </div>
                        <p className="font-semibold text-white-dark mt-4 sm:mt-8">
                            Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta
                            placerat. Vestibulum in ultricies.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AirlineGroup;
