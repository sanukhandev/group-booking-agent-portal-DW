import React from "react";


const Preloader: React.FC = () => {
    return (
        <div
            className="preloader fixed inset-0 flex items-center justify-center bg-white transition-opacity duration-300"
        >
            <img src="/assets/images/loader.png" alt="pre loader" className="w-64 animate-flipInY" />
        </div>
    );
};

export default Preloader;
