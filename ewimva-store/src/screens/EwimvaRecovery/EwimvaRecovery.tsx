import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const EwimvaRecovery = (): JSX.Element => {
  // Navigation links data
  const navLinks = {
    left: [
      { text: "ЖЕНЩИНЫ", width: "w-[75px]" },
      { text: "МУЖЧИНЫ", width: "w-[75px]" },
    ],
    right: [{ text: "ИСКАТЬ" }, { text: "ВОЙТИ" }, { text: "ФАВОРИТЫ" }],
  };

  // Footer links data
  const footerLinks = [
    { text: "ПОМОЩЬ" },
    { text: "EWIMVA OUTLET" },
    { text: "МОИ ПОКУПКИ" },
    { text: "SITE MAP" },
    { text: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ" },
  ];

  // Social media links
  const socialLinks = [
    { text: "INSTAGRAM", width: "w-[78px]" },
    { text: "FACEBOOK", width: "w-[74px]" },
    { text: "TIKTOK", width: "w-12" },
    { text: "PINTEREST", width: "w-[73px]" },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:8"
    >
      <div className="bg-white overflow-hidden w-[1920px] h-[1200px] relative">
        <header className="w-full h-14 top-0 left-0 bg-white fixed z-10">
          <div className="relative w-full h-14 flex items-center justify-between px-8">
            {/* Left navigation */}
            <div className="flex space-x-10">
              {navLinks.left.map((link, index) => (
                <div
                  key={`left-${index}`}
                  className={`${link.width} text-[#131313] text-[12.7px] [font-family:'Inter',Helvetica] font-bold tracking-[0] leading-[18px] whitespace-nowrap`}
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
            <div className="flex space-x-10">
              {navLinks.right.map((link, index) => (
                <div
                  key={`right-${index}`}
                  className="text-[#131313] text-[12.7px] [font-family:'Inter',Helvetica] font-bold tracking-[0] leading-[18px] whitespace-nowrap"
                >
                  {link.text}
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Password recovery form */}
        <div className="absolute w-[354px] h-[202px] top-[234px] left-[809px]">
          <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap">
            ЗАБЫЛИ ПАРОЛЬ?
          </div>

          <div className="absolute top-[35px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#131313] text-xs tracking-[0] leading-[18px]">
            Введите свой e-mail, и мы отправим Вам ссылку
            <br />
            для восстановления пароля.
          </div>

          <div className="absolute w-[350px] top-[94px] left-0">
            <Input
              className="h-11 border border-solid border-[#b8b8b8] rounded-none px-[9px] py-[13px] text-[13px]"
              placeholder="E-mail"
            />
          </div>

          <Button className="absolute w-[350px] h-11 top-[158px] left-0 bg-[#131313] rounded-none hover:bg-[#2a2a2a]">
            <span className="text-white text-[13px] text-center [font-family:'Inter',Helvetica] font-bold tracking-[0] leading-[18px] whitespace-nowrap">
              Отправить
            </span>
          </Button>
        </div>

        {/* Footer */}
        <footer className="absolute w-[1920px] h-[392px] top-[808px] left-0 bg-white">
          {/* Country selection */}
          <div className="absolute w-[499px] h-[97px] top-[31px] left-[716px] flex flex-col items-center">
            <div className="h-[18px] text-black text-[12.7px] [font-family:'Inter',Helvetica] font-bold tracking-[0] leading-[18px] whitespace-nowrap">
              КЫРГЫЗСТАН
            </div>

            {/* Social media links */}
            <div className="flex justify-between w-full mt-[66px]">
              {socialLinks.map((link, index) => (
                <div
                  key={`social-${index}`}
                  className={`${link.width} [font-family:'Inter',Helvetica] font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap`}
                >
                  {link.text}
                </div>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="absolute w-[923px] h-[18px] top-[213px] left-[503px] flex justify-between">
            {footerLinks.map((link, index) => (
              <div
                key={`footer-${index}`}
                className="text-black text-[12.2px] [font-family:'Inter',Helvetica] font-bold tracking-[0] leading-[18px] whitespace-nowrap"
              >
                {link.text}
              </div>
            ))}
          </div>

          <Separator className="absolute w-full top-[280px] bg-gray-200" />

          {/* Copyright */}
          <div className="absolute w-[233px] h-[18px] top-[319px] left-[844px]">
            <div className="absolute h-[18px] top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-[#131313] text-[12.3px] tracking-[0] leading-[18px] whitespace-nowrap">
              © 2025 EWIMVA Все права защищены
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EwimvaRecovery;