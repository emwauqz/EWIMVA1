import { ChevronRightIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useNavigate } from 'react-router-dom';

export const EwimvaMyAccount = (): JSX.Element => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const savedName = localStorage.getItem('userName') || 'User';
    setUserName(savedName);
  }, []);

  const menuItems = [
    { id: 1, title: "ПОМОЩЬ", path: "/help" },
    { id: 2, title: "МОИ ПОКУПКИ", path: "/purchases" },
    { id: 3, title: "МОИ ДАННЫЕ", path: "/details" },
    { id: 5, title: "МОЙ АДРЕС", path: "/#" },
    { id: 6, title: "МОИ ИЗБРАННЫЕ", path: "/favourites" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div
      className="bg-white flex flex-row justify-center w-full min-h-screen"
      data-model-id="1:8"
    >
      <div className="bg-white w-full max-w-[1920px] flex flex-col items-center relative">
        <main className="flex flex-col items-center mt-[109px] pb-8">
          <h1 className="[font-family:'Meow_Script',Helvetica] font-normal text-black text-5xl text-justify tracking-[0] leading-[normal]">
            {userName}
          </h1>
          <Card className="w-[319px] mt-10 border-none">
            <CardContent className="p-0 space-y-[60px]">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                  onClick={() => item.path && navigate(item.path)}
                  style={{ cursor: item.path ? "pointer" : "default" }}
                >
                  <div className="[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap">
                    {item.title}
                  </div>
                  {item.path && <ChevronRightIcon className="w-[18px] h-[15px]" />}
                </div>
              ))}
              <Button
                variant="link"
                className="p-0 h-auto [font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap"
                onClick={handleLogout}
              >
                ВЫХОД
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default EwimvaMyAccount;