import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import Header from '../../components/Header';
import Footer from "../../components/Footer";


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
        <Header />

        {/* Registration Form */}
        <Card className="absolute w-[364px] h-[312px] top-[234px] left-[760px] border-none shadow-none">
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
        <footer className="absolute w-[1920px] top-[750px]">
        <Footer />

        </footer>

      </div>
    </div>
  );
};

export default EwimvaRegistry;