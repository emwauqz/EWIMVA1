import React, { useState } from 'react';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Checkbox } from '../../../components/ui/checkbox';
import { Input } from '../../../components/ui/input';
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

// Product data for mapping
const products = [
  {
    id: 1,
    name: 'Костюмный блейзер из смесового льна с поясом',
    category: 'Одежда',
    status: 'available',
    stock: 30,
    price: '12 450 с',
  },
  {
    id: 2,
    name: 'Костюмный блейзер из смесового льна с поясом',
    category: 'Одежда',
    status: 'available',
    stock: 20,
    price: '12 450 с',
  },
  {
    id: 3,
    name: 'Костюмный блейзер из смесового льна с поясом',
    category: 'Обувь',
    status: 'available',
    stock: 18,
    price: '12 450 с',
  },
  {
    id: 4,
    name: 'Костюмный блейзер из смесового льна с поясом',
    category: 'Одежда',
    status: 'unavailable',
    stock: 0,
    price: '12 450 с',
  },
  {
    id: 5,
    name: 'Замшевый ремень',
    category: 'Аксессуары',
    status: 'available',
    stock: 15,
    price: '12 450 с',
  },
  {
    id: 6,
    name: 'Костюмный блейзер из смесового льна с поясом',
    category: 'Одежда',
    status: 'available',
    stock: 27,
    price: '12 450 с',
  },
  {
    id: 7,
    name: 'Костюмный блейзер из смесового льна с поясом',
    category: 'Одежда',
    status: 'low',
    stock: 3,
    price: '12 450 с',
  },
  {
    id: 8,
    name: 'Костюмный блейзер из смесового льна с поясом',
    category: 'Одежда',
    status: 'available',
    stock: 43,
    price: '12 450 с',
  },
  {
    id: 9,
    name: 'Костюмный блейзер из смесового льна с поясом',
    category: 'Одежда',
    status: 'available',
    stock: 55,
    price: '12 450 с',
  },
  {
    id: 10,
    name: 'Костюмный блейзер из смесового льна с поясом',
    category: 'Одежда',
    status: 'available',
    stock: 24,
    price: '12 450 с',
  },
];

