// FlightDetails.tsx
import React, { useState } from 'react';
import IconTrash from '../Icon/IconTrash';
import IconPlus from '../Icon/IconPlus';

interface FlightDetail {
    flightNumber: string;
    depDate: string;
    depTime: string;
    sectorFrom: string;
    sectorTo: string;
    arrDate: string;
    arrTime: string;
}

const FlightDetails: React.FC = () => {
    const [flightDetails, setFlightDetails] = useState<FlightDetail[]>([
        { flightNumber: '', depDate: '', depTime: '', sectorFrom: '', sectorTo: '', arrDate: '', arrTime: '' },
    ]);

    const handleAddMore = () => {
        setFlightDetails([
            ...flightDetails,
            { flightNumber: '', depDate: '', depTime: '', sectorFrom: '', sectorTo: '', arrDate: '', arrTime: '' },
        ]);
    };

    const handleRemove = (index: number) => {
        const newFlightDetails = [...flightDetails];
        newFlightDetails.splice(index, 1);
        setFlightDetails(newFlightDetails);
    };

    const handleChange = (index: number, key: string, value: string) => {
        const newFlightDetails = [...flightDetails];
        newFlightDetails[index] = { ...newFlightDetails[index], [key]: value };
        setFlightDetails(newFlightDetails);
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Enter Flight Details</h3>
            {flightDetails.map((flight, index) => (
                <div key={index} className="flex flex-wrap gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Flight#"
                        value={flight.flightNumber}
                        onChange={(e) => handleChange(index, 'flightNumber', e.target.value)}
                        className="flex-grow p-2 border rounded-md"
                    />
                    <input
                        type="date"
                        value={flight.depDate}
                        onChange={(e) => handleChange(index, 'depDate', e.target.value)}
                        className="flex-grow p-2 border rounded-md"
                    />
                    <input
                        type="time"
                        value={flight.depTime}
                        onChange={(e) => handleChange(index, 'depTime', e.target.value)}
                        className="flex-grow p-2 border rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Sector From"
                        value={flight.sectorFrom}
                        onChange={(e) => handleChange(index, 'sectorFrom', e.target.value)}
                        className="flex-grow p-2 border rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Sector To"
                        value={flight.sectorTo}
                        onChange={(e) => handleChange(index, 'sectorTo', e.target.value)}
                        className="flex-grow p-2 border rounded-md"
                    />
                    <input
                        type="date"
                        value={flight.arrDate}
                        onChange={(e) => handleChange(index, 'arrDate', e.target.value)}
                        className="flex-grow p-2 border rounded-md"
                    />
                    <input
                        type="time"
                        value={flight.arrTime}
                        onChange={(e) => handleChange(index, 'arrTime', e.target.value)}
                        className="flex-grow p-2 border rounded-md"
                    />
                    <button onClick={() => handleRemove(index)} className="bg-primary flex hover:bg-secondary text-white p-2 rounded-md">
                       <IconTrash/>
                    </button>
                </div>
            ))}
            <button onClick={handleAddMore} className="flex bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary">
                <IconPlus/> Add
            </button>
        </div>
    );
};

export default FlightDetails;
