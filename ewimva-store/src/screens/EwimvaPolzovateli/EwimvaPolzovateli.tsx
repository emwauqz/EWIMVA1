import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import Header from '../../components/Header';

export const EwimvaPolzovateli = (): JSX.Element => {
  // User data for the table
  const users = [
    {
      id: 1,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "active",
      lastActivity: "26.04.2025",
    },
    {
      id: 2,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "active",
      lastActivity: "20.04.2025",
    },
    {
      id: 3,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "inactive",
      lastActivity: "19.04.2025",
    },
    {
      id: 4,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Администратор",
      status: "active",
      lastActivity: "18.04.2025",
    },
    {
      id: 5,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "active",
      lastActivity: "26.04.2025",
    },
    {
      id: 6,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "active",
      lastActivity: "20.04.2025",
    },
    {
      id: 7,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "active",
      lastActivity: "19.04.2025",
    },
    {
      id: 8,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "active",
      lastActivity: "18.04.2025",
    },
    {
      id: 9,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "active",
      lastActivity: "26.04.2025",
    },
    {
      id: 10,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "active",
      lastActivity: "20.04.2025",
    },
    {
      id: 11,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "active",
      lastActivity: "19.04.2025",
    },
    {
      id: 12,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "active",
      lastActivity: "18.04.2025",
    },
    {
      id: 13,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "active",
      lastActivity: "26.04.2025",
    },
    {
      id: 14,
      name: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      role: "Клиент",
      status: "inactive",
      lastActivity: "20.04.2025",
    },
  ];

  // Navigation menu items
  const navItems = [
    { name: "ДАШБОРД", icon: "/vector-13.svg", iconAlt: "Dashboard icon" },
    { name: "ТОВАРЫ", icon: "/vector-3.svg", iconAlt: "Products icon" },
    { name: "ЗАКАЗЫ", icon: "/vector.svg", iconAlt: "Orders icon" },
    {
      name: "ПОЛЬЗОВАТЕЛИ",
      icon: "/vector-10.svg",
      iconAlt: "Users icon",
      active: true,
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1920px] min-h-screen relative">
        {/* Header */}
        <Header />

        {/* Sidebar */}
        <aside className="w-[254px] h-[calc(100vh-56px)] bg-white border-r border-solid border-[#00000040] fixed top-14 left-0">
          <nav className="flex flex-col items-center pt-[500px]">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center mb-[30px] w-full pl-10"
              >
                <img
                  className="w-[18px] h-[18px] mr-[15px]"
                  alt={item.iconAlt}
                  src={item.icon}
                />
                <div
                  className={`font-['Inter',Helvetica] font-bold text-[#131313] text-[12.7px] leading-[18px] ${item.active ? "underline" : ""}`}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="ml-[254px] p-8">
          <h1 className="font-['Inter',Helvetica] font-semibold text-[#131313] text-[40px] leading-[18px] mb-16">
            Пользователи
          </h1>

          {/* Filters and actions */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-6">
              <div className="font-['Inter',Helvetica] font-light text-black text-[13px] tracking-[0.80px] leading-5">
                SEARCH
              </div>
              <div className="font-['Inter',Helvetica] font-bold text-[#131313] text-[12.7px] leading-[18px]">
                РОЛИ
              </div>
              <img
                className="w-2 h-[5px]"
                alt="Dropdown icon"
                src="/vector-12.svg"
              />
            </div>
            <Button className="bg-black text-white rounded-full h-[30px] px-6">
              <span className="font-semibold text-sm">
                + Добавить пользователя
              </span>
            </Button>
          </div>

          {/* Users table */}
          <Card className="border border-solid border-[#00000040] rounded-[10px]">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-solid border-[#00000040]">
                    <TableHead className="w-20 py-[30px]"></TableHead>
                    <TableHead className="py-[30px]">
                      <span className="font-['Inter',Helvetica] font-normal text-[#131313] text-sm">
                        Пользователь
                      </span>
                    </TableHead>
                    <TableHead className="py-[30px]">
                      <span className="font-['Inter',Helvetica] font-normal text-[#131313] text-sm">
                        Роль
                      </span>
                    </TableHead>
                    <TableHead className="py-[30px]">
                      <span className="font-['Inter',Helvetica] font-normal text-[#131313] text-sm">
                        Ствтус
                      </span>
                    </TableHead>
                    <TableHead className="py-[30px]">
                      <span className="font-['Inter',Helvetica] font-normal text-[#131313] text-sm">
                        Последняя активность
                      </span>
                    </TableHead>
                    <TableHead className="w-20 py-[30px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user, index) => (
                    <TableRow
                      key={user.id}
                      className="border-b border-solid border-[#00000040]"
                    >
                      <TableCell className="py-4">
                        <Checkbox className="rounded-[5px] border border-solid border-[#00000040]" />
                      </TableCell>
                      <TableCell className="py-4">
                        <div className="font-['Inter',Helvetica] font-semibold text-[#131313] text-sm">
                          {user.name}
                        </div>
                        <div className="font-['Inter',Helvetica] font-normal text-[#131313] text-xs">
                          {user.email}
                        </div>
                      </TableCell>
                      <TableCell className="py-4">
                        <div className="font-['Inter',Helvetica] font-semibold text-[#131313] text-sm">
                          {user.role}
                        </div>
                      </TableCell>
                      <TableCell className="py-4">
                        <Badge
                          className={`rounded-full px-4 py-1 font-semibold ${
                            user.status === "active"
                              ? "bg-emerald-500 text-white"
                              : "bg-[#444444] text-white"
                          }`}
                        >
                          {user.status === "active" ? "Активен" : "Неактивен"}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-4">
                        <div className="font-['Inter',Helvetica] font-semibold text-[#131313] text-sm">
                          {user.lastActivity}
                        </div>
                      </TableCell>
                      <TableCell className="py-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="font-semibold text-[#131313] text-sm">
                                •••
                              </span>
                            </Button>
                          </DropdownMenuTrigger>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default EwimvaPolzovateli;