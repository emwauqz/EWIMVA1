import React, { useState } from 'react';
import { ProductSection } from "../../../components/ProductSection";
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
{
id: 1,
name: 'Шелковая рубашка с фуляром и бахромой',
category: 'NEW NOW - SELECTION',
price: 'KGS 17 990',
image: '/Шелковая рубашка с фуляром и бахромой.png',
colorVariants: [],
},
{
id: 2,
name: 'Асимметричная блузка с фуляром и бахромой',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Асимметричная блузка с фуляром и бахромой.png',
colorVariants: [],
},
{
id: 3,
name: 'Рубашка regular из смесового льна',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 490',
image: '/Рубашка regular из смесового льна.png',
colorVariants: [],
},
{
id: 4,
name: 'Объемная рубашка с вышивкой',
category: 'NEW NOW',
price: 'KGS 6 490',
image: '/Объемная рубашка с вышивкой.png',
colorVariants: [],
},
{
id: 5,
name: 'Джинсы wideleg с необработанными краями',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Джинсы wideleg с необработанными краями.png',
colorVariants: [],
},
{
id: 6,
name: 'Топ из лиоцелла с пуговицами на спине',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 990',
image: '/Топ из лиоцелла с пуговицами на спине.png',
colorVariants: [],
},
{
id: 7,
name: 'Рубашка из лиоцелла с запахом и завязками',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Рубашка из лиоцелла с запахом и завязками.png',
colorVariants: [],
},
{
id: 8,
name: 'Объемная рубашка изо льна',
category: 'NEW NOW - SELECTION',
price: 'KGS 7 990',
image: '/Объемная рубашка изо льна.png',
colorVariants: [],
},
{
id: 9,
name: 'Вязаный жилет с нарядными пуговицами',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Вязаный жилет с нарядными пуговицами.png',
colorVariants: [],
},
{
id: 10,
name: 'Объемная рубашка из лиоцелла',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Объемная рубашка из лиоцелла.png',
colorVariants: [],
},
{
id: 11,
name: 'Блузка со сборками и открытыми плечами',
category: 'NEW NOW',
price: 'KGS 6 990',
image: '/Блузка со сборками и открытыми плечами.png',
colorVariants: [
],
},
{
id: 12,
name: 'Рубашка с вышивкой',
category: 'NEW NOW - SELECTION',
price: 'KGS 7 990',
image: '/Рубашка с вышивкой.png',
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

export default function EwimvaShirtsAndBlouses(): JSX.Element {
const [isCategoryOpen, setIsCategoryOpen] = useState(false);
const navigate = useNavigate();

return (
<div className="flex flex-col min-h-screen">
    <main className="flex-1">
    <div className="max-w-7xl mx-auto px-2 py-4">
        <h1 className="font-['Montserrat'] font-medium text-[24px] text-[#131313] leading-[28px] ml-[-20px]">
        Рубашки и блузки
        </h1>
    </div>
    <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
        <h2 className="font-medium text-[24px] text-[#131313] leading-[28px] ml-[-250px]">
        Рубашки и блузки
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