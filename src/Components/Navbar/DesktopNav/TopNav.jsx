import React from "react";
import { HiOutlineClock, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const TopNav = () => {
    return (
        <div className="bg-transparent text-secondary text-base">
            {/* Navbar Container */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 space-y-2 md:space-y-0">

                {/* Left Side */}
                <div className="flex items-center space-x-2">
                    <HiOutlineClock className="text-primary w-5 h-5" />
                    <p className="text-sm md:text-base">Open Hours: Mon - Fri 8.00 am - 6.00 pm</p>
                </div>

                {/* Right Side */}
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
                    {/* Phone */}
                    <div className="flex items-center space-x-2">
                        <HiOutlinePhone className="text-secondary w-5 h-5" />
                        <p className="text-sm md:text-base">+91-213-666-0027</p>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-2">
                        <HiOutlineMail className="text-secondary w-5 h-5" />
                        <p className="text-sm md:text-base">info@carola.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
