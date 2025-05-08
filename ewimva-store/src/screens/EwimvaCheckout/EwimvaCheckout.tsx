import React, { useState } from 'react';
import { MinusIcon, PlusIcon, XIcon } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Separator } from '../../components/ui/separator';
import { useNavigate } from 'react-router-dom';

interface OrderItem {
  id: number;
  name: string;
  size: string;
  price: string;
  quantity: number;
  image: string;
}

interface OrderSummary {
  subtotal: number;
  shipping: number;
  total: number;
}

export const EwimvaCheckout = (): JSX.Element => {
  const navigate = useNavigate();

  // Состояние для товаров в заказе
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    {
      id: 1,
      name: 'Платье из смесового льна с оборкой',
      size: 'М',
      price: '12 990 KGS',
      quantity: 1,
      image: '/87087899-99-d6.kkk.png',
    },
    {
      id: 2,
      name: 'Драпированное платье с цветочным принтом',
      size: 'М',
      price: '12 990 KGS',
      quantity: 1,
      image: '/87038267-05-d2.kkk.png',
    },
  ]);

  // Состояние для данных формы
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    region: '',
    city: '',
    postalCode: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cardHolder: '',
    cvv: '',
  });

  // Состояние для способа оплаты
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Расчет суммы заказа
  const calculateSummary = (): OrderSummary => {
    const subtotal = orderItems.reduce(
      (sum, item) =>
        sum + parseFloat(item.price.replace(' KGS', '').replace(' ', '')) * item.quantity,
      0
    );
    const shipping = 500; // Фиксированная стоимость доставки
    const total = subtotal + shipping;
    return {
      subtotal,
      shipping,
      total,
    };
  };

  const orderSummary = calculateSummary();

  // Обработчик изменения количества
  const handleQuantityChange = (id: number, delta: number) => {
    setOrderItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  // Обработчик удаления товара
  const handleRemoveItem = (id: number) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Обработчик изменения формы
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Обработчик изменения способа оплаты
  const handlePaymentChange = (value: string) => {
    setPaymentMethod(value);
  };

  // Обработчик оплаты
  const handlePayment = () => {
    const requiredFields = [
      'firstName',
      'lastName',
      'address',
      'region',
      'city',
      'postalCode',
      'phone',
    ];
    const isFormValid = requiredFields.every((field) => formData[field as keyof typeof formData]);
    
    if (paymentMethod === 'card') {
      const cardFields = ['cardNumber', 'expiryDate', 'cardHolder', 'cvv'];
      const isCardValid = cardFields.every((field) => formData[field as keyof typeof formData]);
      if (!isFormValid || !isCardValid) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
      }
    } else if (!isFormValid) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    if (orderItems.length === 0) {
      alert('Ваш заказ пуст. Добавьте товары в корзину.');
      return;
    }

    // Здесь можно добавить логику отправки данных на сервер
    alert('Оплата успешно выполнена! Ваш заказ оформлен.');
    setOrderItems([]);
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      region: '',
      city: '',
      postalCode: '',
      phone: '',
      cardNumber: '',
      expiryDate: '',
      cardHolder: '',
      cvv: '',
    });
    navigate('/purchases'); // Перенаправление на страницу покупок
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1920px] relative">
        <main className="px-[214px] py-[114px]">
          <h1 className="font-bold text-[#131313] text-[15.8px] leading-5 [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap mb-20">
            ОФОРМЛЕНИЕ ЗАКАЗА
          </h1>

          <div className="flex gap-20">
            {/* Left column - Customer information */}
            <div className="flex-1">
              <h2 className="font-bold text-[#131313] text-[15.8px] leading-5 [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap mb-6">
                Ваши данные
              </h2>

              <div className="flex flex-col gap-6">
                <div className="flex gap-2.5">
                  <div className="w-[400px]">
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="h-11 border border-solid border-[#b8b8b8] rounded-none"
                      placeholder="ИМЯ *"
                      required
                    />
                  </div>
                  <div className="w-[400px]">
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="h-11 border border-solid border-[#b8b8b8] rounded-none"
                      placeholder="ФАМИЛИЯ *"
                      required
                    />
                  </div>
                </div>

                <div className="w-[810px]">
                  <Input
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="h-11 border border-solid border-[#b8b8b8] rounded-none"
                    placeholder="АДРЕС *"
                    required
                  />
                </div>

                <div className="flex gap-2.5">
                  <div className="w-[400px] relative">
                    <Input
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="h-11 border border-solid border-[#b8b8b8] rounded-none"
                      placeholder="РЕГИОН *"
                      required
                    />
                    <img
                      className="absolute w-[17px] h-2.5 top-[17px] right-[18px]"
                      alt="Vector"
                      src="/vector-3.kkk.svg"
                    />
                  </div>
                  <div className="w-[400px]">
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="h-11 border border-solid border-[#b8b8b8] rounded-none"
                      placeholder="ГОРОД *"
                      required
                    />
                  </div>
                </div>

                <div className="w-[810px]">
                  <Input
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="h-11 border border-solid border-[#b8b8b8] rounded-none"
                    placeholder="ПОЧТОВЫЙ ИНДЕКС *"
                    required
                  />
                </div>

                <div className="flex">
                  <div className="w-[51px]">
                    <Input
                      className="h-11 border border-solid border-[#b8b8b8] rounded-none"
                      value="+996"
                      readOnly
                    />
                  </div>
                  <div className="w-[278px]">
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-11 border border-solid border-[#b8b8b8] rounded-none"
                      placeholder="ТЕЛЕФОН *"
                      required
                    />
                  </div>
                </div>
              </div>

              <h2 className="font-bold text-[#131313] text-[15.8px] leading-5 [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap mt-20 mb-6">
                Способ оплаты
              </h2>

              <RadioGroup value={paymentMethod} onValueChange={handlePaymentChange} className="mb-10">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="card"
                    id="card"
                    className="rounded-[50px] border-[#000000e0]"
                  />
                  <Label
                    htmlFor="card"
                    className="font-normal text-[#131313] text-[13px] leading-5 [font-family:'Inter',Helvetica]"
                  >
                    Банковская карта
                  </Label>
                  <div className="w-5 h-[17px] ml-2">
                    <div className="relative w-[22px] h-[19px] -top-px -left-px">
                      <img
                        className="absolute w-[22px] h-2.5 top-[5px] left-0"
                        alt="Group"
                        src="/group-1.kkk.png"
                      />
                      <img
                        className="absolute w-[22px] h-[19px] top-0 left-0"
                        alt="Vector"
                        src="/vector-4.kkk.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <RadioGroupItem
                    value="other"
                    id="other"
                    className="rounded-[50px] border-[#000000e0]"
                  />
                  <div className="w-[70px] h-11 bg-[url(/vector-6.svg)] bg-[100%_100%] ml-10">
                    <img
                      className="w-[60px] h-4 mt-3.5 ml-[5px]"
                      alt="Group"
                      src="/group-2.kkk.png"
                    />
                  </div>
                </div>
              </RadioGroup>

              {paymentMethod === 'card' && (
                <>
                  <div className="w-[811px] h-11 relative border border-solid border-[#b8b8b8] mb-6">
                    <Input
                      name="paymentDetails"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="h-11 border-none rounded-none"
                      placeholder="ВВЕДИТЕ ПЛАТЕЖНЫЕ ДАННЫЕ ПОЛНОСТЬЮ *"
                      required
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                      <img
                        className="w-[37px] h-3"
                        alt="Vector"
                        src="/vector-8.kkk.svg"
                      />
                      <img
                        className="w-[30px] h-[19px]"
                        alt="Group"
                        src="/group.kkk.png"
                      />
                      <img
                        className="w-[35px] h-[22px]"
                        alt="Vector"
                        src="/vector-1.kkk.svg"
                      />
                      <img
                        className="w-[35px] h-3"
                        alt="Vector"
                        src="/vector-2.kkk.svg"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2.5 mb-6">
                    <div className="w-[400px]">
                      <Input
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="h-11 border border-solid border-[#b8b8b8] rounded-none"
                        placeholder="НОМЕР КАРТЫ *"
                        required
                      />
                    </div>
                    <div className="w-[400px]">
                      <Input
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="h-11 border border-solid border-[#b8b8b8] rounded-none"
                        placeholder="СРОК ДЕЙСТВИЯ (ММ/ГГ) *"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex gap-2.5">
                    <div className="w-[400px]">
                      <Input
                        name="cardHolder"
                        value={formData.cardHolder}
                        onChange={handleInputChange}
                        className="h-11 border border-solid border-[#b8b8b8] rounded-none"
                        placeholder="ВЛАДЕЛЕЦ КАРТЫ *"
                        required
                      />
                    </div>
                    <div className="w-[400px]">
                      <Input
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="h-11 border border-solid border-[#b8b8b8] rounded-none"
                        placeholder="CVV-НОМЕР *"
                        required
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right column - Order summary */}
            <div className="w-[524px]">
              <h2 className="font-bold text-[#131313] text-[15.8px] leading-5 [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap mb-6">
                Ваш заказ
              </h2>

              {orderItems.map((item) => (
                <Card key={item.id} className="mb-6 border-none shadow-none">
                  <CardContent className="p-0 flex">
                    <div className="w-[138px] h-48 mr-3">
                      <img
                        className="w-full h-full object-cover"
                        alt={item.name}
                        src={item.image}
                      />
                    </div>
                    <div className="flex-1 relative">
                      <div className="font-normal text-black text-sm leading-[18px] [font-family:'Inter',Helvetica] mb-1">
                        {item.name}
                      </div>
                      <div className="font-normal text-[#000000b2] text-sm leading-[18px] [font-family:'Inter',Helvetica] mb-6">
                        Размер: {item.size}
                      </div>
                      <div className="font-normal text-black text-sm leading-[18px] [font-family:'Inter',Helvetica] mt-10">
                        {item.price}
                      </div>
                      <div className="flex items-center absolute bottom-0">
                        <Button
                          variant="outline"
                          size="icon"
                          className="w-5 h-5 rounded-[5px] border-[#00000040] p-0"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          <MinusIcon className="h-3 w-3" />
                        </Button>
                        <span className="mx-2 font-normal text-black text-[15px] leading-[18px] [font-family:'Inter',Helvetica]">
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
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-0 right-0 p-0 h-auto w-auto"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <XIcon className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Separator className="my-6" />

              <div className="flex justify-between mb-4">
                <div className="font-normal text-[#000000b2] text-sm leading-[18px] [font-family:'Inter',Helvetica]">
                  Сумма
                </div>
                <div className="font-normal text-black text-sm leading-[18px] [font-family:'Inter',Helvetica]">
                  {orderSummary.subtotal.toLocaleString()} KGS
                </div>
              </div>

              <div className="flex justify-between mb-4">
                <div className="font-normal text-[#000000b2] text-sm leading-[18px] [font-family:'Inter',Helvetica]">
                  Доставка
                </div>
                <div className="font-normal text-black text-sm leading-[18px] [font-family:'Inter',Helvetica]">
                  {orderSummary.shipping.toLocaleString()} KGS
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex justify-between mb-10">
                <div className="font-normal text-black text-xl leading-[18px] [font-family:'Inter',Helvetica]">
                  Итого
                </div>
                <div className="font-normal text-black text-xl leading-[18px] [font-family:'Inter',Helvetica]">
                  {orderSummary.total.toLocaleString()} KGS
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-20">
            <Button
              className="w-[350px] h-11 bg-[#131313] rounded-none hover:bg-[#333333]"
              onClick={handlePayment}
            >
              <span className="font-bold text-white text-[13px] text-center [font-family:'Inter',Helvetica] tracking-[0] leading-[18px] whitespace-nowrap">
                ОПЛАТИТЬ
              </span>
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};