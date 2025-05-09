import React, { useState } from 'react';
import { Badge } from '../../../components/ui/badge';
import { Card, CardContent } from '../../../components/ui/card';
import { Checkbox } from '../../../components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../components/ui/table';
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Order status data with corresponding colors
const statusTypes = {
  processing: { label: 'Обработка', color: 'bg-amber-500' },
  sent: { label: 'Отправлен', color: 'bg-[#2f88ff]' },
  completed: { label: 'Выполнен', color: 'bg-emerald-500' },
  cancelled: { label: 'Отменён', color: 'bg-[#ae1414]' },
};

// Order data
const initialOrders = [
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '26.04.2025',
    status: 'processing',
    items: 4,
    amount: '24 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '20.04.2025',
    status: 'processing',
    items: 2,
    amount: '8 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '19.04.2025',
    status: 'sent',
    items: 3,
    amount: '14 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '18.04.2025',
    status: 'completed',
    items: 4,
    amount: '20 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '26.04.2025',
    status: 'processing',
    items: 4,
    amount: '24 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '20.04.2025',
    status: 'processing',
    items: 2,
    amount: '8 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '19.04.2025',
    status: 'sent',
    items: 3,
    amount: '14 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '18.04.2025',
    status: 'completed',
    items: 4,
    amount: '20 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '26.04.2025',
    status: 'cancelled',
    items: 4,
    amount: '24 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '20.04.2025',
    status: 'processing',
    items: 2,
    amount: '8 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '19.04.2025',
    status: 'sent',
    items: 3,
    amount: '14 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '18.04.2025',
    status: 'completed',
    items: 4,
    amount: '20 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '26.04.2025',
    status: 'processing',
    items: 4,
    amount: '24 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    email: 'mihailivanov@gmail.com',
    date: '20.04.2025',
    status: 'cancelled',
    items: 2,
    amount: '8 450 с',
  },
];

export default function EwimvaZakazy(): JSX.Element {
  const [orders, setOrders] = useState(initialOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortOption, setSortOption] = useState('newest');
  const navigate = useNavigate();

  // Функция для фильтрации заказов по поиску
  const filteredOrders = orders.filter((order) =>
    searchQuery
      ? order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.email.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  ).filter((order) =>
    statusFilter === 'all' ? true : order.status === statusFilter
  );

  // Функция для сортировки заказов
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sortOption === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortOption === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortOption === 'amount-desc') {
      return parseFloat(b.amount) - parseFloat(a.amount);
    } else if (sortOption === 'amount-asc') {
      return parseFloat(a.amount) - parseFloat(b.amount);
    }
    return 0;
  });

  // Функция для изменения статуса заказа
  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };

  return (
    <main className="flex-1 p-8">
      <h1 className="font-['Inter'] font-semibold text-[#131313] text-[40px] mb-12">
        Заказы
      </h1>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-8 border-b border-black pb-2">
        <div className="flex items-center gap-2">
          <div className="font-['Inter'] font-light text-black text-[13px] tracking-[0.80px]">
            SEARCH
          </div>
          <input
            type="text"
            placeholder="Поиск по ID, клиенту или email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[300px] border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2 text-[12px]"
          />
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-['Inter'] font-normal text-[14px] text-[#131313] hover:underline focus:outline-none">
              {statusFilter === 'all' ? 'Все статусы' : statusTypes[statusFilter as keyof typeof statusTypes].label}
              <ChevronDownIcon className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200">
              <DropdownMenuItem onClick={() => setStatusFilter('all')}>
                Все статусы
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('processing')}>
                Обработка
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('sent')}>
                Отправлен
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('completed')}>
                Выполнен
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter('cancelled')}>
                Отменён
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-['Inter'] font-normal text-[14px] text-[#131313] hover:underline focus:outline-none">
              {sortOption === 'newest' ? 'Новые' :
              sortOption === 'oldest' ? 'Старые' :
              sortOption === 'amount-desc' ? 'Сумма по убыванию' :
              'Сумма по возрастанию'}
              <ChevronDownIcon className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200">
              <DropdownMenuItem onClick={() => setSortOption('newest')}>
                Новые
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption('oldest')}>
                Старые
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption('amount-desc')}>
                Сумма по убыванию
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption('amount-asc')}>
                Сумма по возрастанию
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
                <TableHead className="font-['Inter'] font-normal text-[#131313] text-sm">
                  ID
                </TableHead>
                <TableHead className="font-['Inter'] font-normal text-[#131313] text-sm">
                  Клиент
                </TableHead>
                <TableHead className="font-['Inter'] font-normal text-[#131313] text-sm">
                  Дата
                </TableHead>
                <TableHead className="font-['Inter'] font-normal text-[#131313] text-sm">
                  Статус
                </TableHead>
                <TableHead className="font-['Inter'] font-normal text-[#131313] text-sm">
                  Товары
                </TableHead>
                <TableHead className="font-['Inter'] font-normal text-[#131313] text-sm">
                  Сумма
                </TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedOrders.map((order, index) => (
                <TableRow
                  key={index}
                  className="border-b border-solid border-[#00000040]"
                >
                  <TableCell className="pl-10">
                    <Checkbox className="rounded-[5px] border-[#00000040]" />
                  </TableCell>
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {order.id}
                  </TableCell>
                  <TableCell>
                    <div className="font-['Inter'] font-semibold text-[#131313] text-sm">
                      {order.customer}
                    </div>
                    <div className="font-['Inter'] font-normal text-[#131313] text-xs">
                      {order.email}
                    </div>
                  </TableCell>
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {order.date}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Badge
                          className={`${statusTypes[order.status as keyof typeof statusTypes].color} text-white font-semibold rounded rounded-[50px] px-3 py-1.5`}
                        >
                          {statusTypes[order.status as keyof typeof statusTypes].label}
                        </Badge>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200">
                        <DropdownMenuItem onClick={() => handleStatusChange(index, 'processing')}>
                          Обработка
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(index, 'sent')}>
                          Отправлен
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(index, 'completed')}>
                          Выполнен
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(index, 'cancelled')}>
                          Отменён
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {order.items}
                  </TableCell>
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {order.amount}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="font-['Inter'] font-semibold text-[#131313] text-sm">
                        •••
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200">
                        <DropdownMenuItem onClick={() => navigate(`/orders/${index}/details`)}>
                          Просмотр деталей
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => navigate(`/orders/${index}/edit`)}>
                          Редактировать
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}

