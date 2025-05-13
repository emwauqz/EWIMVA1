import React, { useState } from 'react';
import { Badge } from '../../../components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
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

// Dashboard data
const summaryCards = [
  {
    title: 'Общая выручка',
    value: '1,245,670 c',
    change: '+12.5%',
    trend: 'up',
    icon: <img className="w-[18px] h-3.5" alt="Vector" src="/vector-3.svg" />,
  },
  {
    title: 'Заказы',
    value: '369',
    change: '+8.2%',
    trend: 'up',
    icon: (
      <img
        className="w-[19px] h-[19px]"
        alt="Icon buy"
        src="/---icon--buy--1.png"
      />
    ),
    path: '/orders',
  },
  {
    title: 'Товары',
    value: '248',
    change: '+4.5%',
    trend: 'up',
    icon: (
      <img
        className="w-5 h-5"
        alt="Icon ad product"
        src="/---icon--ad-product-.png"
      />
    ),
    path: '/products',
  },
  {
    title: 'Пользователи',
    value: '2,543',
    change: '+1.1%',
    trend: 'down',
    icon: (
      <img className="w-[18px] h-[21px]" alt="Vector" src="/vector-4.svg" />
    ),
    path: '/users',
  },
];

const popularProducts = [
  {
    name: 'Джинсы wideleg с посадкой на талии',
    sales: '124 продаж',
    revenue: '186 000 с',
    image: '/87007182-ts-99999999-01.png',
  },
  {
    name: 'Блузка с перфорацией',
    sales: '85 продаж',
    revenue: '75 000 с',
    image: '/77059074-02-99999999-01.png',
  },
  {
    name: 'Сумка-ведро с эффектом рафии',
    sales: '98 продаж',
    revenue: '132 000 с',
    image: '/87036715-cu-b.png',
  },
  {
    name: 'Жакет букле с нарядными пуговицами',
    sales: '72 продаж',
    revenue: '66 000 с',
    image: '/87040363-56.png',
  },
  {
    name: 'Укороченный тренч с двубортной застежкой',
    sales: '65 продаж',
    revenue: '56 000 с',
    image: '/87055735-37.png',
  },
];

const recentOrders = [
  {
    id: 'CRD-7650',
    customer: 'Анна Смирнова',
    date: '28.04.2025',
    status: 'Выполнен',
    statusColor: 'bg-emerald-500',
    items: '3',
    total: '12 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Михаил Иванов',
    date: '26.04.2025',
    status: 'Обработка',
    statusColor: 'bg-amber-500',
    items: '4',
    total: '24 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Елена Сидорова',
    date: '20.04.2025',
    status: 'Обработка',
    statusColor: 'bg-amber-500',
    items: '2',
    total: '8 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Дмитрий Козлов',
    date: '19.04.2025',
    status: 'Отправлен',
    statusColor: 'bg-[#2f88ff]',
    items: '3',
    total: '14 450 с',
  },
  {
    id: 'CRD-7650',
    customer: 'Ольга Новикова',
    date: '18.04.2025',
    status: 'Выполнен',
    statusColor: 'bg-emerald-500',
    items: '4',
    total: '20 450 с',
  },
];

const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
const revenues = [240000, 180000, 150000, 120000, 110000, 50000, 0]; 

