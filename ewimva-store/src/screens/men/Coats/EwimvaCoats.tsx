import React, { useState } from 'react';
import { ProductSection } from "../../../components/ProductSection";
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Данные о товарах из всех секций
const products = [
{
id: 1,
name: 'Lyocell V-neck midi dress',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/87028650-tc.png',
colorVariants: [],
},
{
id: 2,
name: 'Embroidered shirt dress with belt',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87029065-01-99999999-01.png',
colorVariants: [],
},
{
id: 3,
name: 'Полупрозрачное комбинированное платье',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/87007199-05-d9.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
},
{
id: 4,
name: 'Прямой комбинезон с короткими рукавами и поясом',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87077907-05-d7.png',
colorVariants: [],
},
{
id: 5,
name: 'Платье из смесового льна с оборкой',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/87087899-99-d6.png',
colorVariants: [],
},
{
id: 6,
name: 'Джемпер букле с круглой горловиной',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87060612-05-99999999-01.png',
colorVariants: [],
},
{
id: 7,
name: 'Вязаный жакет с нарядными пуговицами',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/87014094-99-d2.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
},
{
id: 8,
name: 'Вязаный кардиган с пуговицами-стразами',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87090451-05.png',
colorVariants: [],
},
{
id: 9,
name: 'Хлопковая футболка с контрастными окантовками',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87099211-01-d2.png',
colorVariants: [],
},
{
id: 10,
name: 'Футболка из смесового хлопка',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/77073266-ta-d1.png',
colorVariants: [],
},
{
id: 11,
name: 'Драпированное платье с цветочным принтом',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/87038267-05-d2-1.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
},
{
id: 12,
name: 'Вязаный жилет с нарядными пуговицами',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87079065-56-d2.png',
colorVariants: [],
},
{
id: 13,
name: 'Толстовка с высоким воротником и молнией',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/77097691-35.png',
colorVariants: [],
},
{
id: 14,
name: 'Асимметричное платье с воротником-бантом',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/87038267-05-d2-4.png',
colorVariants: [],
},
{
id: 15,
name: 'Меланжевый кардиган с косами',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/87050367-92.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
},
{
id: 16,
name: 'Футболка с асимметричной горловиной и сборками',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87085755-07.png',
colorVariants: [],
},
{
id: 17,
name: 'Тренч оверсайз с ремнем',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87093294-05-99999999-01.png',
colorVariants: [],
},
{
id: 18,
name: 'Парка оверсайз на молнии',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87038267-05-d2-5.png',
colorVariants: [],
},
{
id: 19,
name: 'Платье А-силуэта из кружева',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/87035749-30-d6.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
},
{
id: 20,
name: 'Длинный тренч с двубортной застежкой',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87075142-37-99999999-01.png',
colorVariants: [],
},
{
id: 21,
name: 'Костюмные брюки изо льна',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/87067706-06-d2--1-.png',
colorVariants: [],
},
{
id: 22,
name: 'Lyocell palazzo pants',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87028650-tc-99999999-01.png',
colorVariants: [],
},
{
id: 23,
name: 'Прямые костюмные брюки из смесового льна',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/87038267-05-d2.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
},
{
id: 24,
name: 'Прямые костюмные брюки из смесового льна',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87068640-05-d1.png',
colorVariants: [],
},
{
id: 25,
name: 'Прямое платье с драпировкой',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/87038267-05-d2-2.png',
colorVariants: [],
},
{
id: 26,
name: 'Короткий тренч из денима с поясом',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87075741-ts-02-d7.png',
colorVariants: [],
},
{
id: 27,
name: 'Объемный тренч из хлопка',
category: 'NEW NOW',
price: 'KGS 12 990,00',
image: '/87038267-05-d2-3.png',
colorVariants: [
    { color: '03', image: '/03-2.png' },
    { color: '32', image: '/32-2.png' },
],
},
{
id: 28,
name: 'Куртка-бомбер со сборками',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990,00',
image: '/87063290-92-d7.png',
colorVariants: [],
},
];

// Список категорий с соответствующими путями
const categories = [
{ name: 'Сумки', path: '/bags' },
{ name: 'Пальто', path: '/coats' },
{ name: 'Платья', path: '/dress' },
{ name: 'Ароматы', path: '/fragrances' },
{ name: 'Куртки', path: '/jackets' },
{ name: 'Джинсы', path: '/jeans' },
{ name: 'Джемперы и кардиганы', path: '/jumpers-and-cardigans' },
{ name: 'Новинки', path: '/new' },
{ name: 'Брюки', path: '/pants' },
{ name: 'Рубашки и блузки', path: '/shirts-and-blouses' },
{ name: 'Обувь', path: '/shoes' },
{ name: 'Топы', path: '/tops' },
{ name: 'Футболки', path: '/tshirts' },
{ name: 'Жилеты', path: '/vests' },
{ name: 'Вечерние', path: '/party' },
];

export default function Coats(): JSX.Element {
const [isCategoryOpen, setIsCategoryOpen] = useState(false);
const navigate = useNavigate();

return (
<div className="flex flex-col min-h-screen">
    <main className="flex-1">
    <div className="max-w-7xl mx-auto px-2 py-4">
        <h1 className="font-['Montserrat'] font-medium text-[24px] text-[#131313] leading-[28px] ml-[-20px]">
        Пальто
        </h1>
    </div>
    <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
        <h2 className="font-medium text-[24px] text-[#131313] leading-[28px] ml-[-250px]">
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
);
}