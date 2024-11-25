"use client";

const HamburgerMenu = ({ colorChanged, isMenuOpen, toggleMenu }) => {
    return (
        <div
            className={`ml-auto flex space-x-8 z-60 transition-all transform duration-300 ${colorChanged ? "text-white" : "text-black"
                }`}
        >
            <button
                onClick={toggleMenu}
                className={`hamburger-btn btn-header ${isMenuOpen ? "open open-menu" : ""} 
    ${isMenuOpen ? "transparent-lines" : ""} text-black transition-transform duration-300 ease-in-out hover:scale-110`}
            >
                <p className={`line transition-all duration-300 ease-in-out ${colorChanged ? "bg-white" : "bg-black"}`}></p>
                <p className={`line transition-all duration-300 ease-in-out ${colorChanged ? "bg-white" : "bg-black"}`}></p>
                <p className={`line transition-all duration-300 ease-in-out ${colorChanged ? "bg-white" : "bg-black"}`}></p>
            </button>
        </div>
    );
};

export default HamburgerMenu;