export default function EwimvaDashboard(): JSX.Element {
  const [orders, setOrders] = useState(recentOrders);
  const [dateFilter, setDateFilter] = useState('30 days');
  const navigate = useNavigate();

  // Фильтр статуса заказа
  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    updatedOrders[index].statusColor = {
      'Обработка': 'bg-amber-500',
      'Отправлен': 'bg-[#2f88ff]',
      'Выполнен': 'bg-emerald-500',
      'Отменён': 'bg-[#ae1414]',
    }[newStatus];
    setOrders(updatedOrders);
  };

  return (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-['Inter'] font-semibold text-[#131313] text-[40px]">
          Дашборд
        </h1>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-['Inter'] font-normal text-[14px] text-[#131313] hover:underline focus:outline-none">
              {dateFilter === '7 days' ? 'Последние 7 дней' :
              dateFilter === '30 days' ? 'Последние 30 дней' :
              dateFilter === '90 days' ? 'Последние 90 дней' :
              'Этот год'}
              <ChevronDownIcon className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200">
              <DropdownMenuItem onClick={() => setDateFilter('7 days')}>
                Последние 7 дней
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateFilter('30 days')}>
                Последние 30 дней
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateFilter('90 days')}>
                Последние 90 дней
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateFilter('year')}>
                Этот год
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {summaryCards.map((card, index) => (
          <Card
            key={index}
            className="border border-solid border-[#00000040] rounded-[10px] cursor-pointer"
            onClick={() => card.path && navigate(card.path)}
          >
            <CardContent className="p-0">
              <div className="p-[31px] relative">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-['Inter'] font-bold text-[#131313] text-base">
                    {card.title}
                  </h3>
                  <div className="flex-shrink-0">{card.icon}</div>
                </div>
                <div className="font-['Inter'] font-semibold text-[#131313] text-3xl mb-2">
                  {card.value}
                </div>
                <div className="flex items-center">
                  {card.trend === 'up' ? (
                    <img
                      className="w-[9px] h-2.5 mr-1"
                      alt="Vector"
                      src="/vector.svg"
                    />
                  ) : (
                    <img
                      className="w-[9px] h-2.5 mr-1"
                      alt="Vector"
                      src="/vector-1.svg"
                    />
                  )}
                  <span
                    className={`font-['Inter'] font-normal text-xs ${card.trend === 'up' ? 'text-[#14ae5c]' : 'text-[#ae1414]'}`}
                  >
                    {card.change}
                  </span>
                  <span className="font-['Inter'] font-normal text-black text-xs ml-1">
                    с прошлого месяца
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        <Card className="border border-solid border-[#00000040] rounded-[10px]">
          <CardHeader className="pb-0">
            <CardTitle className="font-['Inter'] font-semibold text-[#131313] text-2xl">
              Выручка по месяцам
            </CardTitle>
            <CardDescription className="font-['Inter'] font-normal text-[#131313] text-[15px]">
              Динамика выручки за последний год
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="w-full h-[283px] relative">
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between pr-2">
                {['2400 k', '1800 k', '1500 k', '1200 k', '500 k', '0 k'].map((revenue, index) => (
                  <div
                    key={index}
                    className="font-['Inter'] font-normal text-[#131313] text-xs"
                  >
                    {revenue}
                  </div>
                ))}
              </div>
              <div className="ml-10 h-full relative">
                <img
                  className="w-[674px] h-[261px] object-contain"
                  alt="Revenue Chart"
                  src="/group-20.png"
                />
                <div className="absolute top-0 left-0 w-[674px] h-[261px]">
                  {months.map((month, i) => (
                    <div
                      key={i}
                      className="absolute top-0 w-[56px] h-[261px]"
                      style={{ left: `${i * 56}px` }}
                      title={`${month}: Выручка ${revenues[i] / 100} с`}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  {months.map((month, index) => (
                    <div
                      key={index}
                      className="font-['Inter'] font-normal text-[#131313] text-xs"
                    >
                      {month}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-solid border-[#00000040] rounded-[10px]">
          <CardHeader className="pb-0">
            <CardTitle className="font-['Inter'] font-semibold text-[#131313] text-2xl">
              Популярные товары
            </CardTitle>
            <CardDescription className="font-['Inter'] font-normal text-[#131313] text-[15px]">
              Товары с наибольшими продажами
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-6">
              {popularProducts.map((product, index) => (
                <div key={index} className="flex items-start">
                  <img
                    className="w-[70px] h-[70px] object-cover mr-5"
                    alt={`Product ${index + 1}`}
                    src={product.image}
                  />
                  <div className="flex-1">
                    <h4 className="font-['Inter'] font-semibold text-[#131313] text-[15px]">
                      {product.name}
                    </h4>
                    <p className="font-['Inter'] font-normal text-[#131313] text-[15px]">
                      {product.sales}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-['Inter'] font-semibold text-[#131313] text-[15px]">
                      {product.revenue}
                    </p>
                    <p className="font-['Inter'] font-normal text-[#131313] text-[15px]">
                      выручка
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border border-solid border-[#00000040] rounded-[10px]">
        <CardHeader className="pb-0">
          <CardTitle className="font-['Inter'] font-semibold text-[#131313] text-2xl">
            Недавние заказы
          </CardTitle>
          <CardDescription className="font-['Inter'] font-normal text-[#131313] text-[15px]">
            Недавно размещенные заказы
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-solid border-[#00000040]">
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
              {orders.map((order, index) => (
                <TableRow key={index} className="border-b border-solid border-[#00000040]">
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {order.id}
                  </TableCell>
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {order.customer}
                  </TableCell>
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {order.date}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Badge
                          className={`${order.statusColor} text-white font-semibold rounded-[50px] px-3 py-1.5`}
                        >
                          {order.status}
                        </Badge>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200">
                        <DropdownMenuItem onClick={() => handleStatusChange(index, 'Обработка')}>
                          Обработка
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(index, 'Отправлен')}>
                          Отправлен
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(index, 'Выполнен')}>
                          Выполнен
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusChange(index, 'Отменён')}>
                          Отменён
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {order.items}
                  </TableCell>
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {order.total}
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