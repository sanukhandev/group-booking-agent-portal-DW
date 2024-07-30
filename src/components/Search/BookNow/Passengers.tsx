// Passengers.tsx
import React from 'react';

const Passengers: React.FC = () => {
    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">Passengers</h3>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label>Adults</label>
                    <input type="number" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label>Child</label>
                    <input type="number" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label>Infants</label>
                    <input type="number" className="w-full p-2 border rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default Passengers;
