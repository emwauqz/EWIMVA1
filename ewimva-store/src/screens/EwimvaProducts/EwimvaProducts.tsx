import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { HeartIcon } from "lucide-react";

interface ColorVariant {
color: string;
image: string;
}

interface Product {
id: number;
name: string;
category: string;
price: string;
image: string;
colorVariants: ColorVariant[];
alt: string;
}

const products: Product[] = [
{
id: 1,
image: "/87065751-1.png",
name: "Топ на бретелях с квадратным декольте",
alt: "Топ на бретелях с квадратным декольте",
category: "TOPS",
price: "KGS 3 490,00",
colorVariants: [
    { color: "Экрю", image: "/color-ecru.png" },
    { color: "Черный", image: "/color-black.png" },
    { color: "Синий", image: "/color-blue.png" },
],
},
{
id: 2,
image: "/87037183-2.png",
name: "Топ из тонкого трикотажа с декольте",
alt: "Топ из тонкого трикотажа с декольте",
category: "TOPS",
price: "KGS 3 490,00",
colorVariants: [],
},
{
id: 3,
image: "/87077180-3.png",
name: "Трикотажный топ с воротником поло",
alt: "Трикотажный топ с воротником поло",
category: "TOPS",
price: "KGS 3 490,00",
colorVariants: [],
},
{
id: 4,
image: "/87026337-4.png",
name: "Укороченный хлопковый топ",
alt: "Укороченный хлопковый топ",
category: "TOPS",
price: "KGS 3 490,00",
colorVariants: [],
},
{
id: 5,
image: "/87037184-05.png",
name: "Вязаный топ с V-образной горловиной",
alt: "Вязаный топ с V-образной горловиной",
category: "TOPS",
price: "KGS 3 490,00",
colorVariants: [],
},
];

export const EwimvaProducts = (): JSX.Element => {
const navigate = useNavigate();
const [favorites, setFavorites] = useState<number[]>(() => {
const savedFavorites = localStorage.getItem("favorites");
return savedFavorites ? JSON.parse(savedFavorites) : [];
});

useEffect(() => {
localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);

const handleFavoriteToggle = (productId: number) => {
setFavorites((prev) =>
    prev.includes(productId)
    ? prev.filter((id) => id !== productId)
    : [...prev, productId]
);
};

const handleProductClick = (productId: number) => {
navigate(`/product/${productId}`);
};

return (
<div className="bg-white flex flex-col items-center w-full">
    <div className="w-full max-w-[1920px] py-8 px-8">
    <h2 className="font-bold text-[24px] text-[#131313] mb-[68px] font-['Inter',Helvetica] leading-[28px]">
        Все товары
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
        <Card
            key={product.id}
            className="w-full max-w-[308px] h-[471px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleProductClick(product.id)}
        >
            <CardContent className="p-0">
            <div className="relative h-full">
                <img
                className="w-full h-[432px] object-cover"
                alt={product.alt}
                src={product.image}
                />
                <button
                className="absolute top-2 right-2 bg-transparent border-none cursor-pointer"
                aria-label="Добавить в избранное"
                onClick={(e) => {
                    e.stopPropagation();
                    handleFavoriteToggle(product.id);
                }}
                >
                <HeartIcon
                    className={`w-6 h-6 ${
                    favorites.includes(product.id) ? "fill-black" : "fill-none"
                    }`}
                />
                </button>
                <div className="p-2">
                <p className="font-normal text-[14px] text-[#131313] leading-[16px] font-['Inter',Helvetica]">
                    {product.name}
                </p>
                <p className="font-semibold text-[14px] text-[#131313] leading-[16px] mt-1 font-['Inter',Helvetica]">
                    {product.price}
                </p>
                </div>
            </div>
            </CardContent>
        </Card>
        ))}
    </div>
    </div>
</div>
);
};

export default EwimvaProducts;