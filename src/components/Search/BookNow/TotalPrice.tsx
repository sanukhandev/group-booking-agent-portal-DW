// TotalPrice.tsx
import React from 'react';

const TotalPrice: React.FC = () => {
    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">Total Price</h3>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label>2 Adults</label>
                    <input type="text" className="w-full p-2 border rounded-md" value="PKR 284000" readOnly />
                </div>
                <div>
                    <label>1 Child</label>
                    <input type="text" className="w-full p-2 border rounded-md" value="PKR 0" readOnly />
                </div>
                <div>
                    <label>1 Infant</label>
                    <input type="text" className="w-full p-2 border rounded-md" value="PKR 0" readOnly />
                </div>
                <div>
                    <label>Total Price</label>
                    <input type="text" className="w-full p-2 border rounded-md" value="PKR 284000" readOnly />
                </div>
            </div>
        </div>
    );
};

export default TotalPrice;
