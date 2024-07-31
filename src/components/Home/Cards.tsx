import React from 'react';

interface CardProps {
    image: string;
    buttonText: string;
    buttonLink: string;
}
 
const Cards: React.FC<CardProps> = ({ image, buttonText, buttonLink }) => {
    return (
        <div className="mb-5 flex items-center justify-center">
            <div
                className="max-w-[19rem] w-full bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                <div className="py-7 px-6">
                    <div className="mb-4 overflow-hidden rounded-t-lg">
                        <img src={image} alt="cover" className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105" />
                    </div>
                    <div className="flex justify-center">
                        <a href={buttonLink} className="btn btn-primary mt-4 hover:bg-secondary transition-colors duration-300 ease-in-out">
                            {buttonText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
