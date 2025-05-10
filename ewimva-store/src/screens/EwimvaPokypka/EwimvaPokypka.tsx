import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useNavigate } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

interface PurchaseItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  colorVariants: { color: string; image: string }[];
  orderDate: string;
  totalAmount: number;
  orderId: string;
}

export const EwimvaPokypka = (): JSX.Element => {
  const navigate = useNavigate();

  const [purchases, setPurchases] = useState<PurchaseItem[]>([]);

  useEffect(() => {
    try {
      const savedPurchases = localStorage.getItem('purchases');
      if (savedPurchases) {
        const orders = JSON.parse(savedPurchases);
        const normalizedPurchases: PurchaseItem[] = [];
        const shipping = 500; // Фиксированная стоимость доставки

        orders.forEach((order: any, orderIndex: number) => {
          const baseOrderDate = order.date || new Date().toISOString().split('T')[0];

          order.products.forEach((product: { name: string; quantity: number; price: string; image: string; colorVariants: { color: string; image: string }[] }, productIndex: number) => {
            const priceNum = parseFloat(product.price.replace(' KGS', '').replace(' ', '')) || 0;
            const quantity = product.quantity || 1;
            // Доставка добавляется только к первому товару в заказе
            const totalAmount = priceNum * quantity + (productIndex === 0 ? shipping : 0);

            normalizedPurchases.push({
              id: orderIndex * 1000 + normalizedPurchases.length,
              name: product.name || 'Неизвестный товар',
              price: product.price || '0 KGS',
              image: product.image || '/placeholder-image.jpg', // Извлекаем image из product
              quantity: quantity,
              colorVariants: product.colorVariants || [],
              orderDate: baseOrderDate,
              totalAmount: totalAmount,
              orderId: order.id || `CRD-${orderIndex}`,
            });
          });
        });

        setPurchases(normalizedPurchases);
      }
    } catch (error) {
      console.error('Ошибка при загрузке покупок:', error);
      setPurchases([]);
    }
  }, []);

  // Очистить все покупки
  const handleClearPurchases = () => {
    localStorage.removeItem('purchases');
    setPurchases([]);
  };

  // Удалить конкретную покупку
  const handleRemovePurchase = (id: number) => {
    const updatedPurchases = purchases.filter((item) => item.id !== id);
    setPurchases(updatedPurchases);

    // Обновляем localStorage
    const updatedOrders = updatedPurchases.reduce((acc: any[], item) => {
      const order = acc.find((o) => o.id === item.orderId);
      if (order) {
        order.products.push({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          image: item.image,
          colorVariants: item.colorVariants,
        });
      } else {
        acc.push({
          id: item.orderId,
          customer: '',
          email: '',
          date: item.orderDate,
          status: 'processing',
          items: item.quantity,
          amount: `${updatedPurchases.filter(p => p.orderId === item.orderId).reduce((sum, p) => sum + p.totalAmount, 0).toLocaleString()} с`,
          products: [{
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            image: item.image,
            colorVariants: item.colorVariants,
          }],
        });
      }
      return acc;
    }, []);

    localStorage.setItem('purchases', JSON.stringify(updatedOrders));
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1920px] min-h-screen relative">
        {purchases.length > 0 ? (
          <div className="max-w-[1920px] mx-auto px-4 py-8 pb-8">
            <div className="flex justify-between items-center mb-6 mt-10">
              <h1 className="[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[24px] tracking-[0] leading-5 whitespace-nowrap">
                Мои покупки
              </h1>
              <Button
                className="bg-[#131313] rounded-none hover:bg-[#333333] text-white text-[13px] [font-family:'Inter',Helvetica] font-bold tracking-[0] leading-[18px] whitespace-nowrap"
                onClick={handleClearPurchases}
              >
                Очистить
              </Button>
            </div>
            <div className="space-y-6">
              {purchases.map((item) => (
                <Card key={item.id} className="w-full border-none">
                  <CardContent className="p-0 flex items-start">
                    <div
                      className="w-[326px] h-[453px] bg-cover bg-center mr-4"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="flex-1 space-y-2">
                      <h3 className="font-normal text-[11.8px] text-[#131313] [font-family:'Inter',Helvetica] leading-[18px]">
                        {item.name}
                      </h3>
                      <p className="font-normal text-[12.8px] text-[#131313] [font-family:'Inter',Helvetica] leading-[18px]">
                        {item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        {item.colorVariants.map((color, index) => (
                          <div
                            key={index}
                            className="w-3.5 h-3.5 rounded-[7px] bg-cover bg-center"
                            style={{ backgroundImage: `url(${color.image || ''})` }}
                          />
                        ))}
                      </div>
                      <div className="font-normal text-[12.8px] text-[#131313] [font-family:'Inter',Helvetica] leading-[18px]">
                        Количество: {item.quantity}
                      </div>
                      <div className="font-normal text-[12.8px] text-[#131313] [font-family:'Inter',Helvetica] leading-[18px]">
                        Дата заказа: {item.orderDate}
                      </div>
                      <div className="font-normal text-[12.8px] text-[#131313] [font-family:'Inter',Helvetica] leading-[18px]">
                        Итоговая сумма: {item.totalAmount.toLocaleString()} KGS
                      </div>
                      <Button
                        variant="outline"
                        className="mt-2 bg-black text-white rounded-none hover:bg-black"
                        onClick={() => handleRemovePurchase(item.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" /> Удалить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="absolute top-[294px] w-full flex justify-center">
            <div className="text-center">
              <div className="[font-family:'Inter',Helvetica] font-bold text-[#131313] text-[15.8px] tracking-[0] leading-5 whitespace-nowrap">
                У ВАС ПОКА НЕТ ПОКУПОК
              </div>
              <div className="w-[336px] mt-5 [font-family:'Inter',Helvetica] font-normal text-[#131313] text-xs tracking-[0] leading-[18px]">
                Вдохновляйтесь нашими коллекциями и приобретайте новинки для своего гардероба
              </div>
              <Button
                className="w-[350px] h-11 mt-6 bg-[#131313] rounded-none hover:bg-[#333333]"
                onClick={() => navigate('/new')}
              >
                <span className="text-white text-[13px] text-center [font-family:'Inter',Helvetica] font-bold tracking-[0] leading-[18px] whitespace-nowrap">
                  ПОСМОТРЕТЬ НОВИНКИ
                </span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};