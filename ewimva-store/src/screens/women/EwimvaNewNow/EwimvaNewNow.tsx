import React, { useState } from 'react';
import { ProductSection } from "../../../components/ProductSection";
import { ChevronDownIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Данные о товарах из всех секций
const products = [
{
id: 1,
name: 'Длинный комбинезон с драпированной горловиной и поясом',
category: 'CAPSULE',
price: 'KGS 5 990',
image: '/Длинный комбинезон с драпированной горловиной и поясом.png',
colorVariants: [],
},
{
id: 2,
name: 'Платье с цветами и разрезом',
category: 'NEW NOW - SELECTION',
price: 'KGS 26 490',
image: '/Платье с цветами и разрезом.png',
colorVariants: [],
},
{
id: 3,
name: 'Сумка кроше на плечо',
category: 'CAPSULE',
price: 'KGS 6 990',
image: '/Сумка кроше на плечо.png',
colorVariants: [],
},
{
id: 4,
name: 'Шелковая рубашка с фуляром и бахромой',
category: 'NEW NOW - SELECTION',
price: 'KGS 17 990',
image: '/Шелковая рубашка с фуляром и бахромой.png',
colorVariants: [],
},
{
id: 5,
name: 'Асимметричная блузка с фуляром и бахромой',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 990',
image: '/Асимметричная блузка с фуляром и бахромой.png',
colorVariants: [],
},
{
id: 6,
name: 'Рубашка regular из смесового льна',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 490',
image: '/Рубашка regular из смесового льна.png',
colorVariants: [],
},
{
id: 7,
name: 'Объемная рубашка с вышивкой',
category: 'NEW NOW',
price: 'KGS 6 490',
image: '/Объемная рубашка с вышивкой.png',
colorVariants: [],
},
{
id: 8,
name: 'Вязаный кардиган с пуговицами-стразами',
category: 'NEW NOW - SELECTION',
price: 'KGS 4 290',
image: '/Вязаный кардиган с пуговицами-стразами.png',
colorVariants: [],
},
{
id: 9,
name: 'Джинсы wideleg с необработанными краями',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 990',
image: '/Джинсы wideleg с необработанными краями.png',
colorVariants: [],
},
{
id: 10,
name: 'Топ из лиоцелла с пуговицами на спине',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 990',
image: '/Топ из лиоцелла с пуговицами на спине.png',
colorVariants: [],
},
{
id: 11,
name: 'Платье миди с драпированным декольте',
category: 'NEW NOW',
price: 'KGS 12 990',
image: '/Платье миди с драпированным декольте.png',
colorVariants: [],
},
{
id: 12,
name: 'Драпированное платье с цветочным принтом',
category: 'NEW NOW - SELECTION',
price: 'KGS 8 990',
image: '/Драпированное платье с цветочным принтом.png',
colorVariants: [],
},
{
id: 13,
name: 'Джемпер из тонкого трикотажа с короткими рукавами',
category: 'CAPSULE',
price: 'KGS 5 999',
image: '/Джемпер из тонкого трикотажа с короткими рукавами.png',
colorVariants: [],
},
{
id: 14,
name: 'Льняной жакет с поясом',
category: 'CAPSULE',
price: 'KGS 12 990',
image: '/Льняной жакет с поясом.png',
colorVariants: [],
},
{
id: 15,
name: 'Прямые брюки из лиоцелла с защипами',
category: 'NEW NOW',
price: 'KGS 6 999 ',
image: '/Прямые брюки из лиоцелла с защипами.png',
colorVariants: [],
},
{
id: 16,
name: 'Рубашка из лиоцелла с запахом и завязками',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Рубашка из лиоцелла с запахом и завязками.png',
colorVariants: [],
},
{
id: 17,
name: 'Куртка бомбер с регулируемым низом',
category: 'NEW NOW - SELECTION',
price: 'KGS 14 990',
image: '/Куртка бомбер с регулируемым низом.png',
colorVariants: [],
},
{
id: 18,
name: 'Парка оверсайз на молнии',
category: 'NEW NOW - SELECTION',
price: 'KGS 9 999',
image: '/Парка оверсайз на молнии.png',
colorVariants: [],
},
{
id: 19,
name: 'Джемпер с косами и воротником perkins',
category: 'NEW NOW',
price: 'KGS 5 999',
image: '/Джемпер с косами и воротником perkins.png',
colorVariants: [],
},
{
id: 20,
name: 'Джемпер из шерсти с круглым вырезом горловины',
category: 'NEW NOW - SELECTION',
price: 'KGS 12 990',
image: '/Джемпер из шерсти с круглым вырезом горловины.png',
colorVariants: [],
},
{
id: 21,
name: 'Трикотажный жакет с люрексом и пуговицами',
category: 'CAPSULE',
price: 'KGS 7 990',
image: '/Трикотажный жакет с люрексом и пуговицами.png',
colorVariants: [],
},
{
id: 22,
name: 'Трикотажный кардиган с V-образной горловиной',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Трикотажный кардиган с V-образной горловиной.png',
colorVariants: [],
},
{
id: 23,
name: 'Вязаный жакет с нарядными пуговицами',
category: 'NEW NOW',
price: 'KGS 8 999',
image: '/Вязаный жакет с нарядными пуговицами.png',
colorVariants: [],
},
{
id: 24,
name: 'Прямые костюмные брюки из смесового льна',
category: 'NEW NOW - SELECTION',
price: 'KGS 6 999',
image: '/Прямые костюмные брюки из смесового льна.png',
colorVariants: [],
},
{
id: 25,
name: 'Платье из смесового льна с ажурным цветком',
category: 'CAPSULE',
price: 'KGS 9 990',
image: '/Платье из смесового льна с ажурным цветком.png',
colorVariants: [],
},
{
id: 26,
name: 'Короткий тренч из денима с поясом',
category: 'NEW NOW - SELECTION',
price: 'KGS 9 999',
image: '/Короткий тренч из денима с поясом.png',
colorVariants: [],
},
{
id: 27,
name: 'Льняные костюмные брюки без швов',
category: 'NEW NOW',
price: 'KGS 12 990',
image: '/Льняные костюмные брюки без швов.png',
colorVariants: [],
},
{
id: 28,
name: 'Куртка-бомбер со сборками',
category: 'NEW NOW - SELECTION',
price: 'KGS 5 999',
image: '/Куртка-бомбер со сборками.png',
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
{ name: 'вечерние', path: '/party' },
];

export default function EwimvaNewNow(): JSX.Element {
const [isCategoryOpen, setIsCategoryOpen] = useState(false);
const navigate = useNavigate();

return (
<div className="flex flex-col min-h-screen">
    <main className="flex-1">
    <div className="max-w-7xl mx-auto px-2 py-4">
        <h1 className="font-['Montserrat'] font-medium text-[24px] text-[#131313] leading-[28px] ml-[-20px]">
        New Now
        </h1>
    </div>
    <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
        <h2 className="font-medium text-[24px] text-[#131313] leading-[28px] ml-[-250px]">
            New Now
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