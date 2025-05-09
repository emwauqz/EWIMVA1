import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export const EwimvaMyDetails = (): JSX.Element => {
  const [userName, setUserName] = useState<string>("");
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  useEffect(() => {
    const savedName = localStorage.getItem('userName') || 'User';
    setUserName(savedName);
  }, []);

  const profileData = [
    { label: "ИМЯ", value: userName, hasViewButton: true },
    { label: "E-MAIL", value: "etookebaeva@gmail.com", hasViewButton: true },
    { label: "МОБ. ТЕЛЕФОН", value: "+996 (555) 55-55-55", hasViewButton: true },
    { label: "ПАРОЛЬ", value: "••••••••••", hasViewButton: true },
    { label: "ДАТА РОЖДЕНИЯ", value: "2000-01-01", hasViewButton: true },
    { label: "ПОЛ", value: "женский", hasViewButton: true },
  ];

  const handleEdit = (label: string, value: string) => {
    setIsEditing(label);
    setEditValue(value);
  };

  const handleSave = (label: string) => {
    if (label === "ИМЯ") {
      localStorage.setItem('userName', editValue);
      setUserName(editValue);
    }
    setIsEditing(null);
    // Здесь можно добавить сохранение других данных (email, телефон и т.д.) в будущем
  };

  const handleCancel = () => {
    setIsEditing(null);
  };

  return (
    <div
      className="bg-white flex flex-col items-center w-full min-h-screen"
      data-model-id="1:8"
    >
      <div className="bg-white w-full max-w-[1920px] flex flex-col">
        <main className="flex flex-col items-center relative">
          <h1 className="mt-[109px] [font-family:'Meow_Script',Helvetica] font-normal text-black text-5xl text-center tracking-[0] leading-normal">
            {userName}
          </h1>

          <div className="w-full flex justify-center mt-10">
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
                      onClick={() => handleEdit(item.label, item.value)}
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

            {isEditing && (
              <div className="fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg p-6 z-10">
                <h2 className="font-bold text-[#131313] text-[15.8px] leading-5 font-['Inter',Helvetica'] mb-4">
                  Редактировать {isEditing}
                </h2>
                <Input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="w-full mb-4 border border-[#b8b8b8] rounded-none"
                />
                <div className="flex space-x-4">
                  <Button
                    className="bg-[#131313] text-white rounded-none hover:bg-[#333333]"
                    onClick={() => handleSave(isEditing)}
                  >
                    Сохранить
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#b8b8b8] rounded-none"
                    onClick={handleCancel}
                  >
                    Отмена
                  </Button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EwimvaMyDetails;