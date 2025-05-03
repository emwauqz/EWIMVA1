import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const ViewByAnima = (): JSX.Element => {
  // Categories data for the top navigation
  const categories = [
    { id: 1, name: "РУБАШКИ" },
    { id: 2, name: "ФУТБОЛКИ" },
    { id: 3, name: "ДЖИНСЫ" },
    { id: 4, name: "КУРТКИ" },
    { id: 5, name: "БЛЕЙЗЕРЫ" },
    { id: 6, name: "ТОЛЬСТОВКИ" },
    { id: 7, name: "КАРДИНГАНЫ И СВИТЕРЫ" },
    { id: 8, name: "ТРЕНЧИ" },
    { id: 9, name: "ШОРТЫ" },
    { id: 10, name: "ВЕРХНИЕ РУБАШКИ" },
    { id: 11, name: "РЮКЗАКИ И СУМКИ" },
    { id: 12, name: "ПАЛЬТО" },
    { id: 13, name: "РЕМНИ" },
    { id: 14, name: "КЕПКИ" },
    { id: 15, name: "ГАЛСТУКИ" },
    { id: 16, name: "КОСТЮМЫ" },
    { id: 17, name: "ОБУВЬ" },
  ];

  // Footer links data
  const footerLinks = [
    { id: 1, name: "ПОМОЩЬ", isBold: true },
    { id: 2, name: "EWIMVA OUTLET", isBold: false },
    { id: 3, name: "МОИ ПОКУПКИ", isBold: true },
    { id: 4, name: "SITE MAP", isBold: false },
    { id: 5, name: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ", isBold: true },
  ];

  // Social media links
  const socialLinks = [
    { id: 1, name: "INSTAGRAM" },
    { id: 2, name: "FACEBOOK" },
    { id: 3, name: "TIKTOK" },
    { id: 4, name: "PINTEREST" },
  ];

  return (
    <section className="w-full bg-white py-8">
      <div className="container mx-auto px-8">
        {/* Top categories navigation */}
        <div className="mb-16">
          <h2 className="mb-4 text-center text-xs font-bold leading-[68px] underline [text-shadow:0px_0px_10px_#1313131a]">
            МУЖЧИНЫ
          </h2>
          <div className="flex flex-wrap items-center">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="mr-6 font-bold text-black text-xs leading-[18px]"
              >
                {category.name}
              </div>
            ))}
            <ChevronRightIcon className="h-[13px] w-[7px]" />
          </div>
        </div>

        {/* Newsletter subscription section */}
        <div className="my-16 flex flex-col items-center justify-center">
          <p className="mb-8 text-center font-bold text-[#131313] text-[12.5px] leading-[18px]">
            ПОЛУЧАЙТЕ ИНФОРМАЦИЮ ОБ ЭКСКЛЮЗИВНЫХ АКЦИЯХ, ЗАКРЫТЫХ РАСПРОДАЖАХ И
            НОВИНКАХ
          </p>
          <div className="flex items-center justify-center mb-6">
            <Input
              className="h-11 w-[295px] border border-[#b8b8b8] rounded-none px-2 py-3 text-[13px]"
              placeholder="E-mail"
            />
            <Button
              className="h-11 w-[125px] rounded-none border border-solid border-[#131313] bg-white text-[#131313] font-bold text-[12.7px] hover:bg-gray-100"
              variant="outline"
            >
              Подписаться
            </Button>
          </div>
          <div className="flex items-center text-[#131313] text-[11.9px]">
            <span>Подписываясь, Вы подтверждаете, что ознакомились с</span>
            <span className="ml-1 font-bold text-[12.7px]">
              Политикой конфиденциальности
            </span>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Footer section */}
        <div className="mt-8">
          {/* Country and social media */}
          <div className="flex flex-col items-center mb-12">
            <h3 className="font-bold text-black text-[12.7px] mb-16">
              КЫРГЫЗСТАН
            </h3>
            <div className="flex justify-center space-x-12">
              {socialLinks.map((link) => (
                <span
                  key={link.id}
                  className="font-normal text-[#131313] text-[13px]"
                >
                  {link.name}
                </span>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="flex justify-center space-x-8 mb-12">
            {footerLinks.map((link) => (
              <span
                key={link.id}
                className={`text-black text-[12.6px] ${
                  link.isBold ? "font-bold" : "font-normal"
                }`}
              >
                {link.name}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center font-normal text-[#131313] text-[12.3px] mb-8">
            © 2025 EWIMVA Все права защищены
          </div>
        </div>
      </div>
    </section>
  );
};
