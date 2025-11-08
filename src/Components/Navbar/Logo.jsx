import React from "react";
import logo from '../../assets/logo-light.png';

const Logo = () => {
    return (
        <div className="flex items-center space-x-2">
            <img
                src={logo}
                alt="Carola Logo"
                className="h-8"
            />
        </div>
    );
};

export default Logo;
