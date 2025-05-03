import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const ViewByAnima = (): JSX.Element => {
  // Categories data for the top navigation
  const categories = [
    { id: 1, name: "ПЛАТЬЯ И КОМБИНЕЗОНЫ" },
    { id: 2, name: "БРЮКИ" },
    { id: 3, name: "ДЖИНСЫ" },
    { id: 4, name: "КУРТКИ" },
    { id: 5, name: "БЛЕЙЗЕРЫ" },
    { id: 6, name: "РУБАШКИ И БЛУЗКИ" },
    { id: 7, name: "ТОПЫ" },
    { id: 8, name: "ДЖЕМПЕРЫ И КАРДИГАНЫ" },
    { id: 9, name: "ТРЕНЧИ И ПАРКИ" },
    { id: 10, name: "ЮБКИ" },
    { id: 11, name: "ЖИЛЕТЫ" },
    { id: 12, name: "ФУТБОЛКИ" },
    { id: 13, name: "ПАЛЬТО" },
    { id: 14, name: "ШОРТЫ" },
    { id: 15, name: "КУПАЛЬНИКИ" },
    { id: 16, name: "ПИЖАМЫ" },
    { id: 17, name: "КОЖА" },
    { id: 18, name: "ОБУВЬ" },
  ];

  // Help section links
  const helpLinks = [
    { id: 1, name: "ПОМОЩЬ", position: "left-0 top-0" },
    { id: 2, name: "МОИ ПОКУПКИ", position: "left-0 top-10" },
    {
      id: 3,
      name: "EWIMVA OUTLET",
      position: "left-[164px] top-0",
      semibold: true,
    },
    {
      id: 4,
      name: "SITE MAP",
      position: "left-[164px] top-10",
      semibold: true,
    },
  ];

  // Social media links
  const socialLinks = [
    { id: 1, name: "INSTAGRAM", position: "left-0" },
    { id: 2, name: "FACEBOOK", position: "left-[150px]" },
    { id: 3, name: "TIKTOK", position: "left-[296px]" },
    { id: 4, name: "PINTEREST", position: "left-[416px]" },
  ];

  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-8">
        {/* Top categories navigation */}
        <div className="mb-16">
          <h2 className="text-xs font-bold text-center underline mb-12 [text-shadow:0px_0px_10px_#1313131a] [font-family:'Inter',Helvetica] leading-[68px]">
            ЖЕНЩИНЫ
          </h2>

          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className="font-bold text-black text-xs [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap hover:opacity-70 transition-opacity"
              >
                {category.name}
              </button>
            ))}
            <ChevronRightIcon className="w-6 h-6 ml-2" />
          </div>
        </div>

        {/* Newsletter subscription */}
        <div className="flex flex-col items-center justify-center mb-16">
          <p className="font-bold text-[#131313] text-[12.5px] text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] mb-8">
            ПОЛУЧАЙТЕ ИНФОРМАЦИЮ ОБ ЭКСКЛЮЗИВНЫХ АКЦИЯХ, ЗАКРЫТЫХ РАСПРОДАЖАХ И
            НОВИНКАХ
          </p>

          <div className="flex items-center gap-2 mb-4">
            <Input
              placeholder="E-mail"
              className="w-[295px] h-11 border border-solid border-[#b8b8b8] rounded-none text-[13px] [font-family:'Inter',Helvetica]"
            />
            <Button className="w-[125px] h-11 rounded-none border border-solid border-[#131313] bg-white text-[#131313] hover:bg-[#131313] hover:text-white transition-colors">
              <span className="font-bold text-[12.7px] [font-family:'Inter',Helvetica]">
                Подписаться
              </span>
            </Button>
          </div>

          <div className="flex items-center text-[#131313] text-[11.9px] [font-family:'Inter',Helvetica]">
            <span className="font-normal">
              Подписываясь, Вы подтверждаете, что ознакомились с
            </span>
            <button className="font-bold text-[12.7px] ml-1">
              Политикой конфиденциальности
            </button>
          </div>
        </div>

        {/* Social media and location */}
        <div className="flex flex-col items-center mb-16">
          <p className="font-bold text-black text-[12.7px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] mb-4">
            КЫРГЫЗСТАН
          </p>

          <div className="flex items-center gap-8">
            {socialLinks.map((link) => (
              <button
                key={link.id}
                className={`relative font-normal text-[#131313] text-[13px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap ${link.position} hover:underline`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Help section */}
        <div className="mb-16">
          <div className="relative w-[280px] h-[58px]">
            {helpLinks.map((link) => (
              <button
                key={link.id}
                className={`absolute ${link.position} ${link.semibold ? "font-semibold" : "font-bold"} text-black text-[12.6px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap hover:underline`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center">
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-[12.3px] tracking-[0] leading-[18px]">
            © 2025 EWIMVA Все права защищены
          </p>
        </div>
      </div>
    </section>
  );
};
