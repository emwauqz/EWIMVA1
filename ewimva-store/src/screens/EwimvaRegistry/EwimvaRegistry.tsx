import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const EwimvaRegistry = (): JSX.Element => {
  // Data for navigation links
  const navLinks = {
    left: [
      { text: "ЖЕНЩИНЫ", width: "w-[75px]" },
      { text: "МУЖЧИНЫ", width: "w-[75px]" },
    ],
    right: ["ИСКАТЬ", "ВОЙТИ", "ФАВОРИТЫ"],
  };

  // Data for footer links
  const footerLinks = {
    help: [
      { text: "ПОМОЩЬ", isBold: true },
      { text: "МОИ ПОКУПКИ", isBold: true },
    ],
    outlet: [
      { text: "EWIMVA OUTLET", isSemibold: true },
      { text: "SITE MAP", isSemibold: true },
    ],
    social: ["INSTAGRAM", "FACEBOOK", "TIKTOK", "PINTEREST"],
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1920px] h-[1200px] relative">
        {/* Header */}
        <header className="absolute w-[1932px] h-14 top-0 left-0 bg-transparent">
          <div className="relative w-[1920px] h-14 bg-white flex items-center justify-between px-8">
            {/* Left navigation */}
            <div className="flex space-x-10">
              {navLinks.left.map((link, index) => (
                <div
                  key={index}
                  className={`${link.width} font-bold text-[#131313] text-[12.7px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap`}
                >
                  {link.text}
                </div>
              ))}
            </div>

            {/* Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 [font-family:'Montserrat',Helvetica] font-semibold text-[#131313] text-2xl tracking-[0] leading-[normal]">
              EWIMVA
            </div>

            {/* Right navigation */}
            <div className="flex space-x-10 justify-end">
              {navLinks.right.map((text, index) => (
                <div
                  key={index}
                  className="font-bold text-[#131313] text-[12.7px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Registration Form */}
        <Card className="absolute w-[364px] h-[312px] top-[234px] left-[809px] border-none shadow-none">
          <CardContent className="p-0">
            <div className="w-[165px] [font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.1px] tracking-[0] leading-5 whitespace-nowrap mb-9">
              СОЗДАЙТЕ АККАУНТ
            </div>

            {/* Email field */}
            <div className="relative w-[350px] h-11 mb-6 border border-solid border-[#b8b8b8]">
              <div className="absolute w-[39px] top-[13px] left-2 [font-family:'Inter',Helvetica] font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                E-mail
              </div>
            </div>

            {/* Phone number field */}
            <div className="flex mb-6">
              <div className="relative w-[118px] h-11 bg-white border border-solid border-[#131313] flex items-center">
                <div className="absolute w-4 h-[11px] top-[15px] left-2 bg-[url(/----------996.png)] bg-cover bg-[50%_50%]" />
                <div className="w-8 ml-8 font-normal text-[#131313] text-[12.5px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                  +996
                </div>
                <img
                  className="absolute w-[17px] h-[9px] top-[18px] right-4"
                  alt="Vector"
                  src="/vector-1_registry.svg"
                />
              </div>

              <div className="relative w-[216px] h-11 ml-4">
                <div className="w-[84px] top-3.5 left-[9px] text-[12.3px] absolute [font-family:'Inter',Helvetica] font-normal text-[#131313] tracking-[0] leading-[18px] whitespace-nowrap">
                  Моб. телефон
                </div>
                <div className="absolute w-[216px] h-11 top-0 left-0 border border-solid border-[#b8b8b8]" />
              </div>
            </div>

            {/* Password field */}
            <div className="relative w-[350px] h-11 mb-6 border border-solid border-[#b8b8b8]">
              <div className="w-[45px] top-[13px] left-2 text-[12.4px] absolute [font-family:'Inter',Helvetica] font-normal text-[#131313] tracking-[0] leading-[18px] whitespace-nowrap">
                Пароль
              </div>
              <img
                className="absolute w-[18px] h-[11px] top-[15px] right-4"
                alt="Vector"
                src="/vector_registry.svg"
              />
            </div>

            {/* Create account button */}
            <Button className="w-[350px] h-11 bg-[#131313] rounded-none hover:bg-[#333333]">
              <div className="w-[105px] font-bold text-white text-[12.3px] text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                Создать аккаунт
              </div>
            </Button>

            {/* Login link */}
            <div className="w-full flex justify-center mt-6">
              <div className="w-[185px] font-normal text-[#131313] text-xs text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-xs tracking-[0] leading-[18px]">
                  У Вас уже есть аккаунт?{" "}
                </span>
                <span className="font-bold underline cursor-pointer">
                  Войти
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="absolute w-[1920px] h-[392px] top-[808px] left-0 bg-white">
          {/* Help and outlet links */}
          <div className="absolute w-[280px] h-[58px] top-[188px] left-8 flex flex-col">
            <div className="flex justify-between">
              <div className="font-[number:var(--shop-mango-com-semantic-link-upper-font-weight)] text-black text-[length:var(--shop-mango-com-semantic-link-upper-font-size)] font-shop-mango-com-semantic-link-upper tracking-[var(--shop-mango-com-semantic-link-upper-letter-spacing)] leading-[var(--shop-mango-com-semantic-link-upper-line-height)] whitespace-nowrap [font-style:var(--shop-mango-com-semantic-link-upper-font-style)]">
                {footerLinks.help[0].text}
              </div>
              <div className="absolute top-0 left-[164px] [font-family:'Inter',Helvetica] font-semibold text-black text-[12.8px] tracking-[0] leading-[18px] whitespace-nowrap">
                {footerLinks.outlet[0].text}
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <div className="font-bold text-black text-[12.2px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                {footerLinks.help[1].text}
              </div>
              <div className="absolute top-10 left-[164px] [font-family:'Inter',Helvetica] font-semibold text-black text-[12.9px] tracking-[0] leading-[18px] whitespace-nowrap">
                {footerLinks.outlet[1].text}
              </div>
            </div>
          </div>

          {/* Social links and country */}
          <div className="absolute w-[499px] h-[57px] top-[31px] left-[716px]">
            <div className="h-[18px] top-0 left-[207px] font-bold text-black text-[12.7px] absolute [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
              КЫРГЫЗСТАН
            </div>
            <div className="flex justify-between mt-11">
              <div className="w-[78px] [font-family:'Inter',Helvetica] font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                {footerLinks.social[0]}
              </div>
              <div className="w-[74px] ml-[72px] [font-family:'Inter',Helvetica] font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                {footerLinks.social[1]}
              </div>
              <div className="w-12 ml-[72px] [font-family:'Inter',Helvetica] font-normal text-[#131313] text-[12.9px] tracking-[0] leading-[18px] whitespace-nowrap">
                {footerLinks.social[2]}
              </div>
              <div className="w-[73px] ml-[72px] [font-family:'Inter',Helvetica] font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap">
                {footerLinks.social[3]}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="absolute w-[233px] h-[18px] top-[319px] left-[844px]">
            <div className="absolute h-[18px] top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-[#131313] text-[12.3px] tracking-[0] leading-[18px] whitespace-nowrap">
              © 2025 EWIMVA Все права защищены
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EwimvaRegistry;