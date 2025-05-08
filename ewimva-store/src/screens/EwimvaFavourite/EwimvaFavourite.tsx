import React, { useState, useEffect } from 'react';
import { ProductSection } from '../../components/ProductSection';
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { HeartIcon } from "lucide-react";

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

export default function EwimvaFavourite(): JSX.Element {
  const [favorites, setFavorites] = useState<number[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const favoriteProducts = products.filter((product) => favorites.includes(product.id));

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {favoriteProducts.length > 0 ? (
          <ProductSection
            title="FAVOURITES"
            products={favoriteProducts}
          />
        ) : (
          <div className="max-w-7xl mx-auto px-4 py-8 text-center">
            <p className="font-['Montserrat'] text-[18px] text-[#131313]">
              No items in favorites yet.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

const ItemWrapper = (): JSX.Element => {
  return (
    <Card className="w-full max-w-[479px] h-auto">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="w-full h-[671px] bg-[url(/-------------------------------------------------.png)] bg-cover bg-center" />

        {/* Product Information */}
        <div className="p-2 space-y-2">
          <h3 className="font-normal text-[11.8px] text-[#131313] font-['Inter',Helvetica] leading-[18px]">
            Прямой костюмный пиджак
          </h3>

          <p className="font-normal text-[12.8px] text-[#131313] font-['Inter',Helvetica] leading-[18px]">
            KGS 8 990,00
          </p>

          {/* Color Options */}
          <div className="flex items-center gap-3 mt-2">
            {/* First color option */}
            <div className="w-3.5 h-3.5 rounded-[7px] bg-[url(/52.png)] bg-cover bg-center" />

            {/* Second color option with border */}
            <div className="relative w-[18px] h-[18px] rounded-[9px]">
              <div className="absolute w-3.5 h-3.5 top-0.5 left-0.5 rounded-[7px] bg-[url(/05.png)] bg-cover bg-center" />
              <div className="w-[18px] h-[18px] rounded-[9px] border border-solid border-[#131313] absolute top-0 left-0" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Item = (): JSX.Element => {
  return (
    <Card className="w-full h-full relative">
      <CardContent className="p-0 flex flex-col h-full">
        <div
          className="bg-[url(/----------------------------------------.png)] w-full h-[671px] bg-cover bg-center flex-grow"
          aria-label="Product image"
        />
        <div className="p-2 space-y-0.5">
          <h3 className="text-[11.7px] font-normal text-[#131313] font-['Inter',Helvetica] leading-[18px]">
            Структурный пиджак с поясом
          </h3>
          <p className="text-[12.6px] font-normal text-[#131313] font-['Inter',Helvetica] leading-[18px]">
            KGS 12 990,00
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const DivWrapper = (): JSX.Element => {
  return (
    <Card className="w-[479px] h-[744px] relative border-none">
      <CardContent className="p-0">
        <div className="bg-[url(/---------------------------------------------.png)] w-full h-[671px] bg-cover bg-center" />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-2 space-y-0">
        <h3 className="font-normal text-[11.7px] text-[#131313] font-['Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
          Костюмный пиджак в узкую полоску
        </h3>
        <p className="text-[12.8px] font-['Inter',Helvetica] font-normal text-[#131313] tracking-[0] leading-[18px] whitespace-nowrap">
          KGS 9 990,00
        </p>
        <button
          className="absolute bottom-[35px] right-[12px] bg-transparent border-none cursor-pointer"
          aria-label="Add to favorites"
        >
          <HeartIcon className="w-[17px] h-[15px]" />
        </button>
      </CardFooter>
    </Card>
  );
};

const Div = (): JSX.Element => {
  // Product data
  const product = {
    title: "Трикотажный пиджак с геометрическим узором",
    price: "KGS 4 990,00",
    image: "/-------------------------------------------------------.png",
    colorOptions: [
      { id: 1, color: "/43.png", selected: true },
      { id: 2, color: "/07.png", selected: false },
    ],
  };

  return (
    <Card className="w-full max-w-[479px] h-auto">
      <CardContent className="p-0">
        {/* Product Image */}
        <div
          className="w-full h-[671px] bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
        />

        {/* Product Info */}
        <div className="p-2 space-y-2">
          {/* Product Title */}
          <h3 className="font-normal text-[#131313] text-[11.7px] font-['Inter',Helvetica] leading-[18px]">
            {product.title}
          </h3>

          {/* Product Price */}
          <p className="text-[12.8px] font-['Inter',Helvetica] font-normal text-[#131313] leading-[18px]">
            {product.price}
          </p>

          {/* Color Options */}
          <div className="flex items-center gap-3">
            {product.colorOptions.map((option) => (
              <div
                key={option.id}
                className={`relative ${option.selected ? "cursor-default" : "cursor-pointer"}`}
              >
                <div
                  className="w-3.5 h-3.5 rounded-[7px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${option.color})` }}
                />
                {option.selected && (
                  <div className="absolute inset-0 w-[18px] h-[18px] -m-0.5 rounded-[9px] border border-solid border-[#131313]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};