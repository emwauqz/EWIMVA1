import React from "react";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';

export const EwimvaPokypka = (): JSX.Element => {
  const navigate = useNavigate();

  // Navigation links data
  const navLinks = [
    { text: "ЖЕНЩИНЫ", active: true },
    { text: "МУЖЧИНЫ", active: false },
  ];

  // Header utility links
  const utilityLinks = [
    { text: "ИСКАТЬ" },
    { text: "МОЙ АККАУНТ" },
    { text: "ФАВОРИТЫ" },
  ];

  // Footer links
  const footerMainLinks = [
    { text: "ПОМОЩЬ" },
    { text: "EWIMVA OUTLET" },
    { text: "МОИ ПОКУПКИ" },
    { text: "SITE MAP" },
    { text: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ" },
  ];

  // Social media links
  const socialLinks = [
    { text: "INSTAGRAM" },
    { text: "FACEBOOK" },
    { text: "TIKTOK" },
    { text: "PINTEREST" },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:8"
    >
      <div className="bg-white overflow-hidden w-[1920px] h-[1200px] relative">
        {/* Header */}
        <Header />

        {/* Centered Content */}
        <div className="absolute top-[294px] w-full flex justify-center">
          <div className="text-center">
            <div className="[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap">
              У ВАС ПОКА НЕТ ПОКУПОК
            </div>

            <div className="w-[336px] mt-5 [font-family:'Inter',Helvetica] font-normal text-[#131313] text-xs tracking-[0] leading-[18px]">
              Вдохновляйтесь нашими коллекциями и приобретайте новинки для своего
              гардероба
            </div>

            <Button
              className="w-[350px] h-11 mt-6 bg-[#131313] rounded-none hover:bg-[#333333]"
              onClick={() => navigate('/new')}
            >
              <span className="text-white text-[13px] text-center [font-family:'Inter',Helvetica] font-bold tracking-[0] leading-[18px] whitespace-nowrap">
                ПОСМОТРЕТЬ НОВИНКИ
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};