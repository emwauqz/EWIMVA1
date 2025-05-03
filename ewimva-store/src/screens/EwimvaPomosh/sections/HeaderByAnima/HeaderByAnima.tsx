import React from "react";

export const HeaderByAnima = (): JSX.Element => {
  // Navigation links data for better maintainability
  const leftNavLinks = [
    { id: 1, text: "ЖЕНЩИНЫ", href: "#" },
    { id: 2, text: "МУЖЧИНЫ", href: "#" },
  ];

  const rightNavLinks = [
    { id: 1, text: "ИСКАТЬ", href: "#" },
    { id: 2, text: "МОЙ АККАУНТ", href: "#" },
    { id: 3, text: "ФАВОРИТЫ", href: "#" },
  ];

  return (
    <header className="w-full bg-transparent">
      <div className="relative w-full h-14 bg-white flex items-center justify-between px-8">
        {/* Left navigation */}
        <nav className="flex space-x-10">
          {leftNavLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="font-bold text-[#131313] text-[12.7px] font-['Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 font-['Montserrat',Helvetica] font-semibold text-[#131313] text-2xl tracking-[0] leading-[normal]">
          EWIMVA
        </div>

        {/* Right navigation */}
        <nav className="flex space-x-6">
          {rightNavLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="font-bold text-[#131313] text-[12.7px] font-['Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
