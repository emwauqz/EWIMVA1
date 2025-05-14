import React, { useState } from 'react';
import { ProductSection } from "../../../components/ProductSection";
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
{
id: 1,
name: 'Рубашка с жатым эффектом',
category: 'CAPSULE',
price: 'KGS 7 990',
image: '/Рубашка с жатым эффектом.png',
colorVariants: [],
},
{
id: 2,
name: 'Рубашка из ажурного трикотажа',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Рубашка из ажурного трикотажа.png',
colorVariants: [],
},
{
id: 3,
name: 'Рубашка оксфорд',
category: 'CAPSULE',
price: 'KGS 5 990',
image: '/Рубашка оксфорд.png',
colorVariants: [],
},
{
id: 4,
name: 'Рубашка комфорт стретч non iron',
category: 'NEW NOW - SELECTION',
price: 'KGS 7 990',
image: '/Рубашка комфорт стретч non iron.png',
colorVariants: [],
},
{
id: 5,
name: 'Рубашка для боулинга со структурой кроше',
category: 'CAPSULE',
price: 'KGS 6 990',
image: '/Рубашка в полоску.png',
colorVariants: [],
},
{
id: 6,
name: 'Рубашка в полоску',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Рубашка в полоску1.png',
colorVariants: [],
},
{
id: 7,
name: 'Рубашка из лиоцелла с карманом',
category: 'NEW NOW',
price: 'KGS 6 990',
image: '/Рубашка из лиоцелла с карманом.png',
colorVariants: [],
},
{
id: 8,
name: 'Рубашка лен',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 990',
image: '/Рубашка лен.png',
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

export default function Shirts(): JSX.Element {
const [isCategoryOpen, setIsCategoryOpen] = useState(false);
const navigate = useNavigate();

return (
<div className="flex flex-col min-h-screen">
    <main className="flex-1">
    <div className="max-w-7xl mx-auto px-2 py-4">
        <h1 className="font-['Montserrat'] font-medium text-[24px] text-[#131313] leading-[28px] ml-[-20px]">
        Рубашки
        </h1>
    </div>
    <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
        <h2 className="font-medium text-[24px] text-[#131313] leading-[28px] ml-[-250px]">
            Рубашки
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
);
}