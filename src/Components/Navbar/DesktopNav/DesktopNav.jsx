import React, { useEffect, useState } from 'react';
import TopNav from './TopNav';
import BottomNav from './BottomNav';

const DesktopNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="hidden md:block px-2 relative w-full z-50">
            {/* TopNav Hide / show */}
            <div
                className={`transition-transform duration-500 ${isScrolled ? '-translate-y-full' : 'translate-y-0'
                    }`}
            >
                <TopNav />
            </div>

            {/* BottomNav Fixed */}
            <div
                className={`transition-all duration-500 ${isScrolled
                        ? 'fixed top-0 left-0 w-full bg-secondary shadow-md'
                        : 'relative bg-transparent'
                    }`}
            >
                <BottomNav />
            </div>
        </nav>
    );
};

export default DesktopNav;
