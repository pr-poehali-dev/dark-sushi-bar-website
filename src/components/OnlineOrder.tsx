import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const OnlineOrder = () => {
  const [orderStep, setOrderStep] = useState(1);

  const orderSteps = [
    { step: 1, title: "Выбор блюд", icon: "ShoppingCart" },
    { step: 2, title: "Контакты", icon: "User" },
    { step: 3, title: "Оплата", icon: "CreditCard" },
    { step: 4, title: "Подтверждение", icon: "Check" },
  ];

  const paymentMethods = [
    { name: "Картой онлайн", icon: "CreditCard", popular: true },
    { name: "Наличными", icon: "Banknote", popular: false },
    { name: "СБП", icon: "Smartphone", popular: true },
    { name: "Apple Pay", icon: "Smartphone", popular: false },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold mb-4">
            Онлайн заказ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Быстрое оформление заказа в несколько кликов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-12 overflow-x-auto">
            {orderSteps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <div
                  className={`flex items-center space-x-3 ${
                    orderStep >= step.step
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <div
                    className={`p-3 rounded-full border-2 ${
                      orderStep >= step.step
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground"
                    }`}
                  >
                    <Icon name={step.icon} size={20} />
                  </div>
                  <span className="font-medium hidden sm:block">
                    {step.title}
                  </span>
                </div>
                {index < orderSteps.length - 1 && (
                  <div
                    className={`w-12 h-0.5 mx-4 ${
                      orderStep > step.step
                        ? "bg-primary"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Order Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-montserrat">
                Быстрый заказ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Адрес доставки</Label>
                <Input id="address" placeholder="Улица, дом, квартира" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Комментарий к заказу</Label>
                <Textarea
                  id="comment"
                  placeholder="Особые пожелания, время доставки..."
                  rows={3}
                />
              </div>

              <div className="space-y-4">
                <Label>Способ оплаты</Label>
                <div className="grid grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.name}
                      className="relative p-4 border border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Icon
                          name={method.icon}
                          size={20}
                          className="text-primary"
                        />
                        <span className="font-medium">{method.name}</span>
                      </div>
                      {method.popular && (
                        <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                          Популярно
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span>Сумма заказа:</span>
                  <span className="font-semibold">1,290 ₽</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span>Доставка:</span>
                  <span className="text-green-500 font-semibold">
                    Бесплатно
                  </span>
                </div>
                <div className="border-t border-border pt-2 mt-2">
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Итого:</span>
                    <span className="text-primary">1,290 ₽</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Оформить заказ
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Нажимая "Оформить заказ", вы соглашаетесь с условиями доставки
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OnlineOrder;
