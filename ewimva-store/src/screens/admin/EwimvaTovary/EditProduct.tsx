import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from '../../../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Product, getProducts, updateProduct } from '../../../data/productsData';
import { categories } from '../../../data/categories';

export default function EditProduct(): JSX.Element {
const { id } = useParams<{ id: string }>();
const navigate = useNavigate();
const [product, setProduct] = useState<Product | null>(null);
const [name, setName] = useState('');
const [category, setCategory] = useState('');
const [status, setStatus] = useState<'available' | 'low' | 'unavailable'>('available');
const [stock, setStock] = useState('');
const [price, setPrice] = useState('');
const [priceError, setPriceError] = useState<string | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

// Функция форматирования цены
const formatPrice = (value: string): string => {
const cleanValue = value.replace(/[^\d]/g, '');
if (!cleanValue) return '';
const number = parseInt(cleanValue, 10);
const formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
return `KGS ${formatted}`;
};

useEffect(() => {
const fetchProduct = async () => {
    try {
    const products = await getProducts();
    console.log('Products fetched for edit:', products);
    console.log('Searching for product with id:', id);
    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
        console.log('Found product:', foundProduct);
        setProduct(foundProduct);
        setName(foundProduct.name);
        setCategory(foundProduct.category);
        setStatus(foundProduct.status || 'available');
        setStock(foundProduct.stock?.toString() || '0');
        // Преобразуем цену из "35990с" или числа в "KGS 35 990"
        const rawPrice = foundProduct.price.replace(/[^\d]/g, '');
        setPrice(rawPrice ? formatPrice(rawPrice) : foundProduct.price);
    } else {
        console.log('Product not found for id:', id);
        setError('Товар не найден');
    }
    setLoading(false);
    } catch (err) {
    console.error('Error fetching product:', err);
    setError('Не удалось загрузить товар');
    setLoading(false);
    }
};
fetchProduct();
}, [id]);

const validatePrice = (): boolean => {
if (!price || !/^KGS\s*\d{1,3}(?:\s*\d{3})*$/.test(price.trim())) {
    setPriceError('Цена должна быть в формате "KGS число" (например, "KGS 6 990")');
    return false;
}
setPriceError(null);
return true;
};

const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const value = e.target.value;
const cleanValue = value.replace(/[^\d]/g, '');
setPrice(cleanValue ? formatPrice(cleanValue) : '');
validatePrice();
};

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
if (!product || !validatePrice()) return;

try {
    await updateProduct({
    ...product,
    name,
    category,
    status,
    stock: Number(stock),
    price,
    });
    alert('Товар обновлён!');
    navigate('/products');
} catch (err) {
    alert('Не удалось обновить товар');
}
};

if (loading) {
return <div className="flex-1 p-8">Загрузка...</div>;
}

if (error || !product) {
return <div className="flex-1 p-8 text-red-500">{error || 'Товар не найден'}</div>;
}

return (
<main className="flex-1 p-8">
    <Card className="border border-solid border-[#00000040] rounded-[10px]">
    <CardHeader>
        <CardTitle className="font-['Inter'] font-semibold text-[#131313] text-[40px] mb-12">
        Редактировать товар #{product.id}
        </CardTitle>
    </CardHeader>
    <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Название
            </label>
            <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Категория
            </label>
            <Select onValueChange={(value: string) => setCategory(value)} value={category}>
            <SelectTrigger className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.name}>
                    {cat.name}
                </SelectItem>
                ))}
            </SelectContent>
            </Select>
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Статус
            </label>
            <Select onValueChange={(value: 'available' | 'low' | 'unavailable') => setStatus(value)} value={status}>
            <SelectTrigger className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="available">В наличии</SelectItem>
                <SelectItem value="low">Мало</SelectItem>
                <SelectItem value="unavailable">Нет в наличии</SelectItem>
            </SelectContent>
            </Select>
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Остаток
            </label>
            <Input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Цена
            </label>
            <Input
            type="text"
            value={price}
            onChange={handlePriceChange}
            placeholder="Введите цену (например, KGS 6 990)"
            className={`w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2 ${priceError ? 'border-red-500' : ''}`}
            />
            {priceError && (
            <p className="text-red-500 text-xs mt-1">{priceError}</p>
            )}
        </div>
        <div className="flex gap-4">
            <Button type="submit" className="bg-black text-white rounded-md px-6 py-2">
            Сохранить
            </Button>
            <Link to="/products" className="text-blue-500 underline mt-2">
            Назад к товарам
            </Link>
        </div>
        </form>
    </CardContent>
    </Card>
</main>
);
}