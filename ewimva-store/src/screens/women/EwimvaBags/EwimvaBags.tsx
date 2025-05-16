import React, { useState } from 'react';
import { ProductSection } from "../../../components/ProductSection";
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
{
id: 1,
name: 'Сумка кроше на плечо',
category: 'CAPSULE',
price: 'KGS 6 999',
image: '/Сумка кроше на плечо.png',
colorVariants: [],
},
{
id: 2,
name: 'Кожаная сумка-ведро',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 999',
image: '/Кожаная сумка-ведро.png',
colorVariants: [],
},
{
id: 3,
name: 'Средняя сумка-ведро с эффектом рафии',
category: 'CAPSULE',
price: 'KGS 8 999',
image: '/Средняя сумка-ведро с эффектом рафии.png',
colorVariants: [
],
},
{
id: 4,
name: 'Сумка-конверт из натурального волокна',
category: 'CAPSULE',
price: 'KGS 4 799',
image: '/Сумка-конверт из натурального волокна.png',
colorVariants: [],
},
{
id: 5,
name: 'Сумка в стиле конверта через плечо',
category: 'CAPSULE',
price: 'KGS 3 499 ',
image: '/Сумка в стиле конверта через плечо.png',
colorVariants: [],
},
{
id: 6,
name: 'Средняя сумка-шоппер из кожи',
category: 'NEW NOW - SELECTION',
price: 'KGS 24 999',
image: '/Средняя сумка-шоппер из кожи.png',
colorVariants: [],
},
{
id: 7,
name: 'Сумка на плечевом ремне с заклепками',
category: 'NEW NOW',
price: 'KGS 5 999',
image: '/Сумка на плечевом ремне с заклепками.png',
colorVariants: [],
},
{
id: 8,
name: 'Фактурная сумка-шоппер',
category: 'NEW NOW - SELECTION',
price: 'KGS 4 799 ',
image: '/Фактурная сумка-шоппер.png',
colorVariants: [],
},
{
id: 9,
name: 'Сумка на плечо с принтованной надписью',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Сумка на плечо с принтованной надписью.png',
colorVariants: [],
},
{
id: 10,
name: 'Атласная сумка с бахромой для ношения в руке',
category: 'NEW NOW - SELECTION',
price: 'KGS 9 000 ',
image: '/Атласная сумка с бахромой для ношения в руке.png',
colorVariants: [],
},
{
id: 11,
name: 'Замшевая сумка на цепочке',
category: 'NEW NOW',
price: 'KGS 7 999',
image: '/Замшевая сумка на цепочке.png',
colorVariants: [
],
},
{
id: 12,
name: 'Кожаная сумка с металлической ручкой',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Кожаная сумка с металлической ручкой.png',
colorVariants: [],
},
{
id: 13,
name: 'Плетеная кожаная сумка на плечо',
category: 'CAPSULE',
price: 'KGS 12 990',
image: '/Плетеная кожаная сумка на плечо.png',
colorVariants: [],
},
{
id: 14,
name: 'Овальная сумка на плечо',
category: 'CAPSULE',
price: 'KGS 6 990',
image: '/Овальная сумка на плечо.png',
colorVariants: [],
},
{
id: 15,
name: 'Овальная сумка на плечевом ремне',
category: 'NEW NOW',
price: 'KGS 3 999',
image: '/Овальная сумка на плечевом ремне.png',
colorVariants: [],
},
{
id: 16,
name: 'Сумка на плечо с пайетками',
category: 'NEW NOW - SELECTION',
price: 'KGS 4 799 ',
image: '/Сумка на плечо с пайетками.png',
colorVariants: [],
},
{
id: 17,
name: 'Shoulder bag with buckles',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: 'Shoulder bag with buckles.png',
colorVariants: [],
},
{
id: 18,
name: 'Кожаная сумка в виде месяца',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Кожаная сумка в виде месяца.png',
colorVariants: [],
},
{
id: 19,
name: 'Большая плетеная кожаная сумка на плечо',
category: 'NEW NOW',
price: 'KGS 12 990',
image: '/Большая плетеная кожаная сумка на плечо.png',
colorVariants: [],
},
{
id: 20,
name: 'Кожаная сумка-шоппер пэчворк',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Кожаная сумка-шоппер пэчворк.png',
colorVariants: [],
},
];

