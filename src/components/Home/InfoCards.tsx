import React from 'react';

interface CardProps {
    title: string;
    amount: string;
    percentage: string;
    trend: string;
    lastWeek: string;
    gradientFrom: string;
    gradientTo: string;
}
 
const InfoCards: React.FC<CardProps> = ({ title, amount, percentage, trend, lastWeek, gradientFrom, gradientTo }) => {
    return (
        <div className={`panel bg-gradient-to-r from-${gradientFrom} to-${gradientTo}`}>
            <div className="flex justify-between">
                <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">{title}</div>
                <div className="dropdown">
                    <button type="button" className="hover:opacity-80">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className="hover:opacity-80 opacity-70">
                            <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
                            <circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor"
                                    strokeWidth="1.5"></circle>
                            <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex items-center mt-5">
                <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3">{amount}</div>
                <div
                    className={`badge bg-white/30 ${trend === '+' ? 'text-green-500' : 'text-red-500'}`}>{percentage}</div>
            </div>
            <div className="flex items-center font-semibold mt-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="ltr:mr-2 rtl:ml-2 shrink-0">
                    <path opacity="0.5"
                          d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                          stroke="currentColor" strokeWidth="1.5"></path>
                    <path
                        d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                        stroke="currentColor" strokeWidth="1.5"></path>
                </svg>
                {lastWeek}
            </div>
        </div>
    );
};

export default InfoCards;
