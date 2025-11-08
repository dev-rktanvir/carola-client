import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import Logo from "../Logo";

const BottomNav = () => {
    const isLoggedIn = false;
    const [isSticky, setIsSticky] = useState(false);

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const commonLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Available Cars", path: "/cars" },
        { name: "Our Team", path: "/team" },
        { name: "Contact", path: "/contact" },
    ];

    const loggedInLinks = [...commonLinks, { name: "Dashboard", path: "/dashboard" }];
    const navLinks = isLoggedIn ? loggedInLinks : commonLinks;

    return (
        <nav className="bg-transparent hidden lg:block">
            <div className="bg-secondary rounded-xl max-w-7xl mx-auto flex justify-between items-center py-3 px-3">

                {/* Left Side - Logo */}
                <Logo />

                {/* Middle Side - Nav Links */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `font-medium transition-colors duration-300 ${isActive ? "text-primary" : "text-white hover:text-primary"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Right Side - Login / User */}
                <div className="flex items-center space-x-4">
                    {!isLoggedIn ? (
                        <NavLink
                            to="/login"
                            className="text-lg font-medium text-primary px-8 py-1.5 rounded-md border border-primary
                         hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
                        >
                            Login
                        </NavLink>
                    ) : (
                        <div className="flex items-center space-x-3">
                            {/* User Image */}
                            <div className="relative group">
                                <img
                                    src="https://i.pravatar.cc/40"
                                    alt="User"
                                    className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
                                />
                                {/* Hover Username */}
                                <span className="absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100
                                 bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap
                                 transition-opacity duration-300 ease-in-out">
                                    John Doe
                                </span>
                            </div>

                            {/* Logout Button */}
                            <button
                                className="text-lg font-medium text-primary px-8 py-1.5 rounded-md border border-primary
                           hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default BottomNav;
