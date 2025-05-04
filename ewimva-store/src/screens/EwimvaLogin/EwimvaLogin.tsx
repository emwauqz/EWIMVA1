import { EyeIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import Header from '../../components/Header';
import Footer from "../../components/Footer";


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
      <div className="bg-white overflow-hidden w-[1920px] h-[1300px] relative">
      <Header />

        {/* Login Form */}
        <Card className="absolute w-[364px] h-[359px] top-[234px] left-[755px] border-none shadow-none">
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
        <footer className="absolute w-[1920px] top-[770px]">
        <Footer />
        
        </footer>
      </div>
    </div>
  );
};

export default EwimvaLogin;