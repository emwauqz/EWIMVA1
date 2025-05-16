import React, { useState } from 'react';
import { ProductSection } from "../../../components/ProductSection";
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
{
id: 1,
name: 'Cвитшот из вельвета с воротником perkins',
category: 'CAPSULE',
price: 'KGS 2 990',
image: '/Cвитшот из вельвета с воротником perkins.png',
colorVariants: [],
},
{
id: 2,
name: 'Толстовка оверсайз с принтованной надписью',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Толстовка оверсайз с принтованной надписью.png',
colorVariants: [],
},
{
id: 3,
name: 'Укороченный свитшот с капюшоном',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/Укороченный свитшот с капюшоном.png',
colorVariants: [
],
},
{
id: 4,
name: 'Джемпер с косами и ажурными деталями',
category: 'NEW NOW - SELECTION',
price: 'KGS 2 990',
image: '/Джемпер с косами и ажурными деталями.png',
colorVariants: [],
},
{
id: 5,
name: 'Укороченный кардиган из трикотажа',
category: 'CAPSULE',
price: 'KGS 5 990',
image: '/Укороченный кардиган из трикотажа.png',
colorVariants: [],
},
{
id: 6,
name: 'Джемпер с ажурным узором',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Джемпер с ажурным узором.png',
colorVariants: [],
},
{
id: 7,
name: 'Вязаный жакет с нарядными пуговицами',
category: 'NEW NOW',
price: 'KGS 8 999',
image: '/Вязаный жакет с нарядными пуговицами.png',
colorVariants: [],
},
{
id: 8,
name: 'Трикотажный кардиган с V-образной горловиной',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Трикотажный кардиган с V-образной горловиной.png',
colorVariants: [],
},
{
id: 9,
name: 'Трикотажный жакет с люрексом и пуговицами',
category: 'CAPSULE',
price: 'KGS 7 990',
image: '/Трикотажный жакет с люрексом и пуговицами.png',
colorVariants: [],
},
{
id: 10,
name: 'Джемпер из тонкого трикотажа с короткими рукавами',
category: 'CAPSULE',
price: 'KGS 5 999',
image: '/Джемпер из тонкого трикотажа с короткими рукавами.png',
colorVariants: [],
},
{
id: 11,
name: 'Вязаный кардиган с пуговицами-стразами',
category: 'NEW NOW - SELECTION',
price: 'KGS 4 290',
image: '/Вязаный кардиган с пуговицами-стразами.png',
colorVariants: [],
},
{
id: 12,
name: 'Джемпер из шерсти с круглым вырезом горловины',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Джемпер из шерсти с круглым вырезом горловины.png',
colorVariants: [],
},
{
id: 13,
name: 'Джемпер с косами и воротником perkins',
category: 'NEW NOW',
price: 'KGS 5 999',
image: '/Джемпер с косами и воротником perkins.png',
colorVariants: [],
},
{
id: 14,
name: 'Куртка-бомбер со сборками',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Куртка-бомбер со сборками.png',
colorVariants: [],
},
{
id: 15,
name: 'Парка оверсайз на молнии',
category: 'NEW NOW - SELECTION',
price: 'KGS 9 999',
image: '/Парка оверсайз на молнии.png',
colorVariants: [],
},
{
id: 16,
name: 'Куртка бомбер с регулируемым низом',
category: 'NEW NOW - SELECTION',
price: 'KGS 14 990',
image: '/Куртка бомбер с регулируемым низом.png',
colorVariants: [],
},
{
id: 17,
name: 'Льняной жакет с поясом',
category: 'CAPSULE',
price: 'KGS 12 990',
image: '/Льняной жакет с поясом.png',
colorVariants: [],
},
{
id: 18,
name: 'Вязаный жакет с нарядными пуговицами1',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 999',
image: '/Вязаный жакет с нарядными пуговицами1.png',
colorVariants: [],
},
{
id: 19,
name: 'Джемпер с воротником perkins и короткими рукавами',
category: 'NEW NOW',
price: 'KGS 5 990',
image: '/Джемпер с воротником perkins и короткими рукавами.png',
colorVariants: [],
},
{
id: 20,
name: 'Джемпер с воротником perkins1',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Джемпер с воротником perkins1.png',
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

export default function EwimvaJumpersAndCardigans(): JSX.Element {
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
            Джемперы и кардиганы
        </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
            <h2 className="font-bold text-[24px] text-[#131313] leading-[28px] ml-[-250px]">
            Джемперы и кардиганы
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