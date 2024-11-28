"use client";

const HamburgerMenu = ({ colorChanged, isMenuOpen, toggleMenu }) => {
    return (
        <div
            className={`ml-auto flex space-x-8 z-60`}
        >
            <button
                onClick={toggleMenu}
                className={`hamburger-btn btn-header ${isMenuOpen ? "open open-menu" : ""} ${isMenuOpen ? "transparent-lines" : ""} text-bla`}
            >
                <p className={`line transition-all duration-300 ease-in-out ${colorChanged ? "bg-white" : "bg-black"}`}></p>
                <p className={`line transition-all duration-300 ease-in-out ${colorChanged ? "bg-white" : "bg-black"}`}></p>
                <p className={`line transition-all duration-300 ease-in-out ${colorChanged ? "bg-white" : "bg-black"}`}></p>
            </button>
        </div>
    );
};

export default HamburgerMenu;
