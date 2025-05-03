import React from "react";

export const HeaderByAnima = (): JSX.Element => {
  // Navigation links data
  const leftNavLinks = [
    { id: 1, text: "ЖЕНЩИНЫ", active: true },
    { id: 2, text: "МУЖЧИНЫ", active: false },
  ];

  const rightNavLinks = [
    { id: 1, text: "ИСКАТЬ" },
    { id: 2, text: "ВОЙТИ" },
    { id: 3, text: "ФАВОРИТЫ" },
  ];

  return (
    <header className="w-full h-14 bg-transparent">
      <div className="relative w-full h-14 bg-white flex items-center justify-between px-8">
        {/* Left navigation */}
        <nav className="flex space-x-11">
          {leftNavLinks.map((link) => (
            <div key={link.id} className="relative">
              <button className="font-['Inter',Helvetica] font-bold text-[#131313] text-[12.7px] tracking-[0] leading-[18px] whitespace-nowrap">
                {link.text}
              </button>
              {link.active && (
                <div className="absolute w-[75px] h-0.5 top-6 left-0 border-b border-[#131313]" />
              )}
            </div>
          ))}
        </nav>

        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 font-['Montserrat',Helvetica] font-semibold text-[#131313] text-2xl tracking-[0] leading-[normal]">
          EWIMVA
        </div>

        {/* Right navigation */}
        <nav className="flex space-x-8 ml-auto">
          {rightNavLinks.map((link) => (
            <button
              key={link.id}
              className="font-['Inter',Helvetica] font-bold text-[#131313] text-[12.7px] tracking-[0] leading-[18px] whitespace-nowrap"
            >
              {link.text}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};
