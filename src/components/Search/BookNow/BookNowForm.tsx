// BookNowForm.tsx
import React from 'react';
import Passengers from './Passengers';
import PriceDetails from './PriceDetails';
import TotalPrice from './TotalPrice';
import PassengerDetails from './PassengerDetails';

const BookNowForm: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">UMRAH GROUP | SAUDI ARABIAN AIRLINES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <Passengers />
                    <PriceDetails />
                    <TotalPrice />
                </div>
                <div>
                    <PassengerDetails />
                </div>
            </div>
            <button className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-secondary">
                Submit
            </button>
        </div>
    );
};

export default BookNowForm;
