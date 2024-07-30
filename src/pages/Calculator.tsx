import React, { useState } from 'react';
import AdultsInfants from '../components/Calculator/AdultsInfants';
import VisaDetails from '../components/Calculator/VisaDetails';
import RoomType from '../components/Calculator/RoomType';
import PlanDetails from '../components/Calculator/PlanDetails';
import TransportDetails from '../components/Calculator/TransportDetails';

const Calculator: React.FC = () => {
    const [adults, setAdults] = useState<number>(0);
    const [infants, setInfants] = useState<number>(0);
    const [visaType, setVisaType] = useState<string>('');
    const [adultVisaRate, setAdultVisaRate] = useState<number>(0);
    const [infantVisaRate, setInfantVisaRate] = useState<number>(0);
    const [totalVisaCost, setTotalVisaCost] = useState<number>(0);
    const [roomType, setRoomType] = useState<string>('Private');
    const [city, setCity] = useState<string>('');
    const [hotel, setHotel] = useState<string>('');
    const [rooms, setRooms] = useState<number>(1);
    const [checkInDate, setCheckInDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const [nights, setNights] = useState<number>(1);
    const [transport, setTransport] = useState<string>('');
    const [route, setRoute] = useState<string>('');
    const [transferRate, setTransferRate] = useState<number>(0);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">Umrah Calculator</h2>
            <AdultsInfants adults={adults} setAdults={setAdults} infants={infants} setInfants={setInfants} />
            <VisaDetails
                visaType={visaType}
                setVisaType={setVisaType}
                adultVisaRate={adultVisaRate}
                setAdultVisaRate={setAdultVisaRate}
                infantVisaRate={infantVisaRate}
                setInfantVisaRate={setInfantVisaRate}
                totalVisaCost={totalVisaCost}
                setTotalVisaCost={setTotalVisaCost}
                adults={adults}
                infants={infants}
            />
            <RoomType roomType={roomType} setRoomType={setRoomType} />
            <PlanDetails
                city={city}
                setCity={setCity}
                hotel={hotel}
                setHotel={setHotel}
                rooms={rooms}
                setRooms={setRooms}
                checkInDate={checkInDate}
                setCheckInDate={setCheckInDate}
                nights={nights}
                setNights={setNights}
            />
            <TransportDetails
                transport={transport}
                setTransport={setTransport}
                route={route}
                setRoute={setRoute}
                transferRate={transferRate}
                setTransferRate={setTransferRate}
            />
            <button className="w-full py-2 px-4 bg-primary hover:bg-secondary text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50">
                Proceed to Results
            </button>
        </div>
    );
};

export default Calculator;
