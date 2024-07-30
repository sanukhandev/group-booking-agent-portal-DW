// UmrahPackageDetails.tsx
import React from 'react';
import FlightDetails from '../components/Confirmation/FlightDetails';
import VisaDetailsDisplay from '../components/Confirmation/VisaDetailsDisplay';
import HotelDetailsDisplay from '../components/Confirmation/HotelDetailsDisplay';
import PackageSummary from '../components/Confirmation/PackageSummary';
import ImportantInformation from '../components/Confirmation/ImportantInformation';
import VisaPaxDetails from '../components/Confirmation/VisaPaxDetails';
import HotelPaxDetails from '../components/Confirmation/HotelPaxDetails';
import SpecialRequests from '../components/Confirmation/SpecialRequest';


const Confirmation: React.FC = () => {
    const visaDetails = {
        visaType: '1 UMRAH VISA WITH PACKAGE (MIN 14 DAYS)',
        adults: 1,
        infants: 0,
        totalVisaCost: 525,
    };

    const hotelDetails = {
        hotelName: 'FUNDAQ HARIS',
        rating: '★★',
        distanceFromHaram: 850,
        rooms: 1,
        checkInDate: 'Tue, 30-Jul, 2024',
        checkOutDate: 'Wed, 31-Jul, 2024',
        nights: 1,
        totalCost: 55,
    };

    return (
        <div className="mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-gray-700 mb-4"> Umrah Package Details</h1>
            <VisaDetailsDisplay
                visaType={visaDetails.visaType}
                adults={visaDetails.adults}
                infants={visaDetails.infants}
                totalVisaCost={visaDetails.totalVisaCost}
            />
            <HotelDetailsDisplay
                hotelName={hotelDetails.hotelName}
                rating={hotelDetails.rating}
                distanceFromHaram={hotelDetails.distanceFromHaram}
                rooms={hotelDetails.rooms}
                checkInDate={hotelDetails.checkInDate}
                checkOutDate={hotelDetails.checkOutDate}
                nights={hotelDetails.nights}
                totalCost={hotelDetails.totalCost}
            />
            <FlightDetails />
            <PackageSummary />
            <ImportantInformation />
            <VisaPaxDetails />
            <HotelPaxDetails />
            <SpecialRequests />
            <button className="w-full mt-4 py-2 px-4 bg-primary text-white font-semibold rounded-md hover:bg-secondary">
                Print Rates
            </button>
        </div>
    );
};

export default Confirmation;
