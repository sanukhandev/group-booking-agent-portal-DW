// RoomType.tsx
import React from 'react';

interface Props {
    roomType: string;
    setRoomType: (value: string) => void;
}

const RoomType: React.FC<Props> = ({ roomType, setRoomType }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-white">Room Type</label>
        <select className="mt-1 p-2 block w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option value="Private">Private</option>
            <option value="Shared">Shared</option>
        </select>
    </div>
);

export default RoomType;
