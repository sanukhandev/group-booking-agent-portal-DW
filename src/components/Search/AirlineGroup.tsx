// src/components/AirlineGroup.tsx
import React, { useState } from 'react';
import Modal from '../Modal';
import BookNowForm from './BookNow/BookNowForm';

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

interface ISectorDetails {
    flightNumber: string;
    date: string;
    route: string;
    time: string;
    baggage: string;
}

const AirlineGroup: React.FC<{ group: AirlineGroupProps }> = ({ group }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const sectorDetails = (sectorDetails: string): ISectorDetails[] => {
        return sectorDetails.split(',').map(detail => {
            const parts = detail.trim().split(' ');
            const flightNumber = parts[0];
            const date = parts[1];
            const route = parts[2];
            const time = parts.slice(3, parts.length - 2).join(' ');
            const baggage = parts.slice(-2).join(' ');

            return {
                flightNumber,
                date,
                route,
                time,
                baggage
            };
        });
    };


    return (
        <div className="pt-5 pl-2.5">
            <div className="max-w-full  bg-white flex flex-col rounded overflow-hidden shadow-lg">
                <div className="flex flex-row items-baseline flex-nowrap bg-gray-100 p-2">
                    <img src="/assets/vectors/Icons/plane.svg" alt="" className="w-[15px] h-auto" />
                    <h1 className="ml-2 uppercase font-bold text-gray-500">{group.airline}</h1>
                    <p className="ml-2 font-normal text-gray-500">For {group.numberOfDays} Day(s)</p>
                </div>
                <div className="mt-2 flex sm:flex-row mx-6 sm:justify-between flex-wrap">
                    <div className="flex flex-row place-items-center p-2">
                        <img
                            src={`/assets/vectors/airlines/${group.AirlineCode}.svg`}
                            alt="airline logo"
                            className="w-[150px] h-auto object-cover"
                        />
                    </div>
                    {sectorDetails(group.sectorDetails).map((detail, index) => (
                        <div key={index}
                             className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-2 mt-2 bg-white flex-grow flex-shrink-0 flex-basis-[calc(50%-1rem)] sm:flex-basis-[calc(50%-1rem)] max-w-[calc(50%-1rem)]">
                            <p className="font-bold flex items-center mb-2">
                                <img
                                    src={`/assets/vectors/Icons/${index === (group.sectorDetails.split(',').length - 1) ? 'landing' : 'takeoff'}.svg`}
                                    alt="" className="w-[20px] h-auto mr-2" />
                                {group.AirlineCode + '-' + detail.flightNumber}
                            </p>
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-xs text-gray-500"><span
                                    className="font-semibold">Date:</span> {detail.date}</p>
                                <p className="text-xs text-gray-500"><span
                                    className="font-semibold">Route:</span> {detail.route}</p>
                            </div>
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-xs text-gray-500"><span
                                    className="font-semibold">Time:</span> {detail.time}</p>
                                <p className="text-xs text-gray-500"><span
                                    className="font-semibold">Baggage:</span> {detail.baggage.replace('Baggage', '')}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 bg-gray-100 flex flex-row flex-wrap md:flex-nowrap justify-between items-baseline">
                    {sectorDetails(group.sectorDetails).map((detail, index) => (
                        <div className="flex mx-6 py-4 flex-row flex-wrap">
                            <img
                                src={`/assets/vectors/Icons/${index === (group.sectorDetails.split(',').length - 1) ? 'landing' : 'takeoff'}.svg`}
                                alt="" className="w-[25px] h-auto mr-2" />
                            <div className="text-sm mx-2 flex flex-col">
                                <p> {group.AirlineCode + '-' + detail.flightNumber}</p>
                                <p className="font-bold">{detail.date} {detail.time}</p>
                                <p className="text-xs text-gray-500">{detail.route} - {detail.baggage.replace('Baggage', '')}</p>
                            </div>
                        </div>
                    ))}


                    <div className="mx-6 flex flex-row py-4 mr-6 flex-wrap">
                        <img src="/assets/vectors/Icons/seat.svg" alt="" className="w-[25px] h-auto " />
                        <div className="text-sm mx-2 flex flex-col">
                            <p> Seats 2/30</p>
                            <p className="font-bold">{group.price}</p>
                            <p className="text-xs text-gray-500">Price per adult</p>
                        </div>
                        <button onClick={openModal}
                            className="w-32 h-11 rounded flex border-solid border text-white bg-primary hover:bg-secondary mx-2 justify-center place-items-center">
                            <div className="">Book</div>
                        </button>
                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                            <BookNowForm />
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AirlineGroup;
