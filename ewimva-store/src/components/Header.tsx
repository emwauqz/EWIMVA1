import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { categories, Category } from '../data/categories';

interface HeaderProps {
isAuthenticated?: boolean;
}

export default function Header({ isAuthenticated = false }: HeaderProps): JSX.Element {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const leftNavLinks = [
{ id: 1, text: "ЖЕНЩИНЫ", to: "/" },
{ id: 2, text: "МУЖЧИНЫ", to: "/men" },
];

const rightNavLinks = [
{ id: 1, text: "ИСКАТЬ", to: "/search" },
{ id: 2, text: isAuthenticated ? "МОЙ АККАУНТ" : "ВОЙТИ", to: isAuthenticated ? "/account" : "/login" },
{ id: 3, text: "КОРЗИНА", to: "/cart" },
];

const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};

return (
<header className="w-full h-14 bg-white fixed top-0 left-0 z-50 shadow-sm">
    <div className="relative w-full h-14 bg-white flex items-center justify-between px-4 sm:px-8">
    {/* Hamburger Menu for Mobile */}
    <button className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>

    {/* Left Navigation */}
    <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-11 p-4 md:p-0`}>
        {leftNavLinks.map((link) => (
        <div key={link.id} className="relative group">
            <NavLink
            to={link.to}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
                `font-['Inter',Helvetica] font-bold text-[#131313] text-[12px] sm:text-[12.7px] tracking-[0] leading-[18px] whitespace-nowrap pb-1` +
                (isActive ? ' border-b-2 border-[#131313]' : '')
            }
            >
            {link.text}
            </NavLink>
            {/* Dropdown for Desktop Only */}
            <div className="hidden md:group-hover:flex absolute top-full left-0 bg-white shadow-md flex-col w-56 p-4 space-y-2 z-50">
            {categories
                .filter((category: Category) => category.type === (link.text === "ЖЕНЩИНЫ" ? 'women' : 'men'))
                .map((category: Category) => (
                <NavLink
                    key={category.id}
                    to={category.path}
                    className={({ isActive }) =>
                    `font-['Inter',Helvetica] font-medium text-[#131313] text-[12px] tracking-[0] leading-[18px] whitespace-nowrap hover:bg-gray-100 p-2` +
                    (isActive ? ' border-b-2 border-[#131313]' : '')
                    }
                >
                    {category.name}
                </NavLink>
                ))}
            </div>
        </div>
        ))}
    </nav>

    {/* Center Logo */}
    <NavLink
        to="/"
        className="absolute left-1/2 transform -translate-x-1/2 font-['Montserrat',Helvetica] font-semibold text-[#131313] text-xl sm:text-2xl tracking-[0] leading-[normal]"
    >
        EWIMVA
    </NavLink>

    {/* Right Navigation */}
    <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-[140px] md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0 md:ml-auto`}>
        {rightNavLinks.map((link) => (
        <NavLink
            key={link.id}
            to={link.to}
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
            `font-['Inter',Helvetica] font-bold text-[#131313] text-[12px] sm:text-[12.7px] tracking-[0] leading-[18px] whitespace-nowrap pb-1` +
            (isActive ? ' border-b-2 border-[#131313]' : '')
            }
        >
            {link.text}
        </NavLink>
        ))}
    </nav>
    </div>
</header>
);
}