// import React from "react";
// import { Badge } from "../../components/ui/badge";
// import { Card, CardContent } from "../../components/ui/card";
// import { Checkbox } from "../../components/ui/checkbox";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "../../components/ui/dropdown-menu";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../../components/ui/table";
// import Header from '../../components/Header';

// export const EwimvaZakazy = (): JSX.Element => {
//   // Order status data with corresponding colors
//   const statusTypes = {
//     processing: { label: "Обработка", color: "bg-amber-500" },
//     sent: { label: "Отправлен", color: "bg-[#2f88ff]" },
//     completed: { label: "Выполнен", color: "bg-emerald-500" },
//     cancelled: { label: "Отменён", color: "bg-[#ae1414]" },
//   };

//   // Order data
//   const orders = [
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "26.04.2025",
//       status: "processing",
//       items: 4,
//       amount: "24 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "20.04.2025",
//       status: "processing",
//       items: 2,
//       amount: "8 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "19.04.2025",
//       status: "sent",
//       items: 3,
//       amount: "14 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "18.04.2025",
//       status: "completed",
//       items: 4,
//       amount: "20 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "26.04.2025",
//       status: "processing",
//       items: 4,
//       amount: "24 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "20.04.2025",
//       status: "processing",
//       items: 2,
//       amount: "8 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "19.04.2025",
//       status: "sent",
//       items: 3,
//       amount: "14 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "18.04.2025",
//       status: "completed",
//       items: 4,
//       amount: "20 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "26.04.2025",
//       status: "cancelled",
//       items: 4,
//       amount: "24 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "20.04.2025",
//       status: "processing",
//       items: 2,
//       amount: "8 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "19.04.2025",
//       status: "sent",
//       items: 3,
//       amount: "14 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "18.04.2025",
//       status: "completed",
//       items: 4,
//       amount: "20 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "26.04.2025",
//       status: "processing",
//       items: 4,
//       amount: "24 450 с",
//     },
//     {
//       id: "CRD-7650",
//       customer: "Михаил Иванов",
//       email: "mihailivanov@gmail.com",
//       date: "20.04.2025",
//       status: "cancelled",
//       items: 2,
//       amount: "8 450 с",
//     },
//   ];

