import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const DivWrapperByAnima = (): JSX.Element => {
  // Category navigation items
  const categoryItems = [
    { id: 1, label: "ПЛАТЬЯ И КОМБИНЕЗОНЫ" },
    { id: 2, label: "БРЮКИ" },
    { id: 3, label: "ДЖИНСЫ" },
    { id: 4, label: "КУРТКИ" },
    { id: 5, label: "БЛЕЙЗЕРЫ" },
    { id: 6, label: "РУБАШКИ И БЛУЗКИ" },
    { id: 7, label: "ТОПЫ" },
    { id: 8, label: "ДЖЕМПЕРЫ И КАРДИГАНЫ" },
    { id: 9, label: "ТРЕНЧИ И ПАРКИ" },
    { id: 10, label: "ЮБКИ" },
    { id: 11, label: "ЖИЛЕТЫ" },
    { id: 12, label: "ФУТБОЛКИ" },
    { id: 13, label: "ПАЛЬТО" },
    { id: 14, label: "ШОРТЫ" },
    { id: 15, label: "КУПАЛЬНИКИ" },
    { id: 16, label: "ПИЖАМЫ" },
    { id: 17, label: "КОЖА" },
    { id: 18, label: "ОБУВЬ" },
  ];

  // Footer links
  const footerLinks = [
    { id: 1, label: "ПОМОЩЬ" },
    { id: 2, label: "EWIMVA OUTLET" },
    { id: 3, label: "МОИ ПОКУПКИ" },
    { id: 4, label: "SITE MAP" },
    { id: 5, label: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ" },
  ];

  // Social media links
  const socialLinks = [
    { id: 1, label: "INSTAGRAM" },
    { id: 2, label: "FACEBOOK" },
    { id: 3, label: "TIKTOK" },
    { id: 4, label: "PINTEREST" },
  ];

  return (
    <section className="w-full bg-white py-8 px-8">
      <div className="max-w-[1809px] mx-auto">
        {/* Top category navigation */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="font-bold text-xs text-black underline [text-shadow:0px_0px_10px_#1313131a] [font-family:'Inter',Helvetica]">
              ЖЕНЩИНЫ
            </span>
          </div>

          <div className="flex flex-wrap gap-x-4">
            {categoryItems.map((item) => (
              <div
                key={item.id}
                className="font-bold text-black text-xs [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] cursor-pointer"
              >
                {item.label}
              </div>
            ))}
            <img
              className="w-6 h-6 ml-auto"
              alt="Image"
              src="/image--5--1.svg"
            />
          </div>
        </div>

        {/* Newsletter subscription section */}
        <div className="max-w-[1856px] mx-auto text-center mb-16">
          <div className="font-bold text-[#131313] text-[12.5px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] mb-8">
            ПОЛУЧАЙТЕ ИНФОРМАЦИЮ ОБ ЭКСКЛЮЗИВНЫХ АКЦИЯХ, ЗАКРЫТЫХ РАСПРОДАЖАХ И
            НОВИНКАХ
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <Input
              className="w-[295px] h-11 border border-solid border-[#b8b8b8] rounded-none px-2 py-3 text-[13px]"
              placeholder="E-mail"
            />
            <Button className="w-[125px] h-11 rounded-none bg-white text-[#131313] border border-solid border-[#131313] hover:bg-gray-100">
              <span className="font-bold text-[12.7px] [font-family:'Inter',Helvetica]">
                Подписаться
              </span>
            </Button>
          </div>

          <div className="text-center">
            <span className="font-normal text-[#131313] text-[11.9px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]">
              Подписываясь, Вы подтверждаете, что ознакомились с
            </span>
            <div className="font-bold text-[#131313] text-[12.7px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]">
              Политикой конфиденциальности
            </div>
          </div>
        </div>

        {/* Footer section */}
        <div className="pt-8">
          {/* Country and social media */}
          <div className="flex flex-col items-center mb-16">
            <div className="font-bold text-black text-[12.7px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] mb-16">
              КЫРГЫЗСТАН
            </div>

            <div className="flex gap-16">
              {socialLinks.map((link) => (
                <div
                  key={link.id}
                  className="font-normal text-[#131313] text-[13px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] cursor-pointer"
                >
                  {link.label}
                </div>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="flex justify-center gap-8 mb-16">
            {footerLinks.map((link) => (
              <div
                key={link.id}
                className={`${
                  link.label === "EWIMVA OUTLET" || link.label === "SITE MAP"
                    ? "font-semibold"
                    : "font-bold"
                } text-black text-[12.6px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] cursor-pointer`}
              >
                {link.label}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <div className="font-normal text-[#131313] text-[12.3px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]">
              © 2025 EWIMVA Все права защищены
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
