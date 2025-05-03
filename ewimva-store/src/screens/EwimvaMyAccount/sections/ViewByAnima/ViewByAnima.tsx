import React from "react";

export const ViewByAnima = (): JSX.Element => {
  const socialLinks = [
    { name: "INSTAGRAM", href: "#" },
    { name: "FACEBOOK", href: "#" },
    { name: "TIKTOK", href: "#" },
    { name: "PINTEREST", href: "#" },
  ];

  const helpLinks = [
    { name: "ПОМОЩЬ", href: "#" },
    { name: "EWIMVA OUTLET", href: "#" },
    { name: "МОИ ПОКУПКИ", href: "#" },
    { name: "SITE MAP", href: "#" },
    { name: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ", href: "#" },
  ];

  return (
    <footer className="w-full bg-white py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col space-y-12">
          {/* Country and Social Media Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div className="font-bold text-[12.7px] text-black">КЫРГЫЗСТАН</div>
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-normal text-[13px] text-[#131313]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {helpLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-black whitespace-nowrap ${
                  index === 0
                    ? "font-shop-mango-com-semantic-link-upper text-[length:var(--shop-mango-com-semantic-link-upper-font-size)] tracking-[var(--shop-mango-com-semantic-link-upper-letter-spacing)] leading-[var(--shop-mango-com-semantic-link-upper-line-height)] [font-style:var(--shop-mango-com-semantic-link-upper-font-style)]"
                    : index === 1 || index === 3
                      ? "font-semibold text-[12.9px] leading-[18px] font-['Inter',Helvetica]"
                      : "font-bold text-[12.2px] leading-[18px] font-['Inter',Helvetica]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex justify-center">
            <div className="font-normal text-[12.3px] text-[#131313] font-['Inter',Helvetica] leading-[18px]">
              © 2025 EWIMVA Все права защищены
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