//   // Navigation menu items
//   const navItems = [
//     { label: "ДАШБОРД", icon: "/group.png", active: false },
//     { label: "ТОВАРЫ", icon: "/---icon--ad-product-.png", active: false },
//     { label: "ЗАКАЗЫ", icon: "/---icon--buy-.png", active: true },
//     { label: "ПОЛЬЗОВАТЕЛИ", icon: "/vector_zakazy.svg", active: false },
//   ];

//   return (
//     <div
//       className="bg-white flex flex-row justify-center w-full"
//       data-model-id="1:2"
//     >
//       <div className="bg-white overflow-hidden w-full max-w-[1920px] min-h-screen relative">
//         {/* Header */}
//         <Header />

//         {/* Sidebar */}
//         <div className="w-[262px] h-[calc(100vh-56px)] fixed top-14 left-0 border-r border-solid border-[#00000040]">
//           <div className="flex flex-col items-center pt-[500px]">
//             {navItems.map((item, index) => (
//               <div key={index} className="flex items-center mb-7 w-full pl-10">
//                 <div className="w-[18px] h-[18px] mr-3">
//                   {item.icon === "/group.png" ? (
//                     <div className="w-[18px] h-[18px] bg-[url(/group.png)] bg-[100%_100%]" />
//                   ) : (
//                     <img
//                       className="w-full h-full"
//                       alt={`Icon ${item.label}`}
//                       src={item.icon}
//                     />
//                   )}
//                 </div>
//                 <div
//                   className={`[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[12.7px] ${item.active ? "underline" : ""}`}
//                 >
//                   {item.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="ml-[262px] p-8">
//           <h1 className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-[40px] mb-12">
//             Заказы
//           </h1>

//           {/* Search and Filters */}
//           <div className="flex items-center mb-8 border-b border-black pb-2 w-[340px]">
//             <div className="[font-family:'Inter',Helvetica] font-light text-black text-[13px] tracking-[0.80px]">
//               SEARCH
//             </div>
//             <div className="flex-1"></div>
//             <div className="[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[12.7px] mr-2">
//               СТАТУСЫ
//             </div>
//             <img className="w-2 h-[5px]" alt="Vector" src="/vector-1.svg" />
//           </div>

//           {/* Orders Table */}
//           <Card className="border border-solid border-[#00000040] rounded-[10px]">
//             <CardContent className="p-0">
//               <Table>
//                 <TableHeader>
//                   <TableRow className="border-b border-solid border-[#00000040]">
//                     <TableHead className="w-12 pl-10">
//                       <Checkbox className="rounded-[5px] border-[#00000040]" />
//                     </TableHead>
//                     <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
//                       ID
//                     </TableHead>
//                     <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
//                       Клиент
//                     </TableHead>
//                     <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
//                       Дата
//                     </TableHead>
//                     <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
//                       Статус
//                     </TableHead>
//                     <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
//                       Товары
//                     </TableHead>
//                     <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
//                       Сумма
//                     </TableHead>
//                     <TableHead className="w-12"></TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {orders.map((order, index) => (
//                     <TableRow
//                       key={index}
//                       className="border-b border-solid border-[#00000040]"
//                     >
//                       <TableCell className="pl-10">
//                         <Checkbox className="rounded-[5px] border-[#00000040]" />
//                       </TableCell>
//                       <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
//                         {order.id}
//                       </TableCell>
//                       <TableCell>
//                         <div className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
//                           {order.customer}
//                         </div>
//                         <div className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-xs">
//                           {order.email}
//                         </div>
//                       </TableCell>
//                       <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
//                         {order.date}
//                       </TableCell>
//                       <TableCell>
//                         <Badge
//                           className={`${statusTypes[order.status as keyof typeof statusTypes].color} text-white font-semibold rounded-[50px] px-3 py-1.5`}
//                         >
//                           {
//                             statusTypes[
//                               order.status as keyof typeof statusTypes
//                             ].label
//                           }
//                         </Badge>
//                       </TableCell>
//                       <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
//                         {order.items}
//                       </TableCell>
//                       <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
//                         {order.amount}
//                       </TableCell>
//                       <TableCell>
//                         <DropdownMenu>
//                           <DropdownMenuTrigger className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
//                             •••
//                           </DropdownMenuTrigger>
//                           <DropdownMenuContent>
//                             {/* Dropdown menu items would go here */}
//                           </DropdownMenuContent>
//                         </DropdownMenu>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EwimvaZakazy;