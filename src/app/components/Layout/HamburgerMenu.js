"use client";

const HamburgerMenu = ({ isMenuOpen, toggleMenu, isHomePage, scrolled }) => {
    const lineColor = isHomePage && !scrolled ? "bg-white" : "bg-black";
    const textColor = isHomePage && !scrolled ? "text-white" : "text-black";

    return (
        <div
            className={`ml-auto flex space-x-8 z-60 transition-all transform duration-300 ${textColor}`}
        >
            <button
                onClick={toggleMenu}
                className={`hamburger-btn btn-header cursor-pointer  ${isMenuOpen ? "open open-menu transparent-lines" : ""
                    } transition-transform duration-300 ease-in-out hover:scale-110`}
            >
                <p className={`line transition-all duration-300 ease-in-out ${lineColor}`}></p>
                <p className={`line transition-all duration-300 ease-in-out ${lineColor}`}></p>
                <p className={`line transition-all duration-300 ease-in-out ${lineColor}`}></p>
            </button>
        </div>
    );
};

export default HamburgerMenu;