export default function EwimvaTovary(): JSX.Element {
  const [productsList, setProductsList] = useState(products);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortOption, setSortOption] = useState('newest');
  const navigate = useNavigate();

  // Функция для фильтрации по поиску
  const filteredProducts = productsList.filter((product) =>
    searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.status.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  ).filter((product) =>
    categoryFilter === 'all' ? true : product.category === categoryFilter
  );

  // Функция для сортировки
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-asc') {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sortOption === 'price-desc') {
      return parseFloat(b.price) - parseFloat(a.price);
    } else if (sortOption === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    return 0; // По умолчанию новые (без сортировки)
  });

  // Функция для удаления товара
  const handleDelete = (id: number) => {
    if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
      setProductsList(productsList.filter((product) => product.id !== id));
    }
  };

  return (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-['Inter'] font-semibold text-[#131313] text-[40px]">
          Товары
        </h1>
        <Button
          className="bg-black text-white rounded-full h-[30px] px-6"
          onClick={() => navigate('/products/add')}
        >
          <span className="mr-1">+</span> Добавить товар
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-8 border-b border-black pb-2">
        <div className="flex items-center gap-2">
          <div className="font-['Inter'] font-light text-black text-[13px] tracking-[0.80px]">
            SEARCH
          </div>
          <input
            type="text"
            placeholder="Поиск по названию, категории или статусу..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[300px] border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2 text-[12px]"
          />
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-['Inter'] font-normal text-[14px] text-[#131313] hover:underline focus:outline-none">
              {categoryFilter === 'all' ? 'Все категории' : categoryFilter}
              <ChevronDownIcon className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200">
              <DropdownMenuItem onClick={() => setCategoryFilter('all')}>
                Все категории
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategoryFilter('Одежда')}>
                Одежда
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategoryFilter('Обувь')}>
                Обувь
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategoryFilter('Аксессуары')}>
                Аксессуары
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-['Inter'] font-normal text-[14px] text-[#131313] hover:underline focus:outline-none">
              {sortOption === 'newest' ? 'Новые' :
              sortOption === 'price-asc' ? 'Цены по возрастанию' :
              sortOption === 'price-desc' ? 'Цены по убыванию' :
              'Название А-Я'}
              <ChevronDownIcon className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200">
              <DropdownMenuItem onClick={() => setSortOption('newest')}>
                Новые
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption('price-asc')}>
                Цены по возрастанию
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption('price-desc')}>
                Цены по убыванию
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOption('name-asc')}>
                Название А-Я
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Card className="border border-solid border-[#00000040] rounded-[10px]">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-solid border-[#00000040]">
                <TableHead className="w-12 pl-10">
                  <Checkbox className="rounded-[5px] border-[#00000040]" />
                </TableHead>
                <TableHead className="font-['Inter'] font-normal text-[#131313] text-sm">
                  Название
                </TableHead>
                <TableHead className="font-['Inter'] font-normal text-[#131313] text-sm">
                  Категория
                </TableHead>
                <TableHead className="font-['Inter'] font-normal text-[#131313] text-sm">
                  Статус
                </TableHead>
                <TableHead className="font-['Inter'] font-normal text-[#131313] text-sm">
                  Остаток
                </TableHead>
                <TableHead className="font-['Inter'] font-normal text-[#131313] text-sm">
                  Цена
                </TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedProducts.map((product) => (
                <TableRow
                  key={product.id}
                  className="border-b border-solid border-[#00000040]"
                >
                  <TableCell className="pl-10">
                    <Checkbox className="rounded-[5px] border-[#00000040]" />
                  </TableCell>
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {product.name}
                  </TableCell>
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {product.category}
                  </TableCell>
                  <TableCell>
                    {product.status === 'available' && (
                      <Badge
                        variant="outline"
                        className="rounded-full border-emerald-500 text-emerald-500 font-semibold bg-white"
                      >
                        В наличии
                      </Badge>
                    )}
                    {product.status === 'low' && (
                      <Badge
                        variant="outline"
                        className="rounded-full border-amber-500 text-amber-500 font-semibold bg-white"
                      >
                        Мало
                      </Badge>
                    )}
                    {product.status === 'unavailable' && (
                      <Badge
                        variant="outline"
                        className="rounded-full border-[#ae1414] text-[#ae1414] font-semibold bg-white"
                      >
                        Нет в наличии
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {product.stock}
                  </TableCell>
                  <TableCell className="font-['Inter'] font-semibold text-[#131313] text-sm">
                    {product.price}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="font-['Inter'] font-semibold text-[#131313] text-sm">
                        •••
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white shadow-lg rounded-md border border-gray-200">
                        <DropdownMenuItem onClick={() => navigate(`/products/${product.id}/edit`)}>
                          Редактировать
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(product.id)}>
                          Удалить
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
// import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";
// import { Checkbox } from "../../components/ui/checkbox";
// import { Input } from "../../components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
// } from "../../components/ui/select";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../../components/ui/table";
// import Header from '../../components/Header';

// // Product data for mapping
// const products = [
//   {
//     id: 1,
//     name: "Костюмный блейзер из смесового льна с поясом",
//     category: "Одежда",
//     status: "available",
//     stock: 30,
//     price: "12 450 с",
//   },
//   {
//     id: 2,
//     name: "Костюмный блейзер из смесового льна с поясом",
//     category: "Одежда",
//     status: "available",
//     stock: 20,
//     price: "12 450 с",
//   },
//   {
//     id: 3,
//     name: "Костюмный блейзер из смесового льна с поясом",
//     category: "Обувь",
//     status: "available",
//     stock: 18,
//     price: "12 450 с",
//   },
//   {
//     id: 4,
//     name: "Костюмный блейзер из смесового льна с поясом",
//     category: "Одежда",
//     status: "unavailable",
//     stock: 0,
//     price: "12 450 с",
//   },
//   {
//     id: 5,
//     name: "Замшевый ремень",
//     category: "Аксессуары",
//     status: "available",
//     stock: 15,
//     price: "12 450 с",
//   },
//   {
//     id: 6,
//     name: "Костюмный блейзер из смесового льна с поясом",
//     category: "Одежда",
//     status: "available",
//     stock: 27,
//     price: "12 450 с",
//   },
//   {
//     id: 7,
//     name: "Костюмный блейзер из смесового льна с поясом",
//     category: "Одежда",
//     status: "low",
//     stock: 3,
//     price: "12 450 с",
//   },
//   {
//     id: 8,
//     name: "Костюмный блейзер из смесового льна с поясом",
//     category: "Одежда",
//     status: "available",
//     stock: 43,
//     price: "12 450 с",
//   },
//   {
//     id: 9,
//     name: "Костюмный блейзер из смесового льна с поясом",
//     category: "Одежда",
//     status: "available",
//     stock: 55,
//     price: "12 450 с",
//   },
//   {
//     id: 10,
//     name: "Костюмный блейзер из смесового льна с поясом",
//     category: "Одежда",
//     status: "available",
//     stock: 24,
//     price: "12 450 с",
//   },
// ];

// // Navigation menu items
// const navItems = [
//   { id: 1, name: "ДАШБОРД", icon: "/group.png", active: false },
//   { id: 2, name: "ТОВАРЫ", icon: "/---icon--ad-product-.png", active: true },
//   { id: 3, name: "ЗАКАЗЫ", icon: "/---icon--buy-.png", active: false },
//   { id: 4, name: "ПОЛЬЗОВАТЕЛИ", icon: "/vector-1_tovary.svg", active: false },
// ];

// export const EwimvaTovary = (): JSX.Element => {
//   return (
//     <div
//       className="bg-white flex flex-row justify-center w-full"
//       data-model-id="1:2"
//     >
//       <div className="bg-white w-full relative">
//       <Header />

//         <div className="flex">
//           {/* Sidebar */}
//           <aside className="w-[262px] h-[calc(100vh-3.5rem)] border-r border-[#00000040]">
//             <nav className="p-4 pt-[500px]">
//               <ul className="space-y-7">
//                 {navItems.map((item) => (
//                   <li key={item.id} className="flex items-center">
//                     <div className="w-[18px] h-[18px] mr-4">
//                       {item.icon && (
//                         <img
//                           src={item.icon}
//                           alt={`${item.name} icon`}
//                           className="w-full h-full object-contain"
//                         />
//                       )}
//                     </div>
//                     <span
//                       className={`[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[12.7px] tracking-[0] leading-[18px] ${
//                         item.active ? "underline" : ""
//                       }`}
//                     >
//                       {item.name}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </aside>

//           {/* Main content */}
//           <main className="flex-1 p-8">
//             <h1 className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-[40px] tracking-[0] leading-[18px] mb-12">
//               Товары
//             </h1>

//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-8">
//                 <div>
//                   <span className="[font-family:'Inter',Helvetica] font-light text-black text-[13px] tracking-[0.80px] leading-5 block mb-1">
//                     SEARCH
//                   </span>
//                   <Input className="w-[332px]" />
//                 </div>

//                 <div>
//                   <Select>
//                     <SelectTrigger className="w-[150px] border-none shadow-none p-0 h-auto">
//                       <div className="flex items-center">
//                         <span className="[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[12.7px] tracking-[0] leading-[18px]">
//                           КАТЕГОРИИ
//                         </span>
//                         <img
//                           className="w-2 h-[5px] ml-2"
//                           alt="Vector"
//                           src="/vector_tovary.svg"
//                         />
//                       </div>
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="all">Все категории</SelectItem>
//                       <SelectItem value="clothes">Одежда</SelectItem>
//                       <SelectItem value="shoes">Обувь</SelectItem>
//                       <SelectItem value="accessories">Аксессуары</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               <Button className="bg-black text-white rounded-full h-[30px] px-6">
//                 <span className="mr-1">+</span> Добавить товар
//               </Button>
//             </div>

//             <Card className="border border-[#00000040] rounded-[10px]">
//               <CardContent className="p-0">
//                 <Table>
//                   <TableHeader>
//                     <TableRow className="border-b border-[#00000040]">
//                       <TableHead className="w-[50px] text-center">
//                         <Checkbox />
//                       </TableHead>
//                       <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
//                         Название
//                       </TableHead>
//                       <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
//                         Категория
//                       </TableHead>
//                       <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
//                         Ствтус
//                       </TableHead>
//                       <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
//                         Остаток
//                       </TableHead>
//                       <TableHead className="[font-family:'Inter',Helvetica] font-normal text-[#131313] text-sm">
//                         Цена
//                       </TableHead>
//                       <TableHead className="w-[50px]"></TableHead>
//                     </TableRow>
//                   </TableHeader>
//                   <TableBody>
//                     {products.map((product) => (
//                       <TableRow
//                         key={product.id}
//                         className="border-b border-[#00000040]"
//                       >
//                         <TableCell className="text-center">
//                           <Checkbox />
//                         </TableCell>
//                         <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
//                           {product.name}
//                         </TableCell>
//                         <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
//                           {product.category}
//                         </TableCell>
//                         <TableCell>
//                           {product.status === "available" && (
//                             <Badge
//                               variant="outline"
//                               className="rounded-full border-emerald-500 text-emerald-500 font-semibold bg-white"
//                             >
//                               В наличии
//                             </Badge>
//                           )}
//                           {product.status === "low" && (
//                             <Badge
//                               variant="outline"
//                               className="rounded-full border-amber-500 text-amber-500 font-semibold bg-white"
//                             >
//                               Мало
//                             </Badge>
//                           )}
//                           {product.status === "unavailable" && (
//                             <Badge
//                               variant="outline"
//                               className="rounded-full border-[#ae1414] text-[#ae1414] font-semibold bg-white"
//                             >
//                               Нет в наличии
//                             </Badge>
//                           )}
//                         </TableCell>
//                         <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
//                           {product.stock}
//                         </TableCell>
//                         <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm">
//                           {product.price}
//                         </TableCell>
//                         <TableCell className="[font-family:'Inter',Helvetica] font-semibold text-[#131313] text-sm text-center">
//                           •••
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </CardContent>
//             </Card>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EwimvaTovary;