import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import Header from '../../components/Header';
import Footer from "../../components/Footer";


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
      <Header />

        {/* Password recovery form */}
        <div className="absolute w-[354px] h-[202px] top-[234px] left-[760px]">
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
        {/* <footer className="absolute w-[1920px] h-[392px] top-[808px] left-0 bg-white"> */}
        <footer className="absolute w-[1920px] top-[600px]">
        <Footer />

        </footer>
      </div>
    </div>
  );
};

export default EwimvaRecovery;