const categories = [
{ name: 'Сумки', path: '/bags' },
{ name: 'Пальто', path: '/coats' },
{ name: 'Платья', path: '/dress' },
{ name: 'Ароматы', path: '/fragrances' },
{ name: 'Джемперы и кардиганы', path: '/jumpers-and-cardigans' },
{ name: 'Новинки', path: '/new' },
{ name: 'Брюки', path: '/pants' },
{ name: 'Рубашки и футболки', path: '/shirts-and-blouses' },
{ name: 'Обувь', path: '/shoes' },
];

export default function EwimvaBags(): JSX.Element {
const [isCategoryOpen, setIsCategoryOpen] = useState(false);
const navigate = useNavigate();

return (
<>
    <style>
    {`
        @media (max-width: 767px) {
        /* Сетка */
        .new-now-container div[class*="grid-cols-4"],
        .new-now-container div.grid-cols-4 {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0px !important;
            background-color: rgb(255, 255, 255) !important; /* Отладка */
        }

        /* Карточки */
        .new-now-container .product-card,
        .new-now-container .item-card,
        .new-now-container div[class*="product-card"],
        .new-now-container div[class*="item-card"] {
            font-size: 12px !important;
            background-color: rgb(255, 255, 255) !important; /* Отладка */
        }
        .new-now-container .product-card p,
        .new-now-container .product-card span,
        .new-now-container .product-card div,
        .new-now-container .item-card p,
        .new-now-container .item-card span,
        .new-now-container .item-card div {
            font-size: 12px !important;
        }

        /* Заголовки и кнопка */
        .new-now-container h1,
        .new-now-container h2 {
            font-size: 12px !important;
            margin-left: 0 !important;
            background-color: rgb(255, 255, 255) !important; /* Отладка */
        }
        .new-now-container button[class*="text-[14px]"] {
            font-size: 12px !important;
            margin-left: 0 !important;
            background-color: rgb(255, 255, 255) !important; /* Отладка */
        }

        /* Контейнер */
        .new-now-container .max-w-7xl {
            padding-left: 8px !important;
            padding-right: 8px !important;
        }

        /* Защита от масштабирования */
        .new-now-container {
            transform: none !important;
            zoom: 1 !important;
            scale: 1 !important;
        }
        }
    `}
    </style>
    <div className="new-now-container flex flex-col min-h-screen">
    <main className="flex-1">
        <div className="max-w-7xl mx-auto px-2 py-4">
        <h1 className="font-['Montserrat'] font-medium text-[24px] text-[#131313] leading-[28px] ml-[-20px]">
            Сумки
        </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
            <h2 className="font-bold text-[24px] text-[#131313] leading-[28px] ml-[-250px]">
            Сумки
            </h2>
            <div className="relative mt-2">
            <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-1 font-normal text-[14px] text-[#131313] hover:underline ml-[-250px]"
            >
                Категория
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
            </button>
            {isCategoryOpen && (
                <div className="absolute z-50 mt-2 w-[250px] bg-white shadow-lg rounded-md py-2 max-h-[400px] overflow-y-auto">
                {categories.map((category, index) => (
                    <button
                    key={index}
                    onClick={() => {
                        navigate(category.path);
                        setIsCategoryOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-[14px] font-['Montserrat'] font-normal text-[#131313] hover:bg-gray-100"
                    >
                    {category.name}
                    </button>
                ))}
                </div>
            )}
            </div>
        </div>
        </div>
        <ProductSection products={products.slice(0, 4)} />
        <ProductSection products={products.slice(4, 8)} />
        <ProductSection products={products.slice(8, 12)} />
        <ProductSection products={products.slice(12, 16)} />
        <ProductSection products={products.slice(16, 20)} />
        <ProductSection products={products.slice(20, 24)} />
        <ProductSection products={products.slice(24, 28)} />
    </main>
    </div>
</>
);
}