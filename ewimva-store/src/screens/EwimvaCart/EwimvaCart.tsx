import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { MinusIcon, PlusIcon, XIcon } from 'lucide-react';
import { useNavigate, NavLink } from 'react-router-dom';
import api from '../../lib/api';

interface CartItem {
id: string;
name: string;
price: string;
image: string;
quantity: number;
colorVariants: { color: string; image: string }[];
}

const EwimvaCart = (): JSX.Element => {
const navigate = useNavigate();
const [cartItems, setCartItems] = useState<CartItem[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
const fetchCart = async () => {
    try {
    const token = localStorage.getItem('token');
    if (!token) {
        throw new Error('Please log in to view cart');
    }

    // Fetch user's cart
    const userResponse = await api.get('/auth/profile');
    const cart = userResponse.data.cart || [];

    // Fetch product details for cart items
    const cartItemsWithDetails = await Promise.all(
        cart.map(async (item: { productId: string; quantity: number }) => {
        const productResponse = await api.get(`/products/${item.productId}`);
        const product = productResponse.data;
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: item.quantity,
            colorVariants: product.colorVariants || [],
        };
        })
    );

    setCartItems(cartItemsWithDetails);
    } catch (err: any) {
    setError(err.message || 'Failed to load cart');
    } finally {
    setLoading(false);
    }
};

fetchCart();
}, []);

// Update cart in backend and local state
const handleQuantityChange = async (id: string, delta: number) => {
try {
    const newQuantity = Math.max(1, cartItems.find(item => item.id === id)!.quantity + delta);
    await api.post('/user/cart', { productId: id, quantity: newQuantity });
    setCartItems((prev) =>
    prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
    )
    );
} catch (err) {
    alert('Failed to update quantity');
}
};

// Remove item from cart
const handleRemoveItem = async (id: string) => {
try {
    await api.delete('/user/cart', { data: { productId: id } });
    setCartItems((prev) => prev.filter((item) => item.id !== id));
} catch (err) {
    alert('Failed to remove item');
}
};

// Calculate total amount
const totalAmount = cartItems.reduce(
(sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9]/g, '')) / 100 || 0;
    return sum + price * item.quantity;
},
0
);

// Navigate to checkout
const handleCheckout = () => {
navigate('/checkout');
};

if (loading) {
return <div className="p-8 text-center">Loading...</div>;
}

if (error) {
return <div className="p-8 text-center text-red-500">{error}</div>;
}

return (
<div className="flex flex-col min-h-screen">
    <main className="flex-1">
    {cartItems.length > 0 ? (
        <div className="max-w-[1920px] mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-9 mt-10">
            <h1 className="font-medium text-[24px] text-[#131313] leading-[28px]">
            Корзина
            </h1>
            <NavLink
            to="/favourites"
            className="font-['Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-[18px] whitespace-nowrap underline"
            >
            ПЕРЕЙТИ В ФАВОРИТЫ
            </NavLink>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cartItems.map((item) => (
            <Card key={item.id} className="w-full max-w-[479px] h-auto border-none">
                <CardContent className="p-0 relative">
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
                        size="icon"
                        className="w-5 h-5 rounded-[5px] border-[#00000040] p-0"
                        onClick={() => handleQuantityChange(item.id, -1)}
                    >
                        <MinusIcon className="h-3 w-3" />
                    </Button>
                    <span className="mx-2 font-normal text-black text-[15px] leading-[18px] font-['Inter',Helvetica]">
                        {item.quantity}
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        className="w-5 h-5 rounded-[5px] border-[#00000040] p-0"
                        onClick={() => handleQuantityChange(item.id, 1)}
                    >
                        <PlusIcon className="h-3 w-3" />
                    </Button>
                    </div>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 p-0 h-auto w-auto"
                    onClick={() => handleRemoveItem(item.id)}
                >
                    <XIcon className="h-3.5 w-3.5" />
                </Button>
                </CardContent>
            </Card>
            ))}
        </div>
        <div className="mt-8 text-right">
            <p className="text-[15.8px] font-['Inter',Helvetica] font-bold text-[#131313]">
            Общая сумма: {totalAmount.toLocaleString()} KGS
            </p>
            <Button
            className="mt-4 bg-[#131313] text-white hover:bg-[#333] text-[12.8px] font-['Inter',Helvetica]"
            onClick={handleCheckout}
            >
            Перейти к оформлению
            </Button>
        </div>
        </div>
    ) : (
        <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white overflow-hidden w-[1920px] h-[1200px] relative">
            <div className="absolute top-[294px] w-full flex justify-center">
            <div className="text-center">
                <div className="[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap">
                Корзина пуста
                </div>
                <div className="w-[336px] mt-5 [font-family:'Inter',Helvetica] font-normal text-[#131313] text-xs tracking-[0] leading-[18px]">
                Вдохновляйтесь нашими коллекциями и приобретайте новинки для своего гардероба
                </div>
                <div className="flex flex-col items-center">
                <Button
                    className="w-[350px] h-11 mt-6 bg-[#131313] rounded-none hover:bg-[#333333]"
                    onClick={() => navigate('/new')}
                >
                    <span className="text-white text-[13px] text-center [font-family:'Inter',Helvetica] font-bold tracking-[0] leading-[18px] whitespace-nowrap">
                    Посмотреть новинки
                    </span>
                </Button>
                <Button
                    className="w-[350px] h-11 mt-2 bg-white text-[#131313] border border-[#131313] rounded-none hover:bg-gray-100"
                    onClick={() => navigate('/favourites')}
                >
                    <span className="text-[13px] text-center [font-family:'Inter',Helvetica] font-bold tracking-[0] leading-[18px] whitespace-nowrap">
                    Фавориты
                    </span>
                </Button>
                </div>
            </div>
            </div>
        </div>
        </div>
    )}
    </main>
</div>
);
};

export default EwimvaCart;