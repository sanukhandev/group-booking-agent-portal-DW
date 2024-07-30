// PackageSummary.tsx
import React from 'react';

const PackageSummary: React.FC = () => (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold mb-2">Total Umrah Package Details</h3>
        <table className="w-full border-collapse">
            <thead>
            <tr className="bg-primary text-white">
                <th className="p-2 border">Item</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Amount</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="p-2 border">MAKKAH Hotel</td>
                <td className="p-2 border">
                    Hotel: FUNDAQ HARIS | No. of Rooms: 1 <br />
                    Check-in: Tue, 30-Jul, 2024 | No. of Nights: 1 <br />
                    Check-out: Wed, 31-Jul, 2024
                </td>
                <td className="p-2 border">SR 55</td>
            </tr>
            <tr>
                <td className="p-2 border">Visa Cost</td>
                <td className="p-2 border">
                    Rate: SR 525 | No. of Adults: 1 | No. of Infants: 0
                </td>
                <td className="p-2 border">SR 525</td>
            </tr>
            <tr className="bg-gray-100">
                <td className="p-2 border font-semibold" colSpan={2}>Total</td>
                <td className="p-2 border font-semibold">SR 580</td>
            </tr>
            </tbody>
        </table>
    </div>
);

export default PackageSummary;
