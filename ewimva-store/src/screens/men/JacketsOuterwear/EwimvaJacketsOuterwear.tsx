import React, { useState } from 'react';
import { ProductSection } from "../../../components/ProductSection";
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
{
id: 1,
name: 'Рубашка лен и хлопок с карманом',
category: 'CAPSULE',
price: 'KGS 7 990',
image: '/Рубашка лен и хлопок с карманом.png',
colorVariants: [],
},
{
id: 2,
name: 'Куртка-бомбер с эффектом замши',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Куртка-бомбер с эффектом замши.png',
colorVariants: [],
},
{
id: 3,
name: 'Куртка-бомбер с эффектом замши',
category: 'CAPSULE',
price: 'KGS 5 990',
image: '/Куртка-бомбер с эффектом замши1.png',
colorVariants: [],
},
{
id: 4,
name: 'Quilted water-repellent bomber jacket',
category: 'NEW NOW - SELECTION',
price: 'KGS 7 990',
image: '/Quilted water-repellent bomber jacket.png',
colorVariants: [],
},
{
id: 5,
name: 'Куртка regular fit из шерсти',
category: 'CAPSULE',
price: 'KGS 6 990',
image: '/Куртка regular fit из шерсти.png',
colorVariants: [],
},
{
id: 6,
name: 'Водоотталкивающий бомбер с карманами',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Водоотталкивающий бомбер с карманами.png',
colorVariants: [],
},
{
id: 7,
name: 'Классический водоотталкивающий тренч',
category: 'NEW NOW',
price: 'KGS 6 990',
image: '/Классический водоотталкивающий тренч.png',
colorVariants: [],
},
{
id: 8,
name: 'Водоотталкивающий плащ из хлопка',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 990',
image: '/Водоотталкивающий плащ из хлопка.png',
colorVariants: [],
},
{
id: 9,
name: 'Водоотталкивающая куртка с карманами',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Водоотталкивающая куртка с карманами.png',
colorVariants: [],
},
{
id: 10,
name: 'Стеганая куртка с перьевым наполнителем',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Стеганая куртка с перьевым наполнителем.png',
colorVariants: [],
},
{
id: 11,
name: 'Куртка-бомбер из искусственной кожи',
category: 'NEW NOW',
price: 'KGS 7 990',
image: '/Куртка-бомбер из искусственной кожи.png',
colorVariants: [],
},
{
id: 12,
name: 'Бомбер regular fit из фланели',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Бомбер regular fit из фланели.png',
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

export default function JacketsOuterwear(): JSX.Element {
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
            Куртки
        </h1>
        </div>
        <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
            <h2 className="font-bold text-[24px] text-[#131313] leading-[28px] ml-[-250px]">
            Куртки
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