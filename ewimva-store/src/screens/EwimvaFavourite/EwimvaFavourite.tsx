import React, { useState, useEffect } from 'react';
import { ProductSection } from '../../components/ProductSection';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
      <Header />
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
      <Footer />
    </div>
  );
}

// import React from "react";
// import { DivByAnima } from "./sections/DivByAnima";
// import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
// import Header from '../../components/Header';
// import { ItemByAnima } from "./sections/ItemByAnima";
// import { ItemWrapperByAnima } from "./sections/ItemWrapperByAnima";
// import Footer from "../../components/Footer";


// export const EwimvaFavourite = (): JSX.Element => {
//   return (
//     <div className="bg-white flex flex-col items-center w-full" data-model-id="1:8">
//       <div className="bg-white w-full max-w-[1440px] relative">
//         <Header />
        
//         <div className="px-8 mt-[82px] mb-8">
//           <div className="font-bold text-[#131313] text-[12.2px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] mb-2">
//             МОИ ФАВОРИТЫ
//           </div>
//           <div className="font-bold text-[#131313] text-[12.6px] [font-family:'Inter',Helvetica] tracking-[0] leading-[18px]">
//             КАТЕГОРИЯ
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
//           <div className="relative">
//             <ItemByAnima />
//             <img
//               className="absolute w-[17px] h-[15px] bottom-[35px] right-[28px]"
//               alt="Vector"
//               src="/vector_favourite.svg"
//             />
//           </div>
//           <ItemWrapperByAnima />
//           <DivWrapperByAnima />
//           <DivByAnima />
//         </div>

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default EwimvaFavourite;
