import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Анна Петрова",
      rating: 5,
      text: 'Лучшие суши в городе! Всегда свежие продукты, быстрая доставка. Особенно рекомендую сет "Токио" - просто превосходно!',
      date: "2 дня назад",
      avatar: "👩🏻",
    },
    {
      id: 2,
      name: "Дмитрий Волков",
      rating: 5,
      text: "Заказываю здесь уже полгода. Качество всегда на высоте, доставка точно в срок. Филадельфия - мой фаворит!",
      date: "5 дней назад",
      avatar: "👨🏻",
    },
    {
      id: 3,
      name: "Мария Козлова",
      rating: 5,
      text: "Отличный ресторан! Попробовали самовывоз - всё готово было точно в срок, упаковка красивая. Будем заказывать ещё!",
      date: "1 неделю назад",
      avatar: "👩🏼",
    },
    {
      id: 4,
      name: "Александр Смирнов",
      rating: 4,
      text: "Очень вкусно и качественно. Немного дороговато, но оно того стоит. Доставка быстрая, курьеры вежливые.",
      date: "2 недели назад",
      avatar: "👨🏽",
    },
  ];

  const stats = [
    { label: "Довольных клиентов", value: "2,500+", icon: "Users" },
    { label: "Средняя оценка", value: "4.9/5", icon: "Star" },
    { label: "Заказов в месяц", value: "800+", icon: "ShoppingBag" },
    { label: "Лет на рынке", value: "5", icon: "Calendar" },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-montserrat font-bold mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят о нас наши клиенты
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Icon name={stat.icon} size={32} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{review.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{review.name}</h4>
                      <span className="text-sm text-muted-foreground">
                        {review.date}
                      </span>
                    </div>

                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className={
                            i < review.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-muted-foreground"
                          }
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-muted/30 p-8 rounded-2xl">
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Поделитесь своим мнением
            </h3>
            <p className="text-muted-foreground mb-6">
              Ваш отзыв поможет нам стать лучше и поможет другим клиентам
              сделать выбор
            </p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Оставить отзыв на:
              </span>
              <div className="flex space-x-3">
                <div className="bg-primary/10 p-2 rounded cursor-pointer hover:bg-primary/20 transition-colors">
                  <span className="text-sm font-medium text-primary">
                    Яндекс
                  </span>
                </div>
                <div className="bg-primary/10 p-2 rounded cursor-pointer hover:bg-primary/20 transition-colors">
                  <span className="text-sm font-medium text-primary">
                    Google
                  </span>
                </div>
                <div className="bg-primary/10 p-2 rounded cursor-pointer hover:bg-primary/20 transition-colors">
                  <span className="text-sm font-medium text-primary">2ГИС</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
