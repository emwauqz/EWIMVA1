import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { useNavigate } from 'react-router-dom';

export const EwimvaRegistry = (): JSX.Element => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (pwd: string) => {
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>_]/.test(pwd);
    const isLongEnough = pwd.length >= 8;
    console.log("Password validation:", { hasUpperCase, hasNumber, hasSpecialChar, isLongEnough });
    return hasUpperCase && hasNumber && hasSpecialChar && isLongEnough;
  };

  const handleRegister = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Введите корректный email");
      return;
    }

    if (!validatePassword(password)) {
      setError("Пароль должен быть минимум 8 символов, содержать заглавную букву, цифру и спецсимвол");
      return;
    }

    const user = { email: email.toLowerCase(), password };
    localStorage.setItem('user', JSON.stringify(user));
    console.log("Registered user:", user);
    localStorage.setItem('token', 'your_token');
    navigate('/account');
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1920px] h-[1200px] relative">
        <div className="absolute top-[234px] w-full flex justify-center">
          <Card className="w-[364px] h-[359px] border-none shadow-none">
            <CardContent className="p-0">
              <div className="w-[165px] [font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap mb-11">
                СОЗДАЙТЕ АККАУНТ
              </div>
              {error && (
                <div className="text-red-500 text-[12px] mb-4 text-center">
                  {error}
                </div>
              )}
              <div className="relative w-[350px] h-11 mb-6">
                <Input
                  className="absolute w-[350px] h-11 border border-solid border-[#b8b8b8] rounded-none"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                />
              </div>
              <div className="relative w-[350px] h-11 mb-7">
                <Input
                  className="absolute w-[350px] h-11 border border-solid border-[#b8b8b8] rounded-none pr-10"
                  type={showPassword ? "text" : "password"}
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value.trim())}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute w-[18px] h-[11px] top-4 right-3 cursor-pointer"
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
              <Button
                className="w-[350px] h-11 bg-[#131313] rounded-none hover:bg-[#333333] mb-6"
                onClick={handleRegister}
              >
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
      </div>
    </div>
  );
};

export default EwimvaRegistry;