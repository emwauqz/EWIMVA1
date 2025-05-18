import React, { useState } from "react";
  import { Button } from "../../components/ui/button";
  import { Card, CardContent } from "../../components/ui/card";
  import { Input } from "../../components/ui/input";
  import { useNavigate } from 'react-router-dom';
  import api from '../../lib/api';
  import { AxiosResponse } from 'axios';

  export const EwimvaRecovery = (): JSX.Element => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRecovery = async () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Введите корректный email");
        setSuccess("");
        return;
      }

      try {
        const response: AxiosResponse = await api.post('/auth/recovery', { email: email.toLowerCase() });
        setSuccess(response.data.message || "Письмо для сброса пароля отправлено на ваш email.");
        setError("");
        setEmail("");
      } catch (err: any) {
        console.error("Recovery failed:", err.response?.data);
        setError(err.response?.data?.message || "Ошибка при отправке запроса на сброс пароля");
        setSuccess("");
      }
    };

    return (
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white overflow-hidden w-[1920px] h-[1200px] relative">
          <div className="absolute top-[234px] w-full flex justify-center">
            <Card className="w-[364px] h-[300px] border-none shadow-none">
              <CardContent className="p-0">
                <div className="w-[200px] [font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap mb-11">
                  ВОССТАНОВЛЕНИЕ ПАРОЛЯ
                </div>
                {error && (
                  <div className="text-red-500 text-[12px] mb-4 text-center">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="text-green-500 text-[12px] mb-4 text-center">
                    {success}
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
                <Button
                  className="w-[350px] h-11 bg-[#131313] rounded-none hover:bg-[#333333] mb-6"
                  onClick={handleRecovery}
                >
                  <div className="w-[150px] font-bold text-white text-[12.3px] text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                    Отправить письмо
                  </div>
                </Button>
                <div className="w-full flex justify-center mt-6">
                  <div className="w-[185px] font-normal text-[#131313] text-xs text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-xs tracking-[0] leading-[18px]">
                      Вернуться к{" "}
                    </span>
                    <button
                      onClick={() => navigate('/login')}
                      className="font-bold underline cursor-pointer"
                    >
                      Входу
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

  export default EwimvaRecovery;