import React, { useState } from 'react';
import { ProductSection } from '../../components/ProductSection';
import { ChevronDownIcon } from 'lucide-react';

// Данные о товарах (фильтруем только платья)
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
id: 5,
name: 'Платье из смесового льна с оборкой',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/87087899-99-d6.png',
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
id: 14,
name: 'Асимметричное платье с воротником-бантом',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/87038267-05-d2-4.png',
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
id: 25,
name: 'Прямое платье с драпировкой',
category: 'CAPSULE',
price: 'KGS 12 990,00',
image: '/87038267-05-d2-2.png',
colorVariants: [],
},
];

// Список категорий (оставим тот же, что в NewNow)
const categories = [
'Платья и комбинезоны',
'Брюки',
'Джинсы',
'Куртки',
'Блейзеры',
'Рубашки и блузки',
'Топы',
'Джемперы и кардиганы',
'Тренчи и парки',
'Юбки',
'Жилеты',
'Футболки',
'Пальто',
'Шорты',
'Купальники',
'Пижамы',
'Кожа',
'Обувь',
'Сумки',
'Бижутерия',
'Ремни',
'Кошельки и бумажники',
'Шарфы и платки',
'Шапки и перчатки',
'Солнцезащитные очки',
'Больше аксессуаров',
'Ароматы',
'Кожаные аксессуары',
];

export const EwimvaDress = (): JSX.Element => {
const [isCategoryOpen, setIsCategoryOpen] = useState(false);

return (
<div className="flex flex-col min-h-screen">
    <main className="flex-1">
    <div className="max-w-7xl mx-auto px-2 py-4">
        <h1 className="font-['Montserrat'] font-medium text-[24px] text-[#131313] leading-[28px] ml-[-20px]">
        Платья
        </h1>
    </div>
    <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
        <h2 className="font-medium text-[24px] text-[#131313] leading-[28px] ml-[-250px]">
            ВЫБРАТЬ ПЛАТЬЕ
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
                <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-[14px] font-['Montserrat'] font-normal text-[#131313] hover:bg-gray-100"
                >
                    {category}
                </a>
                ))}
            </div>
            )}
        </div>
        </div>
    </div>
    <ProductSection products={products.slice(0, 4)} />
    <ProductSection products={products.slice(4, 8)} />
    </main>
</div>
);
};

export default EwimvaDress;