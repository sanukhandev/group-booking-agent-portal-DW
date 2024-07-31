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
    const formatCurrency = (amount: number): string  => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'PKR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    }
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
        <div className="pt-3 pl-2">
            <div className="max-w-full bg-white flex flex-col rounded overflow-hidden shadow-lg">
                <div className="flex flex-row items-center bg-gray-100 p-2">
                    <img src="/assets/vectors/Icons/plane.svg" alt="" className="w-[15px] h-auto" />
                    <h1 className="ml-2 uppercase font-bold text-gray-500">{group.airline}</h1>
                    <p className="ml-2 text-sm text-gray-500">For {group.numberOfDays} Day(s)</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between mt-2 mx-4">
                    <div className="flex items-center p-2">
                        <img
                            src={`/assets/vectors/airlines/${group.AirlineCode}.svg`}
                            alt="airline logo"
                            className="w-[120px] h-auto object-cover"
                        />
                    </div>
                    <div className="flex flex-col w-full md:flex-row md:justify-between md:w-auto">
                        {sectorDetails(group.sectorDetails).map((detail, index) => (
                            <div
                                key={index}
                                className="flex flex-col p-3 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-2 mt-2 bg-white md:mr-2"
                            >
                                <p className="font-bold flex items-center mb-1">
                                    <img
                                        src={`/assets/vectors/Icons/${index === (group.sectorDetails.split(',').length - 1) ? 'landing' : 'takeoff'}.svg`}
                                        alt=""
                                        className="w-[20px] h-auto mr-1"
                                    />
                                    {group.AirlineCode + '-' + detail.flightNumber}
                                </p>
                                <div className="flex items-center justify-between mb-1">
                                    <p className="text-xs text-gray-500">
                                        <span className="font-semibold">Date:</span> {detail.date}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        <span className="font-semibold">Route:</span> {detail.route}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mb-1">
                                    <p className="text-xs text-gray-500">
                                        <span className="font-semibold">Time:</span> {detail.time}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        <span
                                            className="font-semibold">Baggage:</span> {detail.baggage.replace('Baggage', '')}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-3 bg-gray-100 p-3 flex flex-col md:flex-row justify-between items-center">
                        <div className="hidden md:flex flex-wrap flex items-center mb-2 md:mb-0">
                            <img src="/assets/vectors/Icons/seat.svg" alt="" className="w-[20px] h-auto mr-2" />
                            <div className="text-sm flex flex-col">
                                <p className="font-bold">Seats Available: {group.availableSeats}</p>
                                <p className="text-xs text-gray-500">Total Seats: {group.totalSeats}</p>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-wrap flex items-center mb-2 md:mb-0">
                            <img src="/assets/vectors/Icons/price-tag.svg" alt="" className="w-[20px] h-auto mr-2" />
                            <div className="text-sm flex flex-col">
                                <p>Booking Price</p>
                                <p className="font-bold">{formatCurrency(Number(group.price.replace('PKR','').trim()))}</p>
                                <p className="text-xs text-gray-500">Price per adult</p>
                            </div>
                        </div>
                    <button
                        onClick={openModal}
                        className="w-full md:w-32 h-10 rounded border border-solid text-white bg-primary hover:bg-secondary mx-1 mt-2 md:mt-0 flex justify-center items-center"
                    > BOOK
                        <span className="block md:hidden ml-2 pill bg-secondary p-[2px] pl-5 pr-5 rounded">{formatCurrency(Number(group.price.replace('PKR','').trim()))}</span>
                    </button>
                </div>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <BookNowForm />
                </Modal>
            </div>
        </div>
    );
};

export default AirlineGroup;
