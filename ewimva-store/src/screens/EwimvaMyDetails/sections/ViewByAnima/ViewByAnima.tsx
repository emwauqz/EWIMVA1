import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const ViewByAnima = (): JSX.Element => {
  const footerLinks = [
    { text: "ПОМОЩЬ", isBold: true },
    { text: "EWIMVA OUTLET", isSemiBold: true },
    { text: "МОИ ПОКУПКИ", isBold: true },
    { text: "SITE MAP", isSemiBold: true },
    { text: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ", isBold: true },
  ];

  const socialLinks = [
    { text: "INSTAGRAM" },
    { text: "FACEBOOK" },
    { text: "TIKTOK" },
    { text: "PINTEREST" },
  ];

  return (
    <footer className="w-full bg-white py-6">
      {/* Newsletter Subscription Section */}
      <div className="w-full max-w-[1862px] mx-auto mb-16">
        <Card className="border-none shadow-none">
          <CardContent className="flex flex-col items-center justify-center p-0">
            <p className="font-bold text-[12.5px] text-center text-[#131313] mb-8">
              ПОЛУЧАЙТЕ ИНФОРМАЦИЮ ОБ ЭКСКЛЮЗИВНЫХ АКЦИЯХ, ЗАКРЫТЫХ РАСПРОДАЖАХ
              И НОВИНКАХ
            </p>

            <div className="flex items-center justify-center gap-2">
              <Input
                className="w-[295px] h-11 border border-solid border-[#b8b8b8] rounded-none px-2 py-0"
                placeholder="E-mail"
              />
              <Button className="w-[125px] h-11 bg-white text-[#131313] border border-solid border-[#131313] rounded-none hover:bg-gray-100">
                <span className="font-bold text-[12.7px]">Подписаться</span>
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-[11.9px] text-[#131313]">
                Подписываясь, Вы подтверждаете, что ознакомились с
              </p>
              <p className="font-bold text-[12.7px] text-[#131313]">
                Политикой конфиденциальности
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Navigation Section */}
      <div className="w-full bg-white">
        <div className="max-w-[1862px] mx-auto">
          {/* Country and Social Media */}
          <div className="flex flex-col items-center mb-16">
            <p className="font-bold text-[12.7px] text-black mb-16">
              КЫРГЫЗСТАН
            </p>

            <div className="flex justify-center gap-16">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-normal text-[13px] text-[#131313]"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex justify-center gap-8 mb-16">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className={`text-black text-[12.8px] ${
                  link.isBold
                    ? "font-bold"
                    : link.isSemiBold
                      ? "font-semibold"
                      : "font-normal"
                }`}
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center mb-8">
            <p className="font-normal text-[12.3px] text-[#131313]">
              © 2025 EWIMVA Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
