// ImportantInformation.tsx
import React from 'react';

const ImportantInformation: React.FC = () => (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold mb-2">Important Information!</h3>
        <ul className="list-disc pl-5 text-gray-700">
            <li>Above Rates are per Room per Night in Saudi Riyals, Net and Non-Commissionable.</li>
            <li>Above Rates are including Municipality Fees 3% and 15% VAT Taxes.</li>
            <li>Above Rates are excluding any new Fees or Taxes applied by Saudi Authority.</li>
        </ul>
    </div>
);

export default ImportantInformation;
