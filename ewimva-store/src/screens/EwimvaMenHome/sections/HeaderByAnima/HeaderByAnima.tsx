import React from "react";

export const HeaderByAnima = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { id: 1, text: "ЖЕНЩИНЫ", isActive: false },
    { id: 2, text: "МУЖЧИНЫ", isActive: true },
  ];

  // Utility links data
  const utilityLinks = [
    { id: 1, text: "ИСКАТЬ" },
    { id: 2, text: "ВОЙТИ" },
    { id: 3, text: "ФАВОРИТЫ" },
  ];

  return (
    <header className="w-full h-14 bg-white">
      <div className="relative h-full flex items-center justify-between px-8">
        {/* Left navigation */}
        <nav className="flex space-x-11">
          {navLinks.map((link) => (
            <div key={link.id} className="relative">
              <div className="font-bold text-[#131313] text-[12.7px] leading-[18px] font-['Inter',Helvetica] tracking-[0] whitespace-nowrap">
                {link.text}
              </div>
              {link.isActive && (
                <div className="absolute w-full h-0.5 bottom-[-8px] border-b border-[#131313]" />
              )}
            </div>
          ))}
        </nav>

        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 font-['Montserrat',Helvetica] font-semibold text-[#131313] text-2xl tracking-[0] leading-[normal]">
          EWIMVA
        </div>

        {/* Right utility links */}
        <div className="flex space-x-8">
          {utilityLinks.map((link) => (
            <div
              key={link.id}
              className="font-bold text-[#131313] text-[12.7px] leading-[18px] font-['Inter',Helvetica] tracking-[0] whitespace-nowrap"
            >
              {link.text}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
