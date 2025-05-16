import React, { useState } from 'react';
import { ProductSection } from "../../../components/ProductSection";
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
{
id: 1,
name: 'Двубортное пальто с шерстью',
category: 'CAPSULE',
price: 'KGS 32 990',
image: '/Двубортное пальто с шерстью.png',
colorVariants: [],
},
{
id: 2,
name: 'Классический тренч с поясом',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Классический тренч с поясом.png',
colorVariants: [],
},
{
id: 3,
name: 'Длинное структурное пальто из шерсти',
category: 'CAPSULE',
price: 'KGS 25 990',
image: '/Длинное структурное пальто из шерсти.png',
colorVariants: [],
},
{
id: 4,
name: 'Пальто из шерсти ручной работы с поясом',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Пальто из шерсти ручной работы с поясом.png',
colorVariants: [],
},
{
id: 5,
name: 'Пальто из шерсти в мелкую гусиную лапку',
category: 'CAPSULE',
price: 'KGS 12 990',
image: '/Пальто из шерсти в мелкую гусиную лапку.png',
colorVariants: [],
},
{
id: 6,
name: 'Пальто с лацканами шерсть',
category: 'NEW NOW - SELECTION',
price: 'KGS 13 990',
image: '/Пальто с лацканами шерсть.png',
colorVariants: [],
},
{
id: 7,
name: 'Пальто из искусственного меха с аппликациями',
category: 'NEW NOW',
price: 'KGS 17 990',
image: '/Пальто из искусственного меха с аппликациями.png',
colorVariants: [],
},
{
id: 8,
name: 'Объемное пальто из шерсти ручной работы',
category: 'NEW NOW - SELECTION',
price: 'KGS 15 990',
image: '/Объемное пальто из шерсти ручной работы.png',
colorVariants: [],
},
{
id: 9,
name: 'Двубортное пальто с шерстью',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Двубортное пальто с шерстью1.png',
colorVariants: [],
},
{
id: 10,
name: 'Вязаное пальто со съемным шарфом',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Вязаное пальто со съемным шарфом.png',
colorVariants: [],
},
{
id: 11,
name: 'Пальто из шерсти с поясом',
category: 'NEW NOW',
price: 'KGS 25 990',
image: '/Пальто из шерсти с поясом.png',
colorVariants: [
],
},
{
id: 12,
name: 'Пальто миди из шерсти с уютным воротником',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Пальто миди из шерсти с уютным воротником.png',
colorVariants: [],
},
{
id: 13,
name: 'Пальто из шерсти с поясом',
category: 'CAPSULE',
price: 'KGS 25 990',
image: '/Пальто из шерсти с поясом1.png',
colorVariants: [],
},
{
id: 14,
name: 'Объемное пальто из шерсти ручной работы',
category: 'CAPSULE',
price: 'KGS 12 990',
image: '/Объемное пальто из шерсти ручной работы1.png',
colorVariants: [],
},
{
id: 15,
name: 'Короткое пальто из чистой шерсти',
category: 'NEW NOW',
price: 'KGS 25 990',
image: '/Короткое пальто из чистой шерсти.png',
colorVariants: [
],
},
{
id: 16,
name: 'Длинное структурное пальто из шерсти',
category: 'NEW NOW - SELECTION',
price: 'KGS 17 990',
image: '/Длинное структурное пальто из шерсти1.png',
colorVariants: [],
},
{
id: 17,
name: 'Длинное пальто оверсайз ручной работы',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Длинное пальто оверсайз ручной работы2.png',
colorVariants: [],
},
{
id: 18,
name: 'Пальто миди из шерсти с высоким воротником',
category: 'NEW NOW - SELECTION',
price: 'KGS 16 990',
image: '/Пальто миди из шерсти с высоким воротником.png',
colorVariants: [],
},
{
id: 19,
name: 'Пальто из шерсти с высоким воротником3',
category: 'NEW NOW',
price: 'KGS 22 990',
image: '/Пальто из шерсти с высоким воротником3.png',
colorVariants: [
],
},
{
id: 20,
name: 'Двубортное пальто с лацканами3',
category: 'NEW NOW - SELECTION',
price: 'KGS 22 990',
image: '/Двубортное пальто с лацканами3.png',
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

export default function EwimvaCoats(): JSX.Element {
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
            Пальто
        </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
            <h2 className="font-bold text-[24px] text-[#131313] leading-[28px] ml-[-250px]">
            Пальто
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