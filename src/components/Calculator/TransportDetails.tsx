// TransportDetails.tsx
import React from 'react';

interface Props {
    transport: string;
    setTransport: (value: string) => void;
    route: string;
    setRoute: (value: string) => void;
    transferRate: number;
    setTransferRate: (value: number) => void;
}

const TransportDetails: React.FC<Props> = ({ transport, setTransport, route, setRoute, transferRate, setTransferRate }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">Select Transport</label>
            <select className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={transport} onChange={(e) => setTransport(e.target.value)}>
                <option value="">Select Transport</option>
                <option value="Bus">Bus</option>
                <option value="Car">Car</option>
            </select>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">Select Route</label>
            <select className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={route} onChange={(e) => setRoute(e.target.value)}>
                <option value="">Select Route</option>
                <option value="Route1">Route 1</option>
                <option value="Route2">Route 2</option>
            </select>
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">Transfer Rate</label>
            <input type="number" className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={transferRate} onChange={(e) => setTransferRate(Number(e.target.value))} />
        </div>
    </div>
);

export default TransportDetails;
