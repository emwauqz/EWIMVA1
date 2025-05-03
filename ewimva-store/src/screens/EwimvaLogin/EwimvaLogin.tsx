import { EyeIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";

export const EwimvaLogin = (): JSX.Element => {
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
    "ПОМОЩЬ",
    "EWIMVA OUTLET",
    "МОИ ПОКУПКИ",
    "SITE MAP",
    "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
  ];

  // Social media links
  const socialLinks = ["INSTAGRAM", "FACEBOOK", "TIKTOK", "PINTEREST"];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:8"
    >
      <div className="bg-white overflow-hidden w-[1920px] h-[1200px] relative">
        <header className="w-full h-14 top-0 left-0 bg-white fixed z-10">
          <div className="relative w-full h-14 max-w-[1920px] mx-auto flex items-center justify-between px-8">
            {/* Left navigation */}
            <div className="flex space-x-10">
              {navLinks.left.map((link, index) => (
                <div
                  key={index}
                  className={`${link.width} font-bold text-[#131313] text-[12.7px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap cursor-pointer`}
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
            <div className="flex space-x-8">
              {navLinks.right.map((link, index) => (
                <div
                  key={index}
                  className="font-bold text-[#131313] text-[12.7px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap cursor-pointer"
                >
                  {link.text}
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Login Form */}
        <Card className="absolute w-[364px] h-[359px] top-[234px] left-[809px] border-none shadow-none">
          <CardContent className="p-0">
            <div className="w-[57px] [font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap mb-11">
              ВОЙТИ
            </div>

            <div className="relative w-[350px] h-11 mb-6">
              <Input
                className="absolute w-[350px] h-11 border border-solid border-[#b8b8b8] rounded-none"
                placeholder="E-mail"
              />
            </div>

            <div className="relative w-[350px] h-11 mb-7">
              <Input
                className="absolute w-[350px] h-11 border border-solid border-[#b8b8b8] rounded-none"
                type="password"
                placeholder="Пароль"
              />
              <EyeIcon className="absolute w-[18px] h-[11px] top-4 right-3 cursor-pointer" />
            </div>

            <div className="flex items-center mb-7">
              <Checkbox
                id="remember"
                className="w-4 h-4 rounded-none border-[#131313]"
              />
              <label
                htmlFor="remember"
                className="ml-3 font-normal text-[#131313] text-[12.1px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap"
              >
                Запомнить меня
              </label>
            </div>

            <Button className="w-[350px] h-11 bg-[#131313] rounded-none hover:bg-[#333333] mb-6">
              <span className="font-bold text-white text-[13px] text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                Войти
              </span>
            </Button>

            <Button
              variant="outline"
              className="w-[350px] h-11 border border-solid border-[#131313] rounded-none mb-6"
            >
              <span className="font-bold text-[#131313] text-[12.3px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                Создать аккаунт
              </span>
            </Button>

            <div className="w-full text-center">
              <a
                href="#"
                className="[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[12.8px] text-center tracking-[0] leading-[18px] underline whitespace-nowrap"
              >
                Забыли пароль?
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="absolute w-[1920px] h-[392px] top-[808px] left-0 bg-white">
          <div className="relative max-w-[1200px] mx-auto pt-8">
            {/* Country and Social Media */}
            <div className="flex flex-col items-center mb-16">
              <div className="font-bold text-black text-[12.7px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap mb-16">
                КЫРГЫЗСТАН
              </div>

              <div className="flex justify-center space-x-12">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[13px] tracking-[0] leading-[18px] whitespace-nowrap"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex justify-center space-x-12 mb-16">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${index === 0 || index === 2 || index === 4 ? "font-bold" : "font-semibold"} text-black text-[12.8px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap`}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center [font-family:'Inter',Helvetica] font-normal text-[#131313] text-[12.3px] tracking-[0] leading-[18px] whitespace-nowrap">
              © 2025 EWIMVA Все права защищены
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EwimvaLogin;