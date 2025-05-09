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

const orders = [
{
id: 'CRD-7650',
customer: 'Анна Смирнова',
date: '28.04.2025',
status: 'Выполнен',
statusColor: 'bg-emerald-500',
items: 3,
total: '12 450 с',
},
{
id: 'CRD-7651',
customer: 'Михаил Иванов',
date: '26.04.2025',
status: 'Обработка',
statusColor: 'bg-amber-500',
items: 4,
total: '24 450 с',
},
];

export default function EditOrder(): JSX.Element {
const { id } = useParams<{ id: string }>();
const navigate = useNavigate();
const [order, setOrder] = useState(orders.find((o) => o.id === id) || {
id: '', customer: '', date: '', status: '', items: 0, total: '',
});
const [customer, setCustomer] = useState(order.customer);
const [date, setDate] = useState(order.date);
const [status, setStatus] = useState(order.status);
const [items, setItems] = useState(order.items.toString());
const [total, setTotal] = useState(order.total);

useEffect(() => {
const foundOrder = orders.find((o) => o.id === id);
if (foundOrder) {
    setOrder(foundOrder);
    setCustomer(foundOrder.customer);
    setDate(foundOrder.date);
    setStatus(foundOrder.status);
    setItems(foundOrder.items.toString());
    setTotal(foundOrder.total);
}
}, [id]);

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
// Имитация обновления заказа
console.log({ id, customer, date, status, items, total });
alert('Заказ обновлён! (Это имитация)');
navigate('/orders');
};

return (
<main className="flex-1 p-8">
    <Card className="border border-solid border-[#00000040] rounded-[10px]">
    <CardHeader>
        <CardTitle className="font-['Inter'] font-semibold text-[#131313] text-[40px] mb-12">
        Редактировать заказ #{order.id}
        </CardTitle>
    </CardHeader>
    <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Клиент
            </label>
            <Input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Дата
            </label>
            <Input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Статус
            </label>
            <Select onValueChange={setStatus} value={status}>
            <SelectTrigger className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="Обработка">Обработка</SelectItem>
                <SelectItem value="Отправлен">Отправлен</SelectItem>
                <SelectItem value="Выполнен">Выполнен</SelectItem>
                <SelectItem value="Отменён">Отменён</SelectItem>
            </SelectContent>
            </Select>
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Кол-во товаров
            </label>
            <Input
            type="number"
            value={items}
            onChange={(e) => setItems(e.target.value)}
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
        </div>
        <div>
            <label className="font-['Inter'] font-normal text-[#131313] text-sm mb-2 block">
            Сумма
            </label>
            <Input
            type="text"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className="w-full border-[#00000040] rounded-md focus:border-[#131313] focus:ring-1 focus:ring-[#131313] p-2"
            />
        </div>
        <div className="flex gap-4">
            <Button type="submit" className="bg-black text-white rounded-md px-6 py-2">
            Сохранить
            </Button>
            <Link to="/orders" className="text-blue-500 underline mt-2">
            Назад к заказам
            </Link>
        </div>
        </form>
    </CardContent>
    </Card>
</main>
);
}