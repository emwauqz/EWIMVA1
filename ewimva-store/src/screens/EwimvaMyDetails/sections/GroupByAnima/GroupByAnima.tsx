import React from "react";
import { Button } from "../../../../components/ui/button";

export const GroupByAnima = (): JSX.Element => {
  // User profile data
  const profileData = [
    { label: "ИМЯ", value: "Elmira", hasViewButton: true },
    { label: "E-MAIL", value: "etookebaeva@gmail.com", hasViewButton: true },
    {
      label: "МОБ. ТЕЛЕФОН",
      value: "+996 (555) 55-55-55",
      hasViewButton: true,
    },
    { label: "ПАРОЛЬ", value: "••••••••••", hasViewButton: true },
    { label: "ДАТА РОЖДЕНИЯ", value: "2000-01-01", hasViewButton: true },
    { label: "ПОЛ", value: "женский", hasViewButton: true },
  ];

  return (
    <div className="w-full max-w-[438px] space-y-6">
      {profileData.map((item, index) => (
        <div key={index} className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="font-bold text-[#131313] text-[15.8px] leading-5 font-['Inter',Helvetica]">
              {item.label}
            </div>
            <div className="font-normal text-[#131313] text-[15.8px] leading-5 font-['Inter',Helvetica]">
              {item.value}
            </div>
          </div>
          {item.hasViewButton && (
            <Button
              variant="link"
              className="p-0 h-5 font-bold underline text-[#131313] text-[15.8px] leading-5 font-['Inter',Helvetica]"
            >
              Посмотреть
            </Button>
          )}
        </div>
      ))}

      <Button
        variant="link"
        className="p-0 h-5 font-bold underline text-[#131313] text-[15.8px] leading-5 font-['Inter',Helvetica]"
      >
        УДАЛИТЬ АККАУНТ
      </Button>
    </div>
  );
};
