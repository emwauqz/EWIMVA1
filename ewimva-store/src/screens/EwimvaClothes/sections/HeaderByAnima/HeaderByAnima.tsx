import React from "react";

export const HeaderByAnima = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { id: 1, text: "ЖЕНЩИНЫ", isActive: true },
    { id: 2, text: "МУЖЧИНЫ", isActive: false },
  ];

  // Utility links data
  const utilityLinks = [
    { id: 1, text: "ИСКАТЬ" },
    { id: 2, text: "МОЙ АККАУНТ" },
    { id: 3, text: "ФАВОРИТЫ" },
  ];

  return (
    <header className="w-full h-14 bg-transparent">
      <div className="relative w-full h-14 bg-white flex items-center justify-between px-8">
        {/* Left navigation */}
        <nav className="flex space-x-11">
          {navLinks.map((link) => (
            <div key={link.id} className="relative">
              <div className="font-bold text-[#131313] text-[12.7px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]">
                {link.text}
              </div>
              {link.isActive && (
                <div className="absolute w-[75px] h-0.5 top-5 border-b [border-bottom-style:solid] border-[#131313]" />
              )}
            </div>
          ))}
        </nav>

        {/* Brand logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 [font-family:'Montserrat',Helvetica] font-semibold text-[#131313] text-2xl tracking-[0] leading-[normal]">
          EWIMVA
        </div>

        {/* Right utility links */}
        <div className="flex space-x-8 ml-auto">
          {utilityLinks.map((link) => (
            <div
              key={link.id}
              className="font-bold text-[#131313] text-[12.7px] whitespace-nowrap [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]"
            >
              {link.text}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
