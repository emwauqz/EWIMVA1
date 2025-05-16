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
    <>
      <style>
        {`
          @media (max-width: 767px) {
            /* Основной контейнер */
            main[class*="p-8"] {
              padding: 8px !important;
            }

            /* Контейнер заголовка */
            div[class*="flex items-center justify-between mb-10"] {
              margin-top: 50px !important;
              margin-bottom: 8px !important;
            }

            /* Заголовок */
            h1[class*="text-[40px]"] {
              font-size: 40px !important;
            }

            /* Кнопка Добавить */
            button[class*="h-[30px]"] {
              height: 24px !important;
              padding: 0 10px !important;
              font-size: 12px !important;
            }

            /* Панель поиска и фильтров */
            div[class*="flex items-center gap-4 mb-8"] {
              gap: 8px !important;
              margin-bottom: 8px !important;
              padding-bottom: 6px !important;
            }

            /* Поле поиска */
            input[class*="w-[300px]"] {
              width: auto !important;
              padding: 4px !important;
              font-size: 12px !important;
            }

            /* Текст SEARCH */
            div[class*="text-[13px]"] {
              font-size: 12px !important;
            }

            /* Фильтры и сортировка */
            div[class*="text-[14px]"] {
              font-size: 12px !important;
            }

            /* Иконка ChevronDown */
            svg[class*="w-4 h-4"] {
              width: 12px !important;
              height: 12px !important;
            }

            /* Карточка таблицы */
            div[class*="border border-solid border-[#00000040] rounded-[10px]"] {
              width: 100% !important;
            }

            /* Таблица - заголовки */
            table {
              font-size: 12px !important;
              display: block !important;
              overflow-x: auto !important;
            }

            /* Таблица - данные */
            tbody td {
              font-size: 10px !important;
            }

            /* Ячейки */
            th, td {
              padding: 4px !important;
            }

            /* Чекбокс */
            div[class*="w-12 pl-10"],
            td[class*="pl-10"] {
              padding-left: 4px !important;
              width: 10px !important;
            }
            div[class*="rounded-[5px]"] {
              width: 10px !important;
              height: 10px !important;
            }

            /* Бейдж статуса */
            div[class*="rounded-full"] {
              padding: 1px 15px !important;
              font-size: 9px !important;
            }

            /* Действия (три точки) */
            div[class*="w-12"] {
              width: 24px !important;
            }
            div[class*="text-sm"] {
              font-size: 12px !important;
            }
          }
        `}
      </style>
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-['Inter'] font-semibold text-[#131313] text-[40px]">
            Товары
          </h1>
          <Button
            className="bg-black text-white rounded-full h-[30px] px-6"
            onClick={() => navigate('/products/add')}
          >
            <span className="mr-1">+</span> Добавить
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
                        <DropdownMenuContent className="bg-white shadow-lg rounded-md숙
                        border border-gray-200">
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
    </>
  );
}