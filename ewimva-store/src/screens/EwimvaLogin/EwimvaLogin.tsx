import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { useNavigate } from 'react-router-dom';

export const EwimvaLogin = (): JSX.Element => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/account');
    }
  }, [navigate]);

  const handleLogin = () => {
    console.log("Login attempt:", { email, password });

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(storedUser);
      if (email.toLowerCase() === storedEmail && password === storedPassword) {
        console.log("Login successful");
        localStorage.setItem('token', 'your_token');
        // Устанавливаем userRole в зависимости от пользователя
        localStorage.setItem('userRole', email.toLowerCase() === "test@example.com" ? "admin" : "user");
        navigate('/account');
        return;
      }
    }

    if (email.toLowerCase() === "ewimva@example.com" && password === "Tokebellach_1") {
      console.log("Login successful with default credentials");
      localStorage.setItem('token', 'your_token');
      localStorage.setItem('userRole', "admin"); // Устанавливаем userRole как admin для тестового пользователя
      navigate('/account');
    } else {
      console.log("Login failed");
      setError("Неправильный email или пароль");
    }
  };

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:8"
    >
      <div className="bg-white overflow-hidden w-[1920px] h-[1300px] relative">
        <div className="absolute top-[234px] w-full flex justify-center">
          <Card className="w-[364px] h-[359px] border-none shadow-none">
            <CardContent className="p-0">
              <div className="w-[57px] [font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap mb-11">
                ВОЙТИ
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
              <Button
                className="w-[350px] h-11 bg-[#131313] rounded-none hover:bg-[#333333] mb-6"
                onClick={handleLogin}
              >
                <span className="font-bold text-white text-[13px] text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                  Войти
                </span>
              </Button>
              <Button
                variant="outline"
                className="w-[350px] h-11 border border-solid border-[#131313] rounded-none mb-6"
                onClick={() => navigate('/register')}
              >
                <span className="font-bold text-[#131313] text-[12.3px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                  Создать аккаунт
                </span>
              </Button>
              <div className="w-full text-center">
                <button
                  onClick={() => navigate('/recovery')}
                  className="[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[12.8px] text-center tracking-[0] leading-[18px] underline whitespace-nowrap"
                >
                  Забыли пароль?
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EwimvaLogin;