// PassengerDetails.tsx
import React from 'react';

const PassengerDetails: React.FC = () => {
    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">Passenger Details</h3>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <label>Set</label>
                    <input type="text" className="w-full p-2 border rounded-md" value="Adult 1" readOnly />
                </div>
                <div>
                    <label>Title</label>
                    <select className="w-full p-2 border rounded-md">
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Miss">Miss</option>
                    </select>
                </div>
                <div>
                    <label>Surname</label>
                    <input type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label>Given Name</label>
                    <input type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label>Passport</label>
                    <input type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label>BOB</label>
                    <input type="date" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label>DOI</label>
                    <input type="date" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                    <label>Attachment Passport</label>
                    <input type="file" className="w-full p-2 border rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default PassengerDetails;
