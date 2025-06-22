import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DeliverySection = () => {
  const deliveryOptions = [
    {
      title: "Доставка",
      description: "Быстрая доставка по всему городу",
      time: "30-60 мин",
      icon: "Truck",
      features: [
        "Бесплатно от 1000 ₽",
        "Горячая доставка",
        "Отслеживание заказа",
      ],
    },
    {
      title: "Самовывоз",
      description: "Забирайте заказ из ресторана",
      time: "15-20 мин",
      icon: "MapPin",
      features: ["Скидка 10%", "Готовность за 15 мин", "Упаковка в подарок"],
    },
  ];

  return (
    <section id="delivery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold mb-4">
            Доставка и самовывоз
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите удобный способ получения вашего заказа
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {deliveryOptions.map((option, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 bg-card border-border"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <Icon
                      name={option.icon}
                      size={32}
                      className="text-primary"
                    />
                  </div>
                </div>
                <CardTitle className="text-2xl font-montserrat">
                  {option.title}
                </CardTitle>
                <p className="text-muted-foreground">{option.description}</p>
                <div className="flex items-center justify-center mt-2">
                  <Icon name="Clock" size={16} className="mr-2 text-primary" />
                  <span className="font-semibold text-primary">
                    {option.time}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Icon
                        name="Check"
                        size={16}
                        className="mr-3 text-green-500"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Зоны доставки
            </h3>
            <p className="text-muted-foreground">
              Мы доставляем во все районы города
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-green-500/10 text-green-500 p-3 rounded-full w-fit mx-auto mb-3">
                <Icon name="MapPin" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Центр города</h4>
              <p className="text-sm text-muted-foreground">
                Бесплатно от 500 ₽
              </p>
              <p className="text-sm text-muted-foreground">20-30 мин</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500/10 text-yellow-500 p-3 rounded-full w-fit mx-auto mb-3">
                <Icon name="MapPin" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Спальные районы</h4>
              <p className="text-sm text-muted-foreground">
                Бесплатно от 800 ₽
              </p>
              <p className="text-sm text-muted-foreground">30-45 мин</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-500/10 text-orange-500 p-3 rounded-full w-fit mx-auto mb-3">
                <Icon name="MapPin" size={24} />
              </div>
              <h4 className="font-semibold mb-2">Пригород</h4>
              <p className="text-sm text-muted-foreground">
                Бесплатно от 1200 ₽
              </p>
              <p className="text-sm text-muted-foreground">45-60 мин</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Узнать стоимость доставки
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
