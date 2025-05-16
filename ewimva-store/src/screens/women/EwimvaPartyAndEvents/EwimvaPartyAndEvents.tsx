import React, { useState } from 'react';
import { ProductSection } from "../../../components/ProductSection";
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
{
id: 1,
name: 'Платье с цветами и разрезом',
category: 'CAPSULE',
price: 'KGS 26 490',
image: '/Платье с цветами и разрезом.png',
colorVariants: [],
},
{
id: 2,
name: 'Платье с пайетками и вырезом на спине',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/Платье с пайетками и вырезом на спине.png',
colorVariants: [],
},
{
id: 3,
name: 'Платье миди с драпированным декольте',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/Платье миди с драпированным декольте.png',
colorVariants: [
],
},
{
id: 4,
name: 'Прямой комбинезон с короткими рукавами и поясом',
category: 'NEW NOW - SELECTION',
price: 'KGS 9 990',
image: '/Прямой комбинезон с короткими рукавами и поясом.png',
colorVariants: [],
},
{
id: 5,
name: 'Платье из смесового льна с оборкой',
category: 'CAPSULE',
price: 'KGS 22 999',
image: '/Платье из смесового льна с оборкой.png',
colorVariants: [],
},
{
id: 6,
name: 'Драпированное платье с цветочным принтом',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 990',
image: '/Драпированное платье с цветочным принтом.png',
colorVariants: [],
},
{
id: 7,
name: 'Платье из смесового льна с ажурным цветком',
category: 'CAPSULE',
price: 'KGS 9 990',
image: '/Платье из смесового льна с ажурным цветком.png',
colorVariants: [],
},
{
id: 8,
name: 'Асимметричное атласное платье с бахромой',
category: 'NEW NOW - SELECTION',
price: 'KGS 20 990',
image: '/Асимметричное атласное платье с бахромой.png',
colorVariants: [],
},
{
id: 9,
name: 'Платье халтер с цветочным украшением',
category: 'NEW NOW - SELECTION',
price: 'KGS 32 990',
image: '/Платье халтер с цветочным украшением.png',
colorVariants: [],
},
{
id: 10,
name: 'Платье с американской проймой и цветком',
category: 'NEW NOW - SELECTION',
price: 'KGS 32 990',
image: '/Платье с американской проймой и цветком.png',
colorVariants: [],
},
{
id: 11,
name: 'Длинное платье с нашитыми бусинами',
category: 'NEW NOW',
price: 'KGS 32 990',
image: '/Длинное платье с нашитыми бусинами.png',
colorVariants: [
],
},
{
id: 12,
name: 'Длинное платье с вырезом халтер',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Длинное платье с вырезом халтер.png',
colorVariants: [],
},
{
id: 13,
name: 'Асимметричное платье с воротником-бантом',
category: 'CAPSULE',
price: 'KGS 27 990',
image: '/Асимметричное платье с воротником-бантом.png',
colorVariants: [],
},
{
id: 14,
name: 'Платье из тонкого трикотажа с силуэтом "эвазе"',
category: 'CAPSULE',
price: 'KGS 12 990',
image: '/Платье из тонкого трикотажа с силуэтом "эвазе".png',
colorVariants: [],
},
{
id: 15,
name: 'Платье с бахромой и декольте на спине',
category: 'NEW NOW',
price: 'KGS 35 990',
image: '/Платье с бахромой и декольте на спине.png',
colorVariants: [
],
},
{
id: 16,
name: 'Платье из смесового льна с вышивкой',
category: 'NEW NOW - SELECTION',
price: 'KGS 15 990',
image: '/Платье из смесового льна с вышивкой.png',
colorVariants: [],
},
{
id: 17,
name: 'Платье-колокол с драпировкой на талии',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Платье-колокол с драпировкой на талии.png',
colorVariants: [],
},
{
id: 18,
name: 'Льняное платье с поясом',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Льняное платье с поясом.png',
colorVariants: [],
},
{
id: 19,
name: 'Платье А-силуэта из кружева',
category: 'NEW NOW',
price: 'KGS 6 990',
image: '/87035749-30-d6.png',
colorVariants: [
],
},
{
id: 20,
name: 'Шелковое платье с драпированным декольте',
category: 'NEW NOW - SELECTION',
price: 'KGS 22 990',
image: '/Шелковое платье с драпированным декольте.png',
colorVariants: [],
},
{
id: 21,
name: 'Платье с вышитыми цветами и бахромой',
category: 'CAPSULE',
price: 'KGS 55 990',
image: '/Платье с вышитыми цветами и бахромой.png',
colorVariants: [],
},
{
id: 22,
name: 'Асимметричное платье из сеточки с драпировкой',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 990',
image: '/Асимметричное платье из сеточки с драпировкой.png',
colorVariants: [],
},
{
id: 23,
name: 'ПДлинное плиссированное платье',
category: 'NEW NOW',
price: 'KGS 14 990',
image: '/Длинное плиссированное платье.png',
colorVariants: [
],
},
{
id: 24,
name: 'Полосатое платье с атласным блеском',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Полосатое платье с атласным блеском.png',
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

export default function EwimvaPartyAndEvents(): JSX.Element {
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
            Вечерние
        </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
            <h2 className="font-bold text-[24px] text-[#131313] leading-[28px] ml-[-250px]">
            Вечерние
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