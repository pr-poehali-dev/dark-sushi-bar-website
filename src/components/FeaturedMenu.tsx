import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeaturedMenu = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Филадельфия",
      description: "Лосось, сливочный сыр, огурец, нори",
      price: 490,
      image:
        "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop",
      category: "Роллы",
    },
    {
      id: 2,
      name: "Калифорния",
      description: "Краб, авокадо, огурец, икра тобико",
      price: 420,
      image:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop",
      category: "Роллы",
    },
    {
      id: 3,
      name: 'Сет "Токио"',
      description: "24 шт: Филадельфия, Калифорния, Спайси тунец",
      price: 1290,
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop",
      category: "Сеты",
    },
    {
      id: 4,
      name: "Нигири с лососем",
      description: "Свежий лосось на рисовой подушке",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=300&fit=crop",
      category: "Суши",
    },
    {
      id: 5,
      name: "Дракон",
      description: "Угорь, авокадо, огурец, соус унаги",
      price: 650,
      image:
        "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop",
      category: "Роллы",
    },
    {
      id: 6,
      name: "Мисо суп",
      description: "Традиционный японский суп с тофу и водорослями",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
      category: "Супы",
    },
  ];

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold mb-4">
            Популярные блюда
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Отборные блюда японской кухни, приготовленные по традиционным
            рецептам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-lg transition-all duration-300 bg-card border-border overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {item.price} ₽
                  </span>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Icon name="Plus" size={16} className="mr-2" />В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Смотреть всё меню
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
