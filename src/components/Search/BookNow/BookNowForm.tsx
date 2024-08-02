// BookNowForm.tsx
import React, { useState } from 'react';
import Passengers from './Passengers';
import PriceDetails from './PriceDetails';
import TotalPrice from './TotalPrice';
import PassengerDetails from './PassengerDetails';

const BookNowForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextClick = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    return (
        <div className="p-4 w-3/4 mt-16 shadow-lg mx-auto rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">UMRAH GROUP | SAUDI ARABIAN AIRLINES</h2>
            <div className="space-y-6 mb-4">
                {currentStep >= 1 && (
                    <div className="w-full mt-10">
                        <Passengers />
                    </div>
                )}
                {currentStep >= 1 && (
                    <div className="w-full mt-10">
                        <PriceDetails />
                    </div>
                )}
                {currentStep >= 2 && (
                    <div className="w-full mt-4">
                        <TotalPrice />
                    </div>
                )}
                {currentStep >= 2 && (
                    <div className="w-full mt-4">
                        <PassengerDetails />
                    </div>
                )}
            </div>
            {currentStep < 4 && (
                <button
                    onClick={handleNextClick}
                    className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-secondary"
                >
                    Next
                </button>
            )}
            {currentStep === 4 && (
                <button className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-secondary">
                    Submit
                </button>
            )}
        </div>
    );
};

export default BookNowForm;
