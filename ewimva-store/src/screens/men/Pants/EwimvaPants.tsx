import React, { useState } from 'react';
import { ProductSection } from "../../../components/ProductSection";
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
{
id: 1,
name: 'Технологичные брюки relaxed fit',
category: 'CAPSULE',
price: 'KGS 7 990',
image: '/Технологичные брюки relaxed fit.png',
colorVariants: [],
},
{
id: 2,
name: 'Брюки изо льна slim fit',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Брюки изо льна slim fit.png',
colorVariants: [],
},
{
id: 3,
name: 'Костюмные брюки Monaco slim fit',
category: 'CAPSULE',
price: 'KGS 5 990',
image: '/Костюмные брюки Monaco slim fit.png',
colorVariants: [],
},
{
id: 4,
name: 'Костюмные брюки Monaco slim fit',
category: 'NEW NOW - SELECTION',
price: 'KGS 7 990',
image: '/Костюмные брюки Monaco slim fit1.png',
colorVariants: [],
},
{
id: 5,
name: 'Джинсы хлопок и лен regular fit с',
category: 'CAPSULE',
price: 'KGS 6 990',
image: '/Джинсы хлопок и лен regular fit с.png',
colorVariants: [],
},
{
id: 6,
name: 'Бермуды из хлопка с вышивкой',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Бермуды из хлопка с вышивкой.png',
colorVariants: [],
},
{
id: 7,
name: 'Бермуды slim fit лен и лиоцелл',
category: 'NEW NOW',
price: 'KGS 6 990',
image: '/Бермуды slim fit лен и лиоцелл.png',
colorVariants: [],
},
{
id: 8,
name: 'Джинсы loose fit',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 990',
image: '/Джинсы loose fit.png',
colorVariants: [],
},
];

const categories = [
{ name: 'Куртки и верхняя одежда', path: '/men/jackets-outerwear' },
{ name: 'Новинки', path: '/men/new' },
{ name: 'Брюки', path: '/men/pants' },
{ name: 'Рубашки', path: '/men/shirts' },
{ name: 'Костюмы', path: '/men/suit' },
];

export default function Pants(): JSX.Element {
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
            Брюки
        </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
            <h2 className="font-bold text-[24px] text-[#131313] leading-[28px] ml-[-250px]">
            Брюки
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