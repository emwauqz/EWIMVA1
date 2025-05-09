import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';

// Пример данных заказа (для демонстрации)
const orders = [
{
id: 'CRD-7650',
customer: 'Анна Смирнова',
date: '28.04.2025',
status: 'Выполнен',
statusColor: 'bg-emerald-500',
items: '3',
total: '12 450 с',
products: [
    { name: 'Джинсы wideleg', quantity: 1, price: '5 000 с' },
    { name: 'Блузка с перфорацией', quantity: 2, price: '3 725 с' },
],
},
{
id: 'CRD-7650',
customer: 'Михаил Иванов',
date: '26.04.2025',
status: 'Обработка',
statusColor: 'bg-amber-500',
items: '4',
total: '24 450 с',
products: [
    { name: 'Сумка-ведро', quantity: 1, price: '10 000 с' },
    { name: 'Жакет букле', quantity: 3, price: '4 816 с' },
],
},
{
id: 'CRD-7650',
customer: 'Елена Сидорова',
date: '20.04.2025',
status: 'Обработка',
statusColor: 'bg-amber-500',
items: '2',
total: '8 450 с',
products: [
    { name: 'Тренч укороченный', quantity: 1, price: '5 000 с' },
    { name: 'Блузка с перфорацией', quantity: 1, price: '3 450 с' },
],
},
{
id: 'CRD-7650',
customer: 'Дмитрий Козлов',
date: '19.04.2025',
status: 'Отправлен',
statusColor: 'bg-[#2f88ff]',
items: '3',
total: '14 450 с',
products: [
    { name: 'Джинсы wideleg', quantity: 2, price: '5 000 с' },
    { name: 'Сумка-ведро', quantity: 1, price: '4 450 с' },
],
},
{
id: 'CRD-7650',
customer: 'Ольга Новикова',
date: '18.04.2025',
status: 'Выполнен',
statusColor: 'bg-emerald-500',
items: '4',
total: '20 450 с',
products: [
    { name: 'Жакет букле', quantity: 2, price: '4 816 с' },
    { name: 'Тренч укороченный', quantity: 2, price: '5 409 с' },
],
},
];

export default function OrderDetails(): JSX.Element {
const { id } = useParams();
const order = orders[parseInt(id || '0')];

if (!order) {
return <div>Заказ не найден</div>;
}

return (
<main className="flex-1 p-8">
    <Card className="border border-solid border-[#00000040] rounded-[10px]">
    <CardHeader>
        <CardTitle className="font-['Inter'] font-semibold text-[#131313] text-[40px] mb-12">
        Детали заказа #{order.id}
        </CardTitle>
    </CardHeader>
    <CardContent>
        <div className="space-y-6">
        <div>
            <h2 className="font-['Inter'] font-semibold text-[#131313] text-xl">Информация о заказе</h2>
            <p className="font-['Inter'] font-normal text-[#131313] text-sm">Клиент: {order.customer}</p>
            <p className="font-['Inter'] font-normal text-[#131313] text-sm">Дата: {order.date}</p>
            <p className="font-['Inter'] font-normal text-[#131313] text-sm">
            Статус: <Badge className={`${order.statusColor} text-white font-semibold rounded-[50px] px-3 py-1.5`}>{order.status}</Badge>
            </p>
            <p className="font-['Inter'] font-normal text-[#131313] text-sm">Количество товаров: {order.items}</p>
            <p className="font-['Inter'] font-normal text-[#131313] text-sm">Итого: {order.total}</p>
        </div>
        <div>
            <h2 className="font-['Inter'] font-semibold text-[#131313] text-xl">Товары</h2>
            {order.products.map((product, index) => (
            <div key={index} className="flex justify-between border-b border-[#00000040] py-2">
                <span className="font-['Inter'] font-normal text-[#131313] text-sm">{product.name} (x{product.quantity})</span>
                <span className="font-['Inter'] font-normal text-[#131313] text-sm">{product.price}</span>
            </div>
            ))}
        </div>
        <Link to="/dashboard" className="text-blue-500 underline mt-4 inline-block">
            Назад к дашборду
        </Link>
        </div>
    </CardContent>
    </Card>
</main>
);
}