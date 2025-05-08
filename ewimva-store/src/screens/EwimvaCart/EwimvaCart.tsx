import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { HeartIcon } from 'lucide-react';

const initialCartItems = [
{
id: 1,
name: 'Lyocell V-neck midi dress',
price: 'KGS 12 990,00',
image: '/87028650-tc.png',
quantity: 1,
colorVariants: [],
},
{
id: 2,
name: 'Прямое платье с драпировкой',
price: 'KGS 12 990,00',
image: '/87038267-05-d2-2.png',
quantity: 2,
colorVariants: [{ color: '03', image: '/03-2.png' }, { color: '32', image: '/32-2.png' }],
},
];

const EwimvaCart = (): JSX.Element => {
const [cartItems, setCartItems] = useState(initialCartItems);

// Изменение количества товара
const handleQuantityChange = (id: number, delta: number) => {
setCartItems((prev) =>
    prev.map((item) =>
    item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    )
);
};

// Удаление товара из корзины
const handleRemoveItem = (id: number) => {
setCartItems((prev) => prev.filter((item) => item.id !== id));
};

// Расчет общей суммы
const totalAmount = cartItems.reduce(
(sum, item) => sum + parseFloat(item.price.replace('KGS ', '').replace(',', '')) * item.quantity,
0
);

return (
<div className="flex flex-col min-h-screen">
    <main className="flex-1">
    {cartItems.length > 0 ? (
        <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="font-['Montserrat'] text-[24px] text-[#131313] leading-[28px] mb-6">
            Корзина
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
            <Card key={item.id} className="w-full max-w-[479px] h-auto">
                <CardContent className="p-0">
                <div
                    className="w-full h-[671px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-2 space-y-2">
                    <h3 className="font-normal text-[11.8px] text-[#131313] font-['Inter',Helvetica] leading-[18px]">
                    {item.name}
                    </h3>
                    <p className="font-normal text-[12.8px] text-[#131313] font-['Inter',Helvetica] leading-[18px]">
                    {item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                    {item.colorVariants.map((color, index) => (
                        <div
                        key={index}
                        className="w-3.5 h-3.5 rounded-[7px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${color.image})` }}
                        />
                    ))}
                    </div>
                    <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="text-[#131313]"
                    >
                        -
                    </Button>
                    <span className="text-[12.8px] font-['Inter',Helvetica] text-[#131313]">
                        {item.quantity}
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="text-[#131313]"
                    >
                        +
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-[#131313]"
                    >
                        <HeartIcon className="w-4 h-[15px]" />
                    </Button>
                    </div>
                </div>
                </CardContent>
            </Card>
            ))}
        </div>
        <div className="mt-8 text-right">
            <p className="text-[15.8px] font-['Inter',Helvetica] font-bold text-[#131313]">
            Общая сумма: KGS {totalAmount.toFixed(2)}
            </p>
            <Button className="mt-4 bg-[#131313] text-white hover:bg-[#333] text-[12.8px] font-['Inter',Helvetica]">
            Перейти к оформлению
            </Button>
        </div>
        </div>
    ) : (
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="font-['Montserrat'] text-[18px] text-[#131313]">
            Корзина пуста.
        </p>
        </div>
    )}
    </main>
</div>
);
};

export default EwimvaCart;