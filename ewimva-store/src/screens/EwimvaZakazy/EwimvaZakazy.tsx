import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
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

export const EwimvaZakazy = (): JSX.Element => {
  // Order status data with corresponding colors
  const statusTypes = {
    processing: { label: "Обработка", color: "bg-amber-500" },
    sent: { label: "Отправлен", color: "bg-[#2f88ff]" },
    completed: { label: "Выполнен", color: "bg-emerald-500" },
    cancelled: { label: "Отменён", color: "bg-[#ae1414]" },
  };

  // Order data
  const orders = [
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "26.04.2025",
      status: "processing",
      items: 4,
      amount: "24 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "20.04.2025",
      status: "processing",
      items: 2,
      amount: "8 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "19.04.2025",
      status: "sent",
      items: 3,
      amount: "14 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "18.04.2025",
      status: "completed",
      items: 4,
      amount: "20 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "26.04.2025",
      status: "processing",
      items: 4,
      amount: "24 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "20.04.2025",
      status: "processing",
      items: 2,
      amount: "8 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "19.04.2025",
      status: "sent",
      items: 3,
      amount: "14 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "18.04.2025",
      status: "completed",
      items: 4,
      amount: "20 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "26.04.2025",
      status: "cancelled",
      items: 4,
      amount: "24 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "20.04.2025",
      status: "processing",
      items: 2,
      amount: "8 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "19.04.2025",
      status: "sent",
      items: 3,
      amount: "14 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "18.04.2025",
      status: "completed",
      items: 4,
      amount: "20 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "26.04.2025",
      status: "processing",
      items: 4,
      amount: "24 450 с",
    },
    {
      id: "CRD-7650",
      customer: "Михаил Иванов",
      email: "mihailivanov@gmail.com",
      date: "20.04.2025",
      status: "cancelled",
      items: 2,
      amount: "8 450 с",
    },
  ];

  // Navigation menu items
  const navItems = [
    { label: "ДАШБОРД", icon: "/group.png", active: false },
    { label: "ТОВАРЫ", icon: "/---icon--ad-product-.png", active: false },
    { label: "ЗАКАЗЫ", icon: "/---icon--buy-.png", active: true },
    { label: "ПОЛЬЗОВАТЕЛИ", icon: "/vector_zakazy.svg", active: false },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:2"
    >
      <div className="bg-white overflow-hidden w-full max-w-[1920px] min-h-screen relative">
        {/* Header */}
        <Header />

        {/* Sidebar */}
        <div className="w-[262px] h-[calc(100vh-56px)] fixed top-14 left-0 border-r border-solid border-[#00000040]">
          <div className="flex flex-col items-center pt-[500px]">
            {navItems.map((item, index) => (
              <div key={index} className="flex items-center mb-7 w-full pl-10">
                <div className="w-[18px] h-[18px] mr-3">
                  {item.icon === "/group.png" ? (
                    <div className="w-[18px] h-[18px] bg-[url(/group.png)] bg-[100%_100%]" />
                  ) : (
                    <img
                      className="w-full h-full"
                      alt={`Icon ${item.label}`}
                      src={item.icon}
                    />
                  )}
                </div>
                <div
                  className={`[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[12.7px] ${item.active ? "underline" : ""}`}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-[262px] p-8">
          <h1 className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-[40px] mb-12">
            Заказы
          </h1>

          {/* Search and Filters */}
          <div className="flex items-center mb-8 border-b border-black pb-2 w-[340px]">
            <div className="[font-family:'Inter',Helvetica] font-light text-black text-[13px] tracking-[0.80px]">
              SEARCH
            </div>
            <div className="flex-1"></div>
            <div className="[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[12.7px] mr-2">
              СТАТУСЫ
            </div>
            <img className="w-2 h-[5px]" alt="Vector" src="/vector-1.svg" />
          </div>

          {/* Orders Table */}
          <Card className="border border-solid border-[#00000040] rounded-[10px]">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-solid border-[#00000040]">
                    <TableHead className="w-12 pl-10">
                      <Checkbox className="rounded-[5px] border-[#00000040]" />
                    </TableHead>
                    <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
                      ID
                    </TableHead>
                    <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
                      Клиент
                    </TableHead>
                    <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
                      Дата
                    </TableHead>
                    <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
                      Статус
                    </TableHead>
                    <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
                      Товары
                    </TableHead>
                    <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
                      Сумма
                    </TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order, index) => (
                    <TableRow
                      key={index}
                      className="border-b border-solid border-[#00000040]"
                    >
                      <TableCell className="pl-10">
                        <Checkbox className="rounded-[5px] border-[#00000040]" />
                      </TableCell>
                      <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
                        {order.id}
                      </TableCell>
                      <TableCell>
                        <div className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
                          {order.customer}
                        </div>
                        <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-xs">
                          {order.email}
                        </div>
                      </TableCell>
                      <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
                        {order.date}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${statusTypes[order.status as keyof typeof statusTypes].color} text-white font-semibold rounded-[50px] px-3 py-1.5`}
                        >
                          {
                            statusTypes[
                              order.status as keyof typeof statusTypes
                            ].label
                          }
                        </Badge>
                      </TableCell>
                      <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
                        {order.items}
                      </TableCell>
                      <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
                        {order.amount}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
                            •••
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {/* Dropdown menu items would go here */}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EwimvaZakazy;