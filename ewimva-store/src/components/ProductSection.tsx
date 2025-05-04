import React, { useState, useEffect } from 'react';
import { HeartIcon } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

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
}

interface ProductSectionProps {
title?: string;
subtitle?: string;
products: Product[];
}

export const ProductSection = ({ title, subtitle, products }: ProductSectionProps): JSX.Element => {
const [favorites, setFavorites] = useState<number[]>(() => {
const savedFavorites = localStorage.getItem('favorites');
return savedFavorites ? JSON.parse(savedFavorites) : [];
});

useEffect(() => {
localStorage.setItem('favorites', JSON.stringify(favorites));
}, [favorites]);

const handleFavoriteToggle = (productId: number) => {
setFavorites((prev) =>
    prev.includes(productId)
    ? prev.filter((id) => id !== productId)
    : [...prev, productId]
);
};

return (
<section className="w-full py-8">
    {(title || subtitle) && (
    <div className="max-w-7xl mx-auto px-4 mb-6">
        {title && (
        <h2 className="font-['Montserrat'] font-medium text-[24px] text-[#131313] leading-[28px]">
            {title}
        </h2>
        )}
        {subtitle && (
        <p className="font-['Montserrat'] font-normal text-[14px] text-[#131313] leading-[18px] mt-2">
            {subtitle}
        </p>
        )}
    </div>
    )}
    <div className="w-full py-0">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5">
        {products.map((product) => (
        <Card key={product.id} className="rounded-none border-0 relative">
            <CardContent className="p-0">
            <div className="relative">
                <img
                className="w-full h-auto object-cover"
                alt={product.name}
                src={product.image}
                />
            </div>
            <div className="p-2">
            <button
                className="absolute bottom-[35px] right-[12px] bg-transparent border-none cursor-pointer"
                aria-label="Add to favorites"
                onClick={() => handleFavoriteToggle(product.id)}
                >
                <HeartIcon
                    className={`w-[17px] h-[15px] ${
                    favorites.includes(product.id) ? 'fill-black' : 'fill-none'
                    }`}
                />
                </button>
                <div className="font-['Montserrat'] text-[10px] font-normal text-[#131313] leading-[12px] whitespace-nowrap">
                {product.category}
                </div>
                <div className="font-['Montserrat'] text-[14px] font-normal text-[#131313] leading-[16px] mt-1">
                {product.name}
                </div>
                <div className="font-['Montserrat'] text-[14px] font-semibold text-[#131313] leading-[16px] mt-1">
                {product.price}
                </div>
                {product.colorVariants.length > 0 && (
                <div className="flex gap-2 mt-2">
                    {product.colorVariants.map((variant, index) => (
                    <div
                        key={index}
                        className="w-3 h-3 rounded-none bg-cover bg-[50%_50%]"
                        style={{ backgroundImage: `url(${variant.image})` }}
                    />
                    ))}
                </div>
                )}
            </div>
            </CardContent>
        </Card>
        ))}
    </div>
    </div>
</section>
);
};