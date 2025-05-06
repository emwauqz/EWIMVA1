import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';

export const EwimvaRegistry = (): JSX.Element => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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

        {/* Registration Form - Centered */}
        <div className="absolute top-[234px] w-full flex justify-center">
          <Card className="w-[364px] h-[359px] border-none shadow-none">
            <CardContent className="p-0">
              <div className="w-[165px] [font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap mb-11">
                СОЗДАЙТЕ АККАУНТ
              </div>

              <div className="relative w-[350px] h-11 mb-6">
                <Input
                  className="absolute w-[350px] h-11 border border-solid border-[#b8b8b8] rounded-none"
                  placeholder="E-mail"
                />
              </div>

              <div className="relative w-[350px] h-11 mb-7">
                <Input
                  className="absolute w-[350px] h-11 border border-solid border-[#b8b8b8] rounded-none pr-10"
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute w-[30px] h-[11px] top-3 right-3 cursor-pointer"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
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
                <div className="w-[105px] font-bold text-white text-[12.3px] text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                  Создать аккаунт
                </div>
              </Button>

              <div className="w-full flex justify-center mt-6">
                <div className="w-[185px] font-normal text-[#131313] text-xs text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                  <span className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-xs tracking-[0] leading-[18px]">
                    У Вас уже есть аккаунт?{" "}
                  </span>
                  <button
                    onClick={() => navigate('/login')}
                    className="font-bold underline cursor-pointer"
                  >
                    Войти
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <footer className="absolute w-[1920px] top-[750px]">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default EwimvaRegistry;