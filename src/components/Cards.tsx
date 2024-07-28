import React from 'react';

interface CardProps {
    image: string;
    buttonText: string;
    buttonLink: string;
}

const Cards = ({ image, buttonText, buttonLink }: CardProps) => {
    return (
        <div className="mb-5 flex items-center justify-center">
            <div
                className="max-w-[19rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                <div className="py-7 px-6">
                    <div className="-mt-7 mb-7 -mx-6 rounded-tl rounded-tr h-[215px] overflow-hidden">
                        <img src={image} alt="cover" className="w-full h-full object-cover" />
                    </div>
                    <a href={buttonLink} className="btn btn-primary mt-6 hover:btn-secondary">
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cards;
