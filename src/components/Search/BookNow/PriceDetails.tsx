// PriceDetails.tsx
import React from 'react';

const PriceDetails: React.FC = () => {
    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">Price/Seat</h3>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label>Adult</label>
                    <input type="text" className="w-full p-2 border rounded-md" value="PKR 142000" readOnly />
                </div>
                <div>
                    <label>Child</label>
                    <input type="text" className="w-full p-2 border rounded-md" value="PKR 0" readOnly />
                </div>
                <div>
                    <label>Infant</label>
                    <input type="text" className="w-full p-2 border rounded-md" value="PKR 0" readOnly />
                </div>
            </div>
        </div>
    );
};

export default PriceDetails;
