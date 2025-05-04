import React from "react";
import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  // Navigation links data
const leftNavLinks = [
{ id: 1, text: "ЖЕНЩИНЫ", active: true, to: "/" },
{ id: 2, text: "МУЖЧИНЫ", active: false, to: "/men" },
];

const rightNavLinks = [
{ id: 1, text: "ИСКАТЬ", to: "/search" },
{ id: 2, text: "ВОЙТИ", to: "/login" },
{ id: 3, text: "ФАВОРИТЫ", to: "/favourites" },
];

return (
<header className="w-full h-14 bg-white fixed top-0 left-0 z-50 shadow-sm">
    <div className="relative w-full h-14 bg-white flex items-center justify-between px-8">
    {/* Left navigation */}
    <nav className="flex space-x-11">
        {leftNavLinks.map((link) => (
        <div key={link.id} className="relative">
            <Link
            to={link.to}
            className="font-['Inter',Helvetica] font-bold text-[#131313] text-[12.7px] tracking-[0] leading-[18px] whitespace-nowrap"
            >
            {link.text}
            </Link>
            {link.active && (
            <div className="absolute w-[75px] h-0.5 top-6 left-0 border-b border-[#131313]" />
            )}
        </div>
        ))}
    </nav>

    {/* Center logo */}
    <Link
        to="/"
        className="absolute left-1/2 transform -translate-x-1/2 font-['Montserrat',Helvetica] font-semibold text-[#131313] text-2xl tracking-[0] leading-[normal]"
    >
        EWIMVA
    </Link>

    {/* Right navigation */}
    <nav className="flex space-x-8 ml-auto">
        {rightNavLinks.map((link) => (
        <Link
            key={link.id}
            to={link.to}
            className="font-['Inter',Helvetica] font-bold text-[#131313] text-[12.7px] tracking-[0] leading-[18px] whitespace-nowrap"
        >
            {link.text}
        </Link>
        ))}
    </nav>
    </div>
</header>
);
}