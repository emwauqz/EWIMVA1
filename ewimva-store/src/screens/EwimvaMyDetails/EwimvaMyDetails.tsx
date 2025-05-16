import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export const EwimvaMyDetails = (): JSX.Element => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    birthDate: "",
    gender: ""
  });
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserData({
        name: parsedUser.name || "User",
        email: parsedUser.email || "",
        phone: parsedUser.phone || "",
        password: parsedUser.password || "",
        birthDate: parsedUser.birthDate || "",
        gender: parsedUser.gender || ""
      });
      // Для совместимости с текущим кодом обновляем userName в localStorage
      localStorage.setItem('userName', parsedUser.name || "User");
    }
  }, []);

  const profileData = [
    { label: "ИМЯ", value: userData.name, hasViewButton: true },
    { label: "E-MAIL", value: userData.email, hasViewButton: true },
    { label: "МОБ. ТЕЛЕФОН", value: userData.phone, hasViewButton: true },
    { label: "ПАРОЛЬ", value: userData.password.replace(/./g, "•"), hasViewButton: true },
    { label: "ДАТА РОЖДЕНИЯ", value: userData.birthDate, hasViewButton: true },
    { label: "ПОЛ", value: userData.gender, hasViewButton: true },
  ];

  const handleEdit = (label: string, value: string) => {
    setIsEditing(label);
    setEditValue(value === userData.password.replace(/./g, "•") ? userData.password : value);
  };

  const handleSave = (label: string) => {
    const updatedUserData = { ...userData };
    switch (label) {
      case "ИМЯ":
        updatedUserData.name = editValue;
        localStorage.setItem('userName', editValue); // Обновляем userName
        break;
      case "E-MAIL":
        updatedUserData.email = editValue;
        break;
      case "МОБ. ТЕЛЕФОН":
        updatedUserData.phone = editValue;
        break;
      case "ПАРОЛЬ":
        updatedUserData.password = editValue;
        break;
      case "ДАТА РОЖДЕНИЯ":
        updatedUserData.birthDate = editValue;
        break;
      case "ПОЛ":
        updatedUserData.gender = editValue;
        break;
    }
    setUserData(updatedUserData);
    localStorage.setItem('user', JSON.stringify(updatedUserData));
    setIsEditing(null);
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
          <h1 className="mt-[109px] [font-family:'Meow_Script',Helvetica] font-normal text-black text-5xl text-center tracking-[0] leading-normal px-4 sm:px-0">
            {userData.name}
          </h1>

          <div className="w-full flex justify-center mt-10">
            <div className="w-full max-w-[438px] space-y-6 px-4 sm:px-6 md:px-0">
              {profileData.map((item, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="font-bold text-[#131313] text-[15.8px] leading-5 font-['Inter',Helvetica]">
                      {item.label}
                    </div>
                    <div className="font-normal text-[#131313] text-[15.8px] leading-5 font-['Inter',Helvetica]">
                      {item.value || "Не указано"}
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
                {isEditing === "ПОЛ" ? (
                  <select
                    className="w-full mb-4 border border-[#b8b8b8] rounded-none h-11 text-[#131313] text-[14px] [font-family:'Inter',Helvetica] bg-white"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  >
                    <option value="женский">Женский</option>
                    <option value="мужской">Мужской</option>
                  </select>
                ) : isEditing === "ДАТА РОЖДЕНИЯ" ? (
                  <Input
                    type="date"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="w-full mb-4 border border-[#b8b8b8] rounded-none"
                  />
                ) : (
                  <Input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="w-full mb-4 border border-[#b8b8b8] rounded-none"
                    type={isEditing === "ПАРОЛЬ" ? "password" : "text"}
                  />
                )}
